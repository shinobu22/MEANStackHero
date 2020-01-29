import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-stock-edit',
  templateUrl: './stock-edit.component.html',
  styleUrls: ['./stock-edit.component.css']
})
export class StockEditComponent implements OnInit {

  title = "Update Product";
  mProduct = new Product
  imageSrc: string;

  constructor(private activatedRoute: ActivatedRoute, private location: Location) {
  }

  ngOnInit() {
    console.log(this.mProduct);
    console.log(this.mProduct.name);
    this.activatedRoute.params.subscribe(params => {
      // alert(params.id);
    });
  }

  onSubmit() {
    alert(this.mProduct.name);
  }

  onCancel() {
    this.location.back();
  }

}
