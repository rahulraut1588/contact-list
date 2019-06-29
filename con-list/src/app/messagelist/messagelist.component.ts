import { Component } from '@angular/core';
import { ContactDataService } from '../common/contact-data.service';

@Component ({
    selector: 'my-messagelist',
    templateUrl: './messagelist.component.html'
})

export class MessagelistComponent {

    contactList:any;
    messageList: any;

    constructor (private conList:ContactDataService) {
        
        this.messageList = conList.getMessageList();
        this.contactList = conList.getContactList();
        
    }

    deletemsg(id) {
        this.conList.deleteMessage(id);
    }
}