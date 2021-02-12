import {Injectable} from '@angular/core';
import { AbstractControl, EmailValidator, ValidatorFn } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';

export interface message{
    name : string,
    email : EmailValidator,
    phone : number,
    message : string
  }

@Injectable({
    providedIn : 'root'
})
export class mainService{

    constructor( private firestore: AngularFirestore ){ }

    static checkLimit(min: number, max: number): ValidatorFn {
        return (c: AbstractControl): { [key: string]: boolean } | null => {
            if (c.value && (isNaN(c.value) || c.value < min || c.value > max)) {
                return { 'range': true };
            }
            return null;
        };
    }

    addMessage(data : message){
        console.log(data)
        return new Promise<any>((resolve, reject)=>{
            this.firestore
                .collection('messages')
                .add(data)
                .then(res =>resolve(true), err=> reject(err));
        });
    }

}   