import { Component, OnInit } from '@angular/core';
import { Room } from 'src/app/models/room';

@Component({
  selector: 'app-rooms-directive',
  templateUrl: './rooms-directive.component.html',
})
export class RoomsDirectiveComponent implements OnInit {
  rooms: Room[] = [];

  constructor() {}

  ngOnInit(): void {
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
  }
}
