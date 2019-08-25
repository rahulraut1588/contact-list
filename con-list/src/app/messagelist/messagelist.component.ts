import { Component } from '@angular/core';
import { ContactDataService } from '../common/contact-data.service';

@Component ({
    selector: 'my-messagelist',
    templateUrl: './messagelist.component.html'
})

export class MessagelistComponent {

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
}