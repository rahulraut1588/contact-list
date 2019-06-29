import { Injectable } from '@angular/core';
import { splitNamespace } from '@angular/core/src/view/util';

@Injectable ()

export class ContactDataService {
    
    tempIndex:number = -1;
    listData = [
        {
            id: 1,    
            name: 'Test Name 1',
            phone: '1111111111',
        },
        {
            id: 2,
            name: 'Test Name 2',
            phone: '2222222222',
        },
        {
            id: 3,
            name: 'Test Name 3',
            phone: '3333333333',
        },
        {
            id: 4,
            name: 'Test Name 4',
            phone: '4444444444',
        },
        {
            id: 5,
            name: 'Test Name 5',
            phone: '5555555555',
        }
    ];

    messageData = [
        {
            id: 1,
            senderId: 1,
            senderName: 'Test Name 1',
            recieverPhone: '6666666666',
            recieverName: 'Test Name 6',
            message: 'This is a test message'
        },
        {
            id: 2,    
            senderId: 1,
            senderName: 'Test Name 1',
            recieverPhone: '7777777777',
            recieverName: 'Test Name 7',
            message: 'This is a test message'
        },
        {
            id: 3,
            senderId: 1,
            senderName: 'Test Name 1',
            recieverPhone: '8888888888',
            recieverName: 'Test Name 8',
            message: 'This is a test message'
        },
        {
            id: 4,
            senderId: 1,
            senderName: 'Test Name 1',
            recieverPhone: '9999999999',
            recieverName: 'Test Name 9',
            message: 'This is a test message'
        }
    ];

    getContactList ():any {
        return this.listData;
    }

    getMessageList ():any {
        return this.messageData;
    }

    addUser (name, phone) {
        for ( let i=0; i<this.listData.length; i++) {
            if (this.tempIndex < this.listData[i].id) {
                this.tempIndex = this.listData[i].id;
                console.log(this.tempIndex);
            }
        }
        let appendData = {
            id: this.tempIndex + 1,
            name: name,
            phone: phone
        }
        this.listData.push(appendData);
    }

    addMessage (sid:number, sname:string, rname:string, rphone:string, rmessage:string ) {
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
        console.log(messageData);
        this.messageData.push(messageData);
    }
}