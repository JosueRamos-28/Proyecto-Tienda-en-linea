import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Product } from '../../services/Product.model';

@Component({
  selector: 'app-product-added-dialog',
  templateUrl: './ProductAddedDialog.component.html',
  styleUrls: ['./ProductAddedDialog.component.css']
})
export class ProductAddedDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<ProductAddedDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Product
  ) {}

  closeDialog(): void {
    this.dialogRef.close();
  }
}

