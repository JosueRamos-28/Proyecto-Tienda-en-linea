import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from './../../services/Product.model';
import { Services } from './../../services/services.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  products: Product[] = [];

  constructor(private services: Services, public router: Router) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.services.getProducts().subscribe(data => {
      this.products = data;
    }, error => {
      console.error('Error al cargar productos', error);
    });
  }

  viewProductDetail(productId: number): void {
    this.router.navigate(['/product', productId]);
  }
}




