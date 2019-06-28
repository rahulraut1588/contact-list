import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { ContactDataService } from './common/contact-data.service';
import { ContactlistComponent } from './contactlist/contactlist.component';

const myRoutes = [
  { path: '', redirectTo:'/contactList', pathMatch:'full' },
  { path: 'contactList', component: ContactlistComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContactlistComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(myRoutes)
  ],
  providers: [ ContactDataService ], 
  bootstrap: [ AppComponent ]
})
export class AppModule { }
