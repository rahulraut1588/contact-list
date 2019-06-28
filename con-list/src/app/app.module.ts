import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { ContactDataService } from './common/contact-data.service';
import { ContactlistComponent } from './contactlist/contactlist.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContactlistComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ ContactDataService ], 
  bootstrap: [ AppComponent ]
})
export class AppModule { }
