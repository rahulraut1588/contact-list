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
    updateResponse: any;
    
    constructor ( public conlList:ContactDataService, public currRoute:ActivatedRoute ) {
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
                this.userAdded = this.conlList.postUser(postUser).subscribe( ( res ) => { });
                if (this.userAdded) { this.userFlag = "user_added"; }
            }
        } else {
            
            this.updateResponse.name = (postUser.name) ? postUser.name : this.userName;
            this.updateResponse.phone = (postUser.phone) ? postUser.phone : this.phoneNumber; 
            this.userUpdated = this.conlList.updateUser(this.updateResponse).subscribe ( (res) => { })
            if (this.userAdded) { this.userFlag = "user_updated"; }
        }
    }

    ngAfterViewInit() {    
        if (this.selectedId) {
            this.conlList.getSpecificUser(this.selectedId).subscribe( ( res ) => { 
                this.updateResponse = res;
                this.userName = res.name;
                this.phoneNumber = res.phone;
            });
        }
    }
}