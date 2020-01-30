import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { ProductResult, Product } from 'src/app/models/product.model';
import { NetworkService } from 'src/app/services/network.service';
import Swal from "sweetalert2";


@Component({
  selector: 'app-stock-edit',
  templateUrl: './stock-edit.component.html',
  styleUrls: ['./stock-edit.component.css']
})
export class StockEditComponent implements OnInit {

  title = "Update Product";
  mProduct = new Product();
  imageSrc: string | ArrayBuffer;

  constructor(private activatedRoute: ActivatedRoute, private location: Location, private networkService: NetworkService, private router: Router) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.feedData(params.id);
    });
  }

  onSubmit() {
    this.networkService.editProduct(this.mProduct.product_id.toString(), this.mProduct).subscribe(
      result => {
        this.router.navigate(['/stock']);
      },
      error => {
        alert(error.error.message);
      }
    )
  }

  onCancel() {
    this.location.back();
  }

  onDelete() {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.value) {
        this.networkService.deleteProductById(this.mProduct.product_id.toString()).subscribe(
          result => {
            Swal.fire( 'Deleted!', 'Your Product has been deleted.', 'success');
            this.router.navigate(['/stock']);
          },
          error => {
            alert(error.error.message);
          }
        )
      }
    })
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

  feedData(id: string) {
    this.networkService.getProductById(id).subscribe(
      result => {
        let item = result.result as ProductResult;
        this.imageSrc = this.networkService.getImage(item.image);
        this.mProduct = item;
      },
      error => {
        alert(error.error.message);
      }
    )
  }

}
