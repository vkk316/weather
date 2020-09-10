import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListTownComponent } from './list-town/list-town.component';

import { FormsModule } from '@angular/forms';
import { TownDetailComponent } from './town-detail/town-detail.component';
import { AppRoutingModule } from './app-routing.module'; // <-- NgModel lives here

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    HttpClientModule,
    AppComponent,
    ListTownComponent,
    TownDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
