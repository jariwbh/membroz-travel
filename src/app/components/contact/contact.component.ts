import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { commonService } from '../../core/services/common.services';
import { Router } from '@angular/router';

declare var $: any;


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  public contactForm : FormGroup;
  fullname:any;
  email: any;
  remark: any;
  databranch :any[]=[];

  constructor(private fb: FormBuilder,
    private _commonservice: commonService,
    private _router: Router) { }

  ngOnInit() {
    $.getScript('assets/js/main.js');
    $.getScript('assets/js/google_map.js');

    this.contactForm = this.fb.group({
      'fullname': ['',Validators.required],
      'email': ['',[Validators.required, Validators.email]],
      'remark': ['']
    })
    this.getBranch();




  }
  insert(){
    this.contactForm.controls['fullname'].setValue(this.fullname)
    this.contactForm.controls['email'].setValue(this.email)
    this.contactForm.controls['remark'].setValue(this.remark)
    let postData={
      fullname: this.fullname,
      property: {email: this.email, fullname: this.fullname, remark: this.remark}
    }
    console.log(postData)
    this._commonservice.Addpros(postData).then(data => {
      if(data){
        console.log(data);
        alert("Record Successfully Inserted...");
        this._router.navigate(['/contact']);
      }
    })
  }

  getBranch(){
    this._commonservice.getContactUs().then(data =>{
      if(data){
        this.databranch.push(data);
        console.log(this.databranch)
      }
    })
  }

}
