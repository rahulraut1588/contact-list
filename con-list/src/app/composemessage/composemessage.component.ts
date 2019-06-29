import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContactDataService } from '../common/contact-data.service';

@Component ({
    selector: 'my-compose-message',
    templateUrl: './composemessage.component.html'
})

export class ComposemessageComponent {
    name:string;
    phone:string;
    message ='Hi this OTP for your verification is 123456';
    selectedId:any;
    contactList:any;
    senderId:number;
    senderName:string;
    senderPhone:string;

    constructor ( public conlList:ContactDataService, public currRoute:ActivatedRoute ) {
        currRoute.params.subscribe( (params:any) => {
            this.selectedId = params['myId'];
        });
        this.contactList = this.conlList.getContactList();
        for (let i=0; i<this.contactList.length; i++) {
            if ( this.selectedId == this.contactList[i].id) {
                this.senderId = this.contactList[i].id;
                this.senderName = this.contactList[i].name;
                this.senderPhone = this.contactList[i].phone;
            }
        }
    }

    addMessage() {
        this.conlList.addMessage(this.senderId, this.senderName, this.name, this.phone, this.message);
    }
}