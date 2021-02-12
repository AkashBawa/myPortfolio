import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormBuilder, FormGroup, Validators} from '@angular/forms';

import { AbstractControl, ValidatorFn } from '@angular/forms';
import {mainService, message} from '../../mainservice';
import { NgxSpinnerService } from "ngx-spinner";
import swal from 'sweetalert';


@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss']
})
export class ContactMeComponent implements OnInit {

  constructor( 
    private fb : FormBuilder,
    private service : mainService,
    private spinner: NgxSpinnerService
    ) { 
    this.message = fb.group({
      name : ['', Validators.required],
      email : ['', Validators.email],
      phone : [, mainService.checkLimit(1000000000, 9999999999)],
      message : ['', Validators.required]
    })
  }


  ngOnInit() {
    
 
    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 5000);
  }

  message :FormGroup;
  submit(){
    if(!this.message.valid) return;
    this.spinner.show();
    this.service.addMessage(this.message.value).then(res=>{
      this.spinner.hide();
      swal({
        title: "Thank you!",
        text: "Your message is saved",
        icon: "success",

      });

    },(err)=>{
      this.spinner.hide()
      console.log("something went wrong")
    })
  }
}
