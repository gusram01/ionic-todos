import { Pipe, PipeTransform } from '@angular/core';
import { List } from '../models/list.model';

@Pipe({
  name: 'completed',
  pure: false,
})
export class CompletedPipe implements PipeTransform {
  transform(lists: List[], completed = true): List[] {
    return lists.filter((list) => list.completed === completed);
  }
}
