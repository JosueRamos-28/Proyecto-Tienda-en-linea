import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../../services/Product.model';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './ProductList.component.html',
  styleUrls: ['./ProductList.component.css']
})
export class ProductListComponent {
  @Input() products: Product[] = [];
  @Input() selectedCategory?: string;

  constructor(private cartService: CartService, private router: Router) {}

  viewProduct(productId: number): void {
    this.router.navigate(['/product', productId]);
  }

  addToCart(product: Product): void {
    this.cartService.addItem(product);
    alert('Producto agregado al carrito');
  }

  buyNow(product: Product): void {
    this.addToCart(product);
    this.router.navigate(['/cart']);
  }
}




