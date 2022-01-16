import { Pipe, PipeTransform } from '@angular/core';
import { Room } from '../models/room';

@Pipe({
  name: 'filter'
})
export class FiltersearchPipe implements PipeTransform {

  transform(rooms: Room[], price: number) {

    if (!rooms) {
      return [];
    }

    if (!price) {
      return rooms;
    }

    return rooms.filter((room) => {
      return room.price <= price;
    })
  }

}
