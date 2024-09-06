import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../../services/Product.model';
import { Services } from '../../services/services.component';
import { MatSidenav } from '@angular/material/sidenav';
import { MatDialog } from '@angular/material/dialog';
import { CartService } from './../../services/cart.service';
import { EmptyCartDialogComponent } from './../EmptyCartDialog/EmptyCartDialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChild('sidenav') sidenav: MatSidenav | undefined;
  categories: string[] = ['electronics', 'men\'s clothing', 'jewelery', 'women\'s clothing'];
  products: Product[] = [];
  filteredProducts: Product[] = [];
  selectedCategory: string = '';
  searchQuery: string = '';

  constructor(
    private services: Services,
    private router: Router,
    private cartService: CartService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.services.getProducts().subscribe(data => {
      this.products = data;
      this.filteredProducts = [...this.products];
    });
  }

  filterByCategory(categoryName: string): void {
    this.services.getProductsByCategory(categoryName).subscribe(data => {
      this.filteredProducts = data;
    });
  }

  onCategorySelect(categoryName: string): void {
    this.selectedCategory = categoryName;
    this.filterByCategory(categoryName);
    if (this.sidenav) {
      this.sidenav.close();
    }
  }

  onSearch(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.searchQuery = input.value || '';
    this.filterProducts();
  }

  onSearchQuery(): void {
    this.filterProducts();
  }

  private filterProducts(): void {
    let filtered: Product[] = this.products;

    if (this.selectedCategory) {
      filtered = filtered.filter(product =>
        product.category.toLowerCase() === this.selectedCategory.toLowerCase()
      );
    }

    if (this.searchQuery) {
      filtered = filtered.filter(product =>
        product.title.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }

    this.filteredProducts = filtered;
  }

  redirectToLogin(): void {
    this.router.navigate(['/login']);
  }

  redirectToProfile(): void {
    this.router.navigate(['/profile']);
  }

  viewProduct(productId: number): void {
    this.router.navigate(['/product', productId]);
  }

  checkCart(): void {
    const items = this.cartService.getItems();
    if (items.length === 0) {
      this.dialog.open(EmptyCartDialogComponent);
    } else {
      this.router.navigate(['/cart']);
    }
  }
}





















