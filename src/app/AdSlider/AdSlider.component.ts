import { Component, OnInit } from '@angular/core';
import { Product } from '../services/Product.model';
import { Services } from './../services/services.component';

@Component({
  selector: 'app-ad-slider',
  templateUrl: './AdSlider.component.html',
  styleUrls: ['./AdSlider.component.scss']
})
export class AdSliderComponent implements OnInit {
  products: Product[] = [];
  currentAd!: Product;
  currentIndex: number = 0;

  constructor(private productService: Services) {}

  ngOnInit(): void {
    this.loadProducts();
    this.startAdRotation();
  }

  loadProducts(): void {
    this.productService.getProducts().subscribe((data: Product[]) => {
      this.products = data;
      if (this.products.length > 0) {
        this.currentAd = this.products[0];
      }
    }, error => {
      console.error('Error al cargar productos', error);
    });
  }

  startAdRotation(): void {
    setInterval(() => this.nextAd(), 5000);
  }

  nextAd(): void {
    this.currentIndex = (this.currentIndex + 1) % this.products.length;
    this.currentAd = this.products[this.currentIndex];
  }
}





