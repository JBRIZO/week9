import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../shared/interfaces/product.interface';
import { LikesService } from '../../shared/services/likes.service';

@Component({
  selector: 'app-like-controls',
  templateUrl: './like-controls.component.html',
  styleUrls: ['./like-controls.component.scss'],
})
export class LikeControlsComponent implements OnInit {
  @Input() product!: Product;

  likesUp: number = 0;
  likesDown: number = 0;

  constructor(private likeService: LikesService) {}

  ngOnInit(): void {
    this.likesUp = this.product.likes_up_count;
    this.likesDown = this.product.likes_down_count;
  }

  likeProduct(): void {
    this.likeService.likeProduct(this.product.id).subscribe(() => {
      this.likesUp++;
      this.likesDown = this.likesDown === 0 ? 0 : this.likesDown - 1;
    });
  }

  dislikeProduct(): void {
    this.likeService.dislikeProduct(this.product.id).subscribe(() => {
      this.likesDown++;
      this.likesUp = this.likesUp === 0 ? 0 : this.likesUp - 1;
    });
  }
}
