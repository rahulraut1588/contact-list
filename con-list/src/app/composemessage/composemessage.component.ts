import { Component } from '@angular/core';
import { ContactDataService } from '../common/contact-data.service';

@Component ({
    selector: 'my-compose-message',
    templateUrl: './composemessage.component.html'
})

export class ComposemessageComponent {
    name:string;
    phone:string;
    message ='Hi this OTP for your verification is 123456';

    constructor ( public conlList:ContactDataService ) {

    }
    
    addUser () {
        this.conlList.addUser(this.name, this.phone);
    }
}