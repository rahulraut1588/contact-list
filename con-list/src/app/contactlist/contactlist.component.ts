import { Component } from '@angular/core';
import { ContactDataService } from '../common/contact-data.service';
import { SortService } from '../common/sort.service';

@Component({
    selector: 'my-contact-list',
    templateUrl: './contactlist.component.html'
})

export class ContactlistComponent {
    
    title = 'Contact List';
    list:any;

    constructor( private conList:ContactDataService, public sortService:SortService ) {
        
        conList.getContactList().subscribe( (res) => {
            this.list = res;
        });
        
    }

    deleteUser (id) {
        let delData = {
            id: id
        }
        this.conList.deleteContact(delData).subscribe((res)=> {
            this.list = res.responseData.contactList
        });
    }

    sortName() {
        let sortedList = this.sortService.sortByName(this.list);
        this.list = sortedList;
    }

}