import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable ()

export class ContactDataService {
    
    tempIndex:number = -1;
    listData:any;
    messageData:any;

    constructor(private http:HttpClient) {
        
        
    }

    getContactList ():Observable<any> {
        this.listData  = this.http.get('http://demo2435299.mockable.io/contacts');
        return this.listData;
    }

    getMessageList ():any {
        this.messageData  = this.http.get('http://demo2435299.mockable.io/messages');
        return this.messageData;
    }

    addUser (name, phone) {
        if ( name == 'Rahul') {
            return 'not_user';
        } else {
            for ( let i=0; i<this.listData.length; i++) {
                if (this.tempIndex < this.listData[i].id) {
                    this.tempIndex = this.listData[i].id;
                }
            }
            let appendData = {
                id: this.tempIndex + 1,
                name: name,
                phone: phone
            }
            this.listData.push(appendData);
            return 'user_added';
        }
    }

    addMessage (sid:number, sname:string, rname:string, rphone:string, rmessage:string ) {
        if ( sid > 0 && sid < 10 ) {
            for ( let i=0; i<this.messageData.length; i++) {
                if (this.tempIndex < this.messageData[i].id) {
                    this.tempIndex = this.messageData[i].id;
                }
            }
            let messageData = {
                id: this.tempIndex + 1,
                senderId: sid,
                senderName: sname,
                recieverName: rname,
                recieverPhone: rphone,
                message: rmessage
            }
            this.messageData.push(messageData);
            return 'sent';
        } else {
            return 'notSent';
        }

    }

    deleteContact (id:number) {
        for ( let i = 0; i < this.listData.length; i++ ) {
            if ( id == this.listData[i].id) {
                let temp = this.listData.indexOf(this.listData[i]);;
                this.listData.splice(temp, 1);
            }
        }
    }

    deleteMessage (id:number) {
        for ( let i = 0; i < this.messageData.length; i++ ) {
            if ( id == this.messageData[i].id) {
                let temp = this.messageData.indexOf(this.messageData[i]);;
                this.messageData.splice(temp, 1);
            }
        }
    }
}