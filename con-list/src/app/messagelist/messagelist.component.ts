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
    messageList: any;

    constructor (private conList:ContactDataService) {
        
        conList.getMessageList().subscribe( (res) => {
            this.messageList = res;
        });;
        
    }

    deletemsg (id) {
        let delData = {
            id: id
        }
        this.conList.deleteMessage(delData).subscribe((res)=> {
            this.messageList = res.doc;
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
        $(()=>{  
            $('.display').DataTable(this.dtOption);
        });
    }
}