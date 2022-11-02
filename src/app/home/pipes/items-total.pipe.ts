import { Pipe, PipeTransform } from '@angular/core';
import { CartItem } from 'src/app/shared/interfaces/cartitem.interface';

@Pipe({
  name: 'itemsTotal',
})
export class ItemsTotalPipe implements PipeTransform {
  transform(value: CartItem[]): string {
    let total: number = 0.0;
    for (let item of value) {
      total += item.quantity * parseFloat(item.price!);
    }
    return total.toFixed(2);
  }
}
