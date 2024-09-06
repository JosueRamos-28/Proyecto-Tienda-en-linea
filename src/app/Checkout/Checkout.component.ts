import { Component, OnInit } from '@angular/core';
import { CartService, CartItem } from '../services/cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  cardNumber: string = '';
  cardName: string = '';
  expiryDate: string = '';
  cvv: string = '';
  paymentMethod: string = 'tarjeta';
  shippingMethod: string = 'envio';

  nombreReceptor: string = '';
  direccion: string = '';
  telefono: string = '';
  nit: string = '';
  nombreCompletoFactura: string = '';
  direccionFactura: string = '';
  selectedDepartamento: string = '';
  selectedMunicipio: string = '';

  items: CartItem[] = [];
  total: number = 0;
  submitted: boolean = false;
  showConfirmation: boolean = false;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.updateCart();
  }

  onFinalizeOrder(): void {
    this.submitted = true;

    if (this.isValidForm()) {
      console.log('Finalizando pedido...');
      this.showConfirmation = true;
      this.submitted = false;
    }
  }

  closeConfirmation(): void {
    this.showConfirmation = false;
    this.resetForm();
  }

  private isValidForm(): boolean {
    const fieldsToCheck = [
      this.nombreReceptor.trim(),
      this.direccion.trim(),
      this.telefono.trim(),
      this.nit.trim(),
      this.nombreCompletoFactura.trim(),
      this.selectedDepartamento,
      this.selectedMunicipio,
    ];

    if (this.paymentMethod === 'tarjeta') {
      fieldsToCheck.push(this.cardNumber.trim());
      fieldsToCheck.push(this.cardName.trim());
      fieldsToCheck.push(this.expiryDate.trim());
      fieldsToCheck.push(this.cvv.trim());
    }

    const isValid = !fieldsToCheck.includes('');

    if (!isValid) {
      alert('Por favor, complete todos los campos obligatorios.');
    }

    return isValid;
  }

  private updateCart(): void {
    this.items = this.cartService.getItems();
    this.total = this.cartService.getTotal();
  }

  private resetForm(): void {
    this.cardNumber = '';
    this.cardName = '';
    this.expiryDate = '';
    this.cvv = '';
    this.paymentMethod = 'tarjeta';
    this.shippingMethod = 'envio';
    this.nombreReceptor = '';
    this.direccion = '';
    this.telefono = '';
    this.nit = '';
    this.nombreCompletoFactura = '';
    this.direccionFactura = '';
    this.selectedDepartamento = '';
    this.selectedMunicipio = '';
    this.submitted = false;
    this.items = [];
    this.total = 0;
  }
}







