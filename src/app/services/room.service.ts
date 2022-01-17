import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Room } from '../models/room';

@Injectable({
  providedIn: 'root',
})
export class RoomService {
  rooms: Room[];

  constructor() {
    this.rooms = [
      { id: 1, title: 'Room 1', imageUrl: 'assets/img/room.jpg', price: 10 },
      { id: 2, title: 'Room 2', imageUrl: 'assets/img/room.jpg', price: 20 },
      { id: 3, title: 'Room 3', imageUrl: 'assets/img/room.jpg', price: 30 },
    ];
  }

  /**
   *
   * Integrisanje pregleda soba kroz pogled (Observable)
   */
  getRooms(): Observable<Room[]> {
    this.rooms = [
      {
        id: 1,
        title: 'Room 1',
        imageUrl: 'assets/img/room.jpg',
        price: 10,
        numberOfBeds: 3,
      },
      {
        id: 2,
        title: 'Room 2',
        imageUrl: 'assets/img/room.jpg',
        price: 20,
        numberOfBeds: 1,
      },
      {
        id: 3,
        title: 'Room 3',
        imageUrl: 'assets/img/room.jpg',
        price: 30,
        numberOfBeds: 2,
      },
    ];
    return of(this.rooms); // vracanje observable<room[]>
  }

  addRoom(room: Room) {
    this.rooms.push(room);
  }

  deleteRoom(room: Room) {
    this.rooms.forEach((curr, i) => {
      if (room.id === curr.id) {
        this.rooms.splice(i, 1);
      }
    });
  }

  updateRoom(room: Room) {
    this.rooms.forEach((curr, i) => {
      if (room.id === curr.id) {
        this.rooms.splice(i, 1);
      }
    });

    room.title = 'Room ' + this.getRandomInt(10, 20);

    room.price = this.getRandomInt(55, 95);

    this.rooms.unshift(room);
  }

  // [10, 20)
  getRandomInt(min: number, max: number) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  getPrice(room: Room, numberOfNights: number): number {
    const ukupnaCena: number = room.price * numberOfNights;
    return ukupnaCena;
  }
}
