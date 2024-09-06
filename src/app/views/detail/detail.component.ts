import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../services/Product.model';
import { Services } from './../../services/services.component';
import { CartService } from './../../services/cart.service';
import { HttpErrorResponse } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { EmptyCartDialogComponent } from './../EmptyCartDialog/EmptyCartDialog.component';
import { ProductAddedDialogComponent } from '../ProductAddedDialog/ProductAddedDialog.component';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  product: Product | null = null;
  searchQuery: string = '';

  constructor(
    private services: Services,
    private route: ActivatedRoute,
    private router: Router,
    private cartService: CartService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    const id = idParam ? +idParam : null;

    if (id !== null) {
      this.loadProductDetail(id);
    } else {
      console.error('ID no proporcionado en la ruta');
    }
  }

  loadProductDetail(id: number): void {
    this.services.getProductById(id).subscribe({
      next: (data: Product) => {
        this.product = data;
        console.log('Producto cargado:', this.product);
      },
      error: (err: HttpErrorResponse) => {
        console.error('Error al obtener el producto', err.message);
      }
    });
  }

  addToCart(): void {
    if (this.product) {
      this.cartService.addItem(this.product); // Usa addItem para agregar al carrito
      this.dialog.open(ProductAddedDialogComponent, {
        data: this.product,
        width: '400px'
      }).afterClosed().subscribe(result => {
        if (result === 'checkout') {
          this.router.navigate(['/checkout']);
        } else if (result === 'view-cart') {
          this.router.navigate(['/cart']);
        }
      });
    }
  }

  buyNow(): void {
    if (localStorage.getItem('userLoggedIn') === 'true') {
      if (this.product) {
        this.cartService.addItem(this.product);
        this.router.navigate(['/checkout']);
      }
    } else {
      alert('Necesitas iniciar sesión para hacer una compra.');
      this.router.navigate(['/login']);
    }
  }

  checkCart(): void {
    const items = this.cartService.getItems();
    if (items.length === 0) {
      this.dialog.open(EmptyCartDialogComponent);
    } else {
      this.router.navigate(['/cart']);
    }
  }

  onSearch(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.searchQuery = input ? input.value : '';
    console.log(`Buscando: ${this.searchQuery}`);
  }

  onSearchQuery(): void {
    console.log(`Buscar: ${this.searchQuery}`);
  }
}









