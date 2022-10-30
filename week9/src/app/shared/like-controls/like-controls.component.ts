import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../interfaces/product.interface';
import { LikesService } from '../services/likes.service';

@Component({
  selector: 'app-like-controls',
  templateUrl: './like-controls.component.html',
  styleUrls: ['./like-controls.component.scss']
})
export class LikeControlsComponent implements OnInit {

  @Input() product! : Product

  constructor(private likeService : LikesService) { }

  ngOnInit(): void {
  }

}
