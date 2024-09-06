import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CartService, CartItem } from './../../services/cart.service';
import { Router } from '@angular/router';
import { EmptyCartDialogComponent } from './../EmptyCartDialog/EmptyCartDialog.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  items: CartItem[] = [];
  total: number = 0;

  constructor(
    private cartService: CartService,
    private dialog: MatDialog,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadCartItems();
  }

  loadCartItems(): void {
    this.items = this.cartService.getItems();
    this.updateTotal();
  }

  updateTotal(): void {
    this.total = this.cartService.getTotal();
  }

  updateQuantity(productId: number, quantity: number): void {
    this.cartService.updateQuantity(productId, quantity);
    this.updateTotal();
  }

  clearCart(): void {
    this.cartService.clearCart();
    this.items = [];
    this.total = 0;
    console.log('Carrito vaciado');
  }

  buyNow(): void {
    if (this.items.length === 0) {
      this.dialog.open(EmptyCartDialogComponent);
      return;
    }

    if (localStorage.getItem('userLoggedIn') === 'true') {
      this.router.navigate(['/checkout']);
    } else {
      alert('Necesitas iniciar sesión para realizar la compra.');
      this.router.navigate(['/login']);
    }
  }
}




