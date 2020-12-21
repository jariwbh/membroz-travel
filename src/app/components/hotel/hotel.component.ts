import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators} from '@angular/forms';
import { commonService } from '../../core/services/common.services';
import { Router,ActivatedRoute} from '@angular/router';
declare var $: any;


@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent implements OnInit {
  locationlist:any[]=[];
  selectedHotel:any;
  selectedHotel1:any;
  Bookingform:FormGroup;
  locationname:any;
  newdata:any
  hotelData:any
bindId:any;
hotelForm: FormGroup;

  constructor( 
    private fb:FormBuilder,
    private _commonservice:commonService,
    private _router: Router,
    private  _route : ActivatedRoute) { }

  ngOnInit() {
    $.getScript('assets/js/main.js');
   /*  this.Bookingform = this.fb.group({                  
      'fullname':[''],
      'email':[''], 
      'mobile_number': [''],
      'date':[''],
      }); */
      this.Getlocationname();

      this._route.paramMap.subscribe(params => {
        let hotelId :any = params.get('_id');  
       console.log(hotelId)
        if (hotelId)
         {
          this.GetHotelbyId(hotelId);
            //hotelId == resortlocation_id    
        }
        //store id in one variable called bindId
      this.bindId = params.get('_id');
     console.log(this.bindId)   
      });   
      this.hotelForm=this.fb.group({
        'locationname':['']
      });
      this.getHotel();
  }
  getHotel(){
    this._commonservice.getHotelList().then(data => {
      if(data){
        this.hotelData = data;
        
        //console.log(this.hotelData)
        
      }
    })
  }
  Getlocationname()
  {
   this._commonservice.gethotels().then(data => {
    if(data)
    {
      this.locationlist = data;
     console.log(this.locationlist)   
    }
  }) 
  }

  confirmBooking(_id:number)
  {
    //console.log(_id)
    this._router.navigate(['/hotel/hotelbook',_id]);
  }
  

  GetHotelbyId(bindId:string)
  {
   this._commonservice.gethotels().then(ele => {
     if(ele)
     {
      this.selectedHotel1  = ele;
     }
     console.log(this.selectedHotel1)

     this.selectedHotel1.forEach(element => {
      if(element.location._id == bindId) //bindId==resortlocatio._id
      {
        console.log(element.location._id)
        console.log(bindId)
       // var newID = bindId['_id'];
         
        this._commonservice.getresortbylocation(bindId).then(data =>{
          if(data)
          {
            this.locationlist = data;
            console.log(this.locationlist)
          }
        })
      }
    })
   })
   
   
  }



  selected(){
    //console.log(this.hotelData)
    //console.log(this.locationname)
    this.hotelData.forEach(element => {
     if( element.locationname == this.locationname)
     {      
      this.newdata = element._id

     }
      
    });
  }

  searchHotel(_id:number){
    this._router.navigate(['/hotel',_id]);

//this.GetHotelbyId(this.bindId)
 }

}
