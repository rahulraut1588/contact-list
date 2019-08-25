import { Component, ViewChild, OnInit } from '@angular/core';
import { ContactDataService } from '../common/contact-data.service';

declare var $;

@Component({
    selector: 'my-contact-list',
    templateUrl: './contactlist.component.html'
})

export class ContactlistComponent implements OnInit {
    
    @ViewChild('dataTable') table;
    dataTable: any;
    dtOption: any = {};

    title = 'Contact List';
    list:any;

    constructor( private conList:ContactDataService ) {
        
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

    ngOnInit(): void {
        this.dtOption = {
            "info":     false,
            "columnDefs": [
                { 
                    "pagingType": "full_numbers"
                }
            ]
        }; 
        this.dataTable = $('.display');
        $(()=>{  
            $('.display').DataTable(this.dtOption);
        });
    }

}