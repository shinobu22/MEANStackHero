import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stock-create',
  templateUrl: './stock-create.component.html',
  styleUrls: ['./stock-create.component.css']
})
export class StockCreateComponent implements OnInit {

  mProduct = new Product();
  imageSrc: string | ArrayBuffer;

  constructor(private location: Location, private router: Router) { 
    this.mProduct.name = "";
    this.mProduct.price = 0;
    this.mProduct.stock = 0;
    this.mProduct.image = "";
  }

  ngOnInit() {
  }

  onUpload(event) {
    const metaImage = event.target.files[0];
    if (metaImage) {
      const reader = new FileReader();
      reader.readAsDataURL(metaImage);
      reader.onload = () => {
        this.imageSrc = reader.result;
        this.mProduct.image = metaImage;
      };
    }
  }

  onSubmit() {
    console.log(this.mProduct);
    this.router.navigate([`/stock/edit/1150`]);
  }

  onCancel() {
    this.location.back();
  }

}
