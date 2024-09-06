import { Injectable } from '@angular/core';

export interface CartItem {
  product: any;
  quantity: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private items: CartItem[] = [];

  addItem(product: any): void {
    const existingItem = this.items.find(item => item.product.id === product.id);

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      const cartItem: CartItem = {
        product: product,
        quantity: 1
      };
      this.items.push(cartItem);
    }
  }

  getItems(): CartItem[] {
    return this.items;
  }

  getTotal(): number {
    return this.items.reduce((total, item) => total + (item.product.price * item.quantity), 0);
  }

  clearCart(): void {
    this.items = [];
  }

  updateQuantity(productId: number, quantity: number): void {
    const existingItem = this.items.find(item => item.product.id === productId);
    if (existingItem) {
      existingItem.quantity = quantity;
    }
  }


  removeItem(productId: number): void {
    this.items = this.items.filter(i => i.product.id !== productId);
    console.log(`Producto con ID ${productId} eliminado del carrito.`);
  }
}










