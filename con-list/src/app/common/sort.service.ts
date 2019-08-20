import { Injectable } from '@angular/core';

@Injectable () 

export class SortService {

    tempIndex= [];
    sortedArray: any;

    sortByName ( name:any ) {

        // this.tempIndex.push(name[0]);

        // for ( let i = 0; i < name.length; i++ ) {

        //     console.log(this.tempIndex[i].name);

        //     console.log(name[i].name);

            // if ( this.tempIndex[i].name > name[i].name ) {

            //     this.tempIndex[i].push(name[i]);

            // } else if ( this.tempIndex[i].name < name[i].name  ) {
                
            //     this.tempIndex[i].unshift(name[i]);

            // } else {

            // }

        // }

        console.log(name);

        return name;

    }

    sortByPhone ( number ) {

        for ( let i = 0; i < number.length; i++ ) {

            this.tempIndex[i] = number[i];

            if ( this.tempIndex[i].phone < number[i+1].phone ) {

                this.sortedArray[i].push(this.tempIndex[i]);

            } else {
                
                this.sortedArray[i].unshift(this.tempIndex[i])
            }

        }

        console.log(this.sortedArray);

        return this.sortedArray;

    }

}