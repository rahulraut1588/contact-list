import { Component } from '@angular/core';
import { ContactDataService } from '../common/contact-data.service';
import { ActivatedRoute } from '@angular/router';

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
    userAdded:any;
    userUpdated:any;
    selectedId:any;
    updateResponse = {_id: 12, name: '', phone: ''};
    contactList: any;
    
    constructor ( public conList:ContactDataService, public currRoute:ActivatedRoute ) {
        currRoute.params.subscribe( (params:any) => {
            this.selectedId = params['myId'];
        });
    }

    onSubmit (postUser) {
        
        if ( !this.selectedId ){
            if ( !postUser.name && !postUser.phone ) {
                if ( !postUser.name ) {
                    this.userName = 'invalid';
                    this.userFlag = 'not_user';
                }
                if ( !postUser.phone ) {
                    this.phoneNumber = 'invalid';
                    this.userFlag = 'not_user';
                }
            } else {
                this.userAdded = this.conList.postUser(postUser).subscribe( ( res ) => { });
                if (this.userAdded) { this.userFlag = "user_added"; }
            }
        } else {
            this.updateResponse._id = this.selectedId;
            this.updateResponse.name = (postUser.name) ? postUser.name : this.userName;
            this.updateResponse.phone = (postUser.phone) ? postUser.phone : this.phoneNumber; 
            console.log(this.updateResponse);
            this.userUpdated = this.conList.updateUser(this.updateResponse).subscribe ( (res) => { })
            if (this.userAdded) { this.userFlag = "user_updated"; }
        }
    }

    ngAfterViewInit() {    
        if (this.selectedId) {
            this.conList.getSpecificUser(this.selectedId).subscribe( (res) => {
                this.contactList = res[0];
                this.userName = this.contactList.name;
                this.phoneNumber = this.contactList.phone;
            });
        }
    }
}