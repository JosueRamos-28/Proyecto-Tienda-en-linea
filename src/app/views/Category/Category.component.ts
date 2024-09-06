import { EmptyCartDialogComponent } from './../EmptyCartDialog/EmptyCartDialog.component';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../services/Product.model';
import { Services } from './../../services/services.component';
import { CartService } from './../../services/cart.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  products: Product[] = [];
  filteredProducts: Product[] = [];
  selectedCategory: string = '';
  searchQuery: string = '';
  categories: string[] = ['electronics', 'men\'s clothing', 'jewelery', 'women\'s clothing'];

  constructor(
    private services: Services,
    private route: ActivatedRoute,
    private router: Router,
    private cartService: CartService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.selectedCategory = params.get('categoryName') || '';
      this.loadProductsByCategory(this.selectedCategory);
    });
  }

  loadProductsByCategory(categoryName: string): void {
    if (categoryName) {
      this.services.getProductsByCategory(categoryName).subscribe(data => {
        this.products = data;
        this.filteredProducts = data;
      });
    }
  }

  addToCart(product: Product): void {
    this.cartService.addItem(product);
    alert('Producto agregado al carrito');
  }

  checkCart(): void {
    const items = this.cartService.getItems();
    if (items.length === 0) {
      this.dialog.open(EmptyCartDialogComponent);
    } else {
      this.router.navigate(['/cart']);
    }
  }

  private filterProducts(): void {
    let filtered = this.products;

    if (this.searchQuery) {
      filtered = filtered.filter(product =>
        product.title.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }

    this.filteredProducts = filtered;
  }

  onSearchQuery(): void {
    this.filterProducts();
  }

  onSearch(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.searchQuery = input ? input.value : '';
    this.filterProducts();
  }

  onCategorySelect(category: string): void {
    this.selectedCategory = category;
    this.router.navigate(['/category', category]);
    this.loadProductsByCategory(category);
  }
}









