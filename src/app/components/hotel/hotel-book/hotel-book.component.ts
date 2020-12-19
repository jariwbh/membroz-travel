import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators} from '@angular/forms';
import { commonService } from '../../../core/services/common.services';
import { Router,ActivatedRoute} from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-hotel-book',
  templateUrl: './hotel-book.component.html',
  styleUrls: ['./hotel-book.component.css']
})
export class HotelBookComponent implements OnInit {
  locationlist1:any[]=[];
  locationselected:any[]=[];
  bindId:any;
  hotelBookForm:FormGroup;
  fullname:any;
  checkin:any;
  checkout:any;
  totalrooms:any;
  email:any;
  mobile_number:any;
  totaladults:any;
  totalchildrens:any;
  hotelid:any;
  resortlocationId:any;
  placelist:any[]=[]; //sotore city
  placeid:any;
  datediff:any;


  constructor(
    private fb:FormBuilder,
    private _commonservice:commonService,
    private _router: Router,
    private  _route : ActivatedRoute
  ) { }

  ngOnInit() {
    $.getScript('assets/js/main.js');
    this.Getlocationname();
    this.Getplacename();
    this._route.paramMap.subscribe(params => {
      let hotelId :any = params.get('_id');  
      console.log(hotelId)
      if (hotelId)
       {
        this.gethotel(hotelId);        
      }
      //store id in one variable called bindId
    //this.bindId = params.get('id');
    //console.log(this.bindId)   
    });   
    this.hotelBookForm = this.fb.group({                  
      'checkin':['',Validators.required],
      'checkout':[''],
      'locationid':[''],
      'resortid':[''],
      'totalrooms':[''],
      'fullname':['',Validators.required],
      'email':['',[Validators.required,Validators.email]],
      'mobile_number':['',Validators.required],
      'totaladults':[''],
      'totalchildrens':['']
     
      });
      //this.submit()
  }

  Getlocationname() //resorts
  {
   this._commonservice.gethotels().then(data => {
    if(data)
    {
      this.locationlist1 = data;
     console.log(this.locationlist1)     
    }
  }) 
  }

  Getplacename() //resorts
  {
   this._commonservice.getBestplaces().then(data => {
    if(data)
    {
      this.placelist = data; //place
    // console.log(this.placelist)     
    }
  }) 
  }

  gethotel(_id:string)
  {
     this._commonservice.getIdwisehotel(_id).then(data => {
       if(data)
       {
         this.locationselected = data;
         console.log(this.locationselected)
         this.hotelid =this.locationselected[0]._id
         console.log(this.hotelid) //selected hotel id
         this.placeid = this.locationselected[0].location._id;
         console.log(this.placeid)
       }
     })   

}


insert()
{
  
  console.log(this.locationselected)
  this.hotelBookForm.controls['fullname'].setValue(this.fullname)    
  this.hotelBookForm.controls['email'].setValue(this.email)
  this.hotelBookForm.controls['mobile_number'].setValue(this.mobile_number)
    let postData = {
      fullname: this.fullname,  
      property:{fullname:this.fullname,email:this.email,mobile_number:this.mobile_number}
    } 
    console.log(postData)
   this._commonservice.Addpros(postData).then(resp => {
     if(resp)
     {
        console.log(resp);
        this.hotelBookForm.controls['checkin'].setValue(this.checkin)  
        this.hotelBookForm.controls['checkout'].setValue(this.checkout)  
        this.hotelBookForm.controls['totalrooms'].setValue(this.totalrooms) 
        this.hotelBookForm.controls['totaladults'].setValue(this.totaladults) 
        this.hotelBookForm.controls['totalchildrens'].setValue(this.totalchildrens) 

        let bookingobj={
          "memberid":resp._id,
          "checkin":this.checkin,
          "checkout":this.checkout,
          "totalrooms":this.totalrooms,
          "totaladults":this.totaladults,
          "totalchildrens":this.totalchildrens,
          "onModel":'Prospect',
          "locationid":this.placeid,//place
          "resortid":this.hotelid,
          "guestname":this.fullname
         
    }        
    console.log(bookingobj)
     this._commonservice.Addbookings(bookingobj).then(async resp1=>{
      let dtaa = await resp1;
        if(dtaa)
        {
          console.log("last response-->",dtaa);
          alert("Record successfully inserted...");
          
        }
      }) 
 }
   })
}


}
