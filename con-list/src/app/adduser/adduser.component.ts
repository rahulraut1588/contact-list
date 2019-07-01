import { Component } from '@angular/core';
import { ContactDataService } from '../common/contact-data.service';

@Component ({
    selector: 'my-add-user',
    templateUrl: './adduser.component.html'
})

export class AdduserComponent {
    name:string;
    phone:string;
    message = 'Hi this OTP for your verification is 123456';
    userName:string;
    phoneNumber:string;
    userFlag:string;

    constructor ( public conlList:ContactDataService ) {

    }
    
    addUser () {
        console.log(this.name);
        console.log(this.phone);
        if ( !this.name && !this.phone ) {
            if ( !this.name ) {
                this.userName = 'invalid';
            }
            if ( !this.phone ) {
                this.phoneNumber = 'invalid';
            }
            this.userFlag = 'not_user';
        } else {
            this.userFlag = this.conlList.addUser(this.name, this.phone);
        }
    }
}