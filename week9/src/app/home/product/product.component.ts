import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/shared/interfaces/product.interface';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  product! : Product

  loading = true

  constructor(private route: ActivatedRoute,
    private productService : ProductService) {}

  ngOnInit(): void {
    this.getProduct(this.route.snapshot.paramMap.get('productId')!)
  }

  getProduct (productSlug : string) {
    this.product?.image?.url
    this.productService.getProduct(productSlug).subscribe(
      response => {
        this.product = response
      },
      () => {},
      () => {
        this.loading = false
      }
    )
  }
}
