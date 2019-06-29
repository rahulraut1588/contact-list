import { Component } from '@angular/core';
import { ContactDataService } from '../common/contact-data.service';

@Component({
    selector: 'my-contact-list',
    templateUrl: './contactlist.component.html'
})

export class ContactlistComponent {
    
    list:any;

    constructor( private conList:ContactDataService ) {
        this.list = conList.getContactList();
    }

    deleteUser (id) {
        this.conList.deleteContact(id);
    }
}