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
    this.likeService.likeProduct(this.product.id).subscribe((response) => {
      this.product.likes_count++;
      this.product.likes_up_count++;
    });
  }

  dislikeProduct(): void {
    this.likeService.dislikeProduct(this.product.id).subscribe((response) => {
      this.product.likes_count++;
      this.product.likes_down_count++;
    });
  }
}
