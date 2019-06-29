import { Component } from '@angular/core';
import { ContactDataService } from '../common/contact-data.service';


@Component ({
    selector: 'my-add-user',
    templateUrl: './adduser.component.html'
})

export class AdduserComponent {
    name:string;
    phone:string;
    message ='Hi this OTP for your verification is 123456';

    constructor ( public conlist:ContactDataService ) {

    }
    
}