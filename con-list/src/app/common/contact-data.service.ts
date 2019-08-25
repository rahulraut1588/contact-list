import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable ()

export class ContactDataService {
    
    tempIndex:number = -1;
    listData:any;
    messageData:any;
    userData:any;
    specificUserId: any;

    constructor(private http:HttpClient) {
        
        
    }

    getContactList ():Observable<any> {
        this.listData  = this.http.get('http://localhost:4001/contacts');
        return this.listData;
    }

    getSpecificUser (userId):Observable<any> {
        let url = 'http://localhost:4001/contacts/' + userId;
        this.specificUserId  = this.http.get(url);
        return this.specificUserId;
    }

    updateUser (updateData):Observable<any> {
        let url = 'http://localhost:4001/updateUser';
        let headers = new HttpHeaders({
            'Content-Type': 'application/json'
        });
        let options = { headers: headers };
        let data = JSON.stringify(updateData);
        let updatedData  = this.http.put(url, data, options);
        return updatedData;
    }

    postUser (formData: any):Observable<any> {
        let headers = new HttpHeaders({
            'Content-Type': 'application/json'
        });
        let options = { headers: headers };
        formData = JSON.stringify(formData);
        this.userData  = this.http.post('http://localhost:4001/addUser', formData, options);
        return this.userData;
    }

    deleteContact (delData) {
        let headers = new HttpHeaders({
            'Content-Type': 'application/json'
        });
        let options = { headers: headers };
        delData = JSON.stringify(delData);
        this.userData  = this.http.put('http://localhost:4001/deleteUser', delData, options);
        return this.userData;
    }

    getMessageList ():Observable<any> {
        this.messageData  = this.http.get('http://localhost:4001/messages');
        return this.messageData;
    }

    sendMessage(msgData):Observable<any>  {
        let headers = new HttpHeaders({
            'Content-Type': 'application/json'
        });
        let options = { headers: headers };
        msgData = JSON.stringify(msgData);
        this.userData  = this.http.post('http://localhost:4001/sendMessage', msgData, options);
        return this.userData;
    }

    deleteMessage (delData) {
        let headers = new HttpHeaders({
            'Content-Type': 'application/json'
        });
        let options = { headers: headers };
        delData = JSON.stringify(delData);
        this.userData  = this.http.put('http://localhost:4001/deleteMessage', delData, options);
        return this.userData;
    }

    // deleteMessage (id:number) {
    //     for ( let i = 0; i < this.messageData.length; i++ ) {
    //         if ( id == this.messageData[i].id) {
    //             let temp = this.messageData.indexOf(this.messageData[i]);
    //             this.messageData.splice(temp, 1);
    //         }
    //     }
    // }
    // addUser (name, phone) {
    //     if ( name == 'Rahul') {
    //         return 'not_user';
    //     } else {
    //         for ( let i=0; i<this.listData.length; i++) {
    //             if (this.tempIndex < this.listData[i].id) {
    //                 this.tempIndex = this.listData[i].id;
    //             }
    //         }
    //         let appendData = {
    //             id: this.tempIndex + 1,
    //             name: name,
    //             phone: phone
    //         }
    //         this.listData.push(appendData);
    //         return 'user_added';
    //     }
    //  fetch('http://localhost:4001/addUser', {
    //         method: "POST",
    //         body: JSON.stringify(formData)
    //  }).then((response) => {
    //         return response.json().then((data) => {
    //             // debugger;
    //             return data;
    //         });
    //     });
    // }

    // addMessage (sid:number, sname:string, rname:string, rphone:string, rmessage:string ) {
    //     if ( sid > 0 && sid < 10 ) {
    //         for ( let i=0; i<this.messageData.length; i++) {
    //             if (this.tempIndex < this.messageData[i].id) {
    //                 this.tempIndex = this.messageData[i].id;
    //             }
    //         }
    //         let messageData = {
    //             id: this.tempIndex + 1,
    //             senderId: sid,
    //             senderName: sname,
    //             recieverName: rname,
    //             recieverPhone: rphone,
    //             message: rmessage
    //         }
    //         this.messageData.push(messageData);
    //         return 'sent';
    //     } else {
    //         return 'notSent';
    //     }
    // }

}