import {Pipe, PipeTransform} from '@angular/core';
import {Attraction} from '../../attraction/attraction';

/**
 * Our attraction name pipes for our search bars
 */
@Pipe({
  name: 'attractionfilter',
  pure: false
})
export class AttractionFilterPipe implements PipeTransform {
  transform(items: Attraction[], filter: Attraction): Attraction[] {
    if (!items || !filter) {
      return items;
    }
    // pipes items array, items which match and return true will be kept, false will be filtered out
    return items.filter((item: Attraction) => this.applyFilter(item, filter));
  }

  applyFilter(attraction: Attraction, filter: Attraction): boolean {
    for (const field in filter) {
      if (filter[field]) {
        if (typeof filter[field] === 'string') {
          if (attraction[field].toLowerCase().indexOf(filter[field].toLowerCase()) === -1) {
            return false;
          }
        }
      }
    }
    return true;
  }
}
