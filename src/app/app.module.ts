import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RoomsComponent } from './components/rooms/rooms.component';
import { RoomFormComponent } from './components/room-form/room-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterComponent } from './components/filter/filter.component';
import { FiltersearchPipe } from './helpers/filtersearch.pipe';
import { appStoreProviders } from './app.store';

@NgModule({
  declarations: [
    AppComponent,
    RoomsComponent,
    RoomFormComponent,
    FilterComponent,
    FiltersearchPipe,
  ],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  providers: [appStoreProviders],
  bootstrap: [AppComponent],
})
export class AppModule {}
