import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { ContactDataService } from './common/contact-data.service';
import { ContactlistComponent } from './contactlist/contactlist.component';
import { MessagelistComponent } from './messagelist/messagelist.component';
import { AdduserComponent } from './adduser/adduser.component';

const myRoutes = [
  { path: '', redirectTo:'/contactList', pathMatch:'full' },
  { path: 'contactList', component: ContactlistComponent },
  { path: 'messageList', component: MessagelistComponent },
  { path: 'addUser', component: AdduserComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContactlistComponent,
    MessagelistComponent,
    AdduserComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(myRoutes),
    FormsModule
  ],
  providers: [ ContactDataService ], 
  bootstrap: [ AppComponent ]
})
export class AppModule { }
