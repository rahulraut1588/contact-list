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
    randomNum = Math.floor(100000 + Math.random() * 900000);
    message ='Hi this OTP for your verification is ' +  this.randomNum;
    selectedId:any;
    contactList:any;
    senderId:number;
    senderName:string;
    senderPhone:string;
    msgFlag:string = '';
    updateResponse:any;

    constructor ( public conList:ContactDataService, public currRoute:ActivatedRoute ) {
        currRoute.params.subscribe( (params:any) => {
            this.selectedId = params['myId'];
        });
        
        conList.getContactList().subscribe( (res) => {
            this.contactList = res;
            for (let i=0; i<this.contactList.length; i++) {
                if ( this.selectedId == this.contactList[i].id) {
                    this.senderId = this.contactList[i].id;
                    this.name = this.senderName = this.contactList[i].name;
                    this.phone = this.senderPhone = this.contactList[i].phone;
                }
            }
        });
        
    }

    onSubmit(msgData) {
        this.updateResponse = { 
            senderName: (msgData.senderName) ? msgData.senderName : this.senderName,
            senderPhone: (msgData.senderPhone) ? msgData.senderPhone : this.senderPhone,
            message: this.message
        }
        this.conList.sendMessage(this.updateResponse).subscribe( (res) => {
            console.log(res);
        });
        // this.updateResponse.senderPhone = (msgData.senderPhone) ? msgData.senderPhone : this.senderPhone;
        // this.updateResponse.message = this.message;
    }

}