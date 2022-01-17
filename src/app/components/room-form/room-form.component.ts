import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Room } from '../../models/room';
import { RoomService } from '../../services/room.service';
import { Store } from 'redux';
import { AppStore } from '../../app.store';
import { AppState } from '../../app.state';
import * as CounterActions from '../../counter.actions';

@Component({
  selector: 'app-room-form',
  templateUrl: './room-form.component.html',
  styleUrls: ['./room-form.component.css'],
})
export class RoomFormComponent implements OnInit {
  myFormGroup: FormGroup;

  constructor(
    private myFormBuilder: FormBuilder,
    private roomService: RoomService,
    @Inject(AppStore) private store: Store<AppState>
  ) {
    store.subscribe(() => this.readState());
    this.readState();
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.myFormGroup = this.myFormBuilder.group({
      id: ['', [Validators.required, Validators.minLength(2)]],
      title: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(10),
        ],
      ],
      imageUrl: ['', []],
      price: [
        '',
        [
          Validators.required,
          Validators.pattern(/^\d+$/),
          Validators.maxLength(3),
          Validators.minLength(2),
        ],
      ],
      numberOfBeds: [
        '',
        [
          Validators.required,
          Validators.pattern(/^\d+$/),
          Validators.maxLength(2),
          Validators.minLength(1),
        ],
      ],
    });
  }

  onSubmit() {
    // add room

    const room: Room = {
      id: this.myFormGroup.get('id').value,
      title: this.myFormGroup.get('title').value,
      imageUrl: 'assets/img/room.jpg',
      price: this.myFormGroup.get('price').value,
      numberOfBeds: this.myFormGroup.get('numberOfBeds').value,
    };

    this.roomService.addRoom(room);

    this.initForm();
  }

  myIdValidation() {
    // pristupim inputu iz forme
    const input = this.myFormGroup.get('id');

    // provera
    return (
      ((input.touched || input.dirty) && input.hasError('required')
        ? 'is-invalid'
        : '') ||
      ((input.touched || input.dirty) && input.hasError('minlength')
        ? 'is-invalid'
        : '') ||
      ((input.touched || input.dirty) && input.valid ? 'is-valid' : '')
    );
  }

  myTitleValidation() {
    // pristupim inputu iz forme
    const input = this.myFormGroup.get('title');

    // provera
    return (
      ((input.touched || input.dirty) && input.hasError('required')
        ? 'is-invalid'
        : '') ||
      ((input.touched || input.dirty) && input.hasError('minlength')
        ? 'is-invalid'
        : '') ||
      ((input.touched || input.dirty) && input.hasError('maxlength')
        ? 'is-invalid'
        : '') ||
      ((input.touched || input.dirty) && input.valid ? 'is-valid' : '')
    );
  }

  notValidTitle() {
    if (this.myFormGroup.get('title').hasError('minlength')) {
      console.log('Mora imati vise od 6 karaktera.');
      return 'Minimum length is 6.';
    } else {
      return '';
    }
  }

  myPriceValidation() {
    // pristupim inputu iz forme
    const input = this.myFormGroup.get('price');

    // provera
    return (
      ((input.touched || input.dirty) && input.hasError('required')
        ? 'is-invalid'
        : '') ||
      ((input.touched || input.dirty) && input.hasError('pattern')
        ? 'is-invalid'
        : '') ||
      ((input.touched || input.dirty) && input.hasError('minlength')
        ? 'is-invalid'
        : '') ||
      ((input.touched || input.dirty) && input.hasError('maxlength')
        ? 'is-invalid'
        : '') ||
      ((input.touched || input.dirty) && input.valid ? 'is-valid' : '')
    );
  }

  myBedValidation() {
    // pristupim inputu iz forme
    const input = this.myFormGroup.get('numberOfBeds');

    // provera
    return (
      ((input.touched || input.dirty) && input.hasError('required')
        ? 'is-invalid'
        : '') ||
      ((input.touched || input.dirty) && input.hasError('pattern')
        ? 'is-invalid'
        : '') ||
      ((input.touched || input.dirty) && input.hasError('minlength')
        ? 'is-invalid'
        : '') ||
      ((input.touched || input.dirty) && input.hasError('maxlength')
        ? 'is-invalid'
        : '') ||
      ((input.touched || input.dirty) && input.valid ? 'is-valid' : '')
    );
  }

  counter: number;

  readState() {
    const state: AppState = this.store.getState() as AppState;
    this.counter = state.counter;
  }

  increment() {
    this.store.dispatch(CounterActions.increment());
  }

  decrement() {
    this.store.dispatch(CounterActions.decrement());
  }
}
