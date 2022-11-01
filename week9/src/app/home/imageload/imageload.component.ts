import { Component, Input } from '@angular/core';
import { Image } from 'src/app/shared/interfaces/image.interface';

@Component({
  selector: 'app-imageload',
  templateUrl: './imageload.component.html',
  styleUrls: ['./imageload.component.scss'],
})
export class ImageloadComponent {
  @Input() image!: Image;

  loading = true;

  constructor() {}

  imageLoaded() {
    this.loading = false;
  }
}
