import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../interfaces/product.interface';
import { LikesService } from '../services/likes.service';

@Component({
  selector: 'app-like-controls',
  templateUrl: './like-controls.component.html',
  styleUrls: ['./like-controls.component.scss'],
})
export class LikeControlsComponent implements OnInit {
  @Input() product!: Product;

  constructor(private likeService: LikesService) {}

  ngOnInit(): void {}

  likeProduct(): void {
    this.likeService.likeProduct(this.product.id).subscribe(() => {
      this.product.likes_up_count++;
      this.product.likes_down_count = this.product.likes_down_count === 0 ? 0 : this.product.likes_down_count - 1
    });
  }

  dislikeProduct(): void {
    this.likeService.dislikeProduct(this.product.id).subscribe(() => {
      this.product.likes_down_count++;
      this.product.likes_up_count = this.product.likes_up_count === 0 ? 0 : this.product.likes_up_count - 1
    });
  }
}
