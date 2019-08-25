import { Component, ViewChild, OnInit } from '@angular/core';
import { ContactDataService } from '../common/contact-data.service';

declare var $;

@Component ({
    selector: 'my-messagelist',
    templateUrl: './messagelist.component.html'
})

export class MessagelistComponent implements OnInit {

    @ViewChild('dataTable') table;
    dataTable: any;
    dtOption: any = {};

    title = 'Message List';
    contactList:any;
    messageList: any;

    constructor (private conList:ContactDataService) {
        
        conList.getMessageList().subscribe( (res) => {
            this.messageList = res;
        });;
        conList.getContactList().subscribe( (res) => {
            this.contactList = res;
        });;
        
    }

    deletemsg (id) {
        let delData = {
            id: id
        }
        this.conList.deleteMessage(delData).subscribe((res)=> {
            this.messageList = res.responseData.messageList,
            this.contactList = res.responseData.contactList;
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