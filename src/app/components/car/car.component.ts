import { Component, OnInit } from '@angular/core';
import { commonService } from '../../core/services/common.services';
import { FormBuilder,FormGroup,Validators} from '@angular/forms';
import { Router,ActivatedRoute} from '@angular/router';
declare var $:any;
@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  locationname:any;
  locationlist:any[]=[];
  newdata:any;
  hotelForm:FormGroup;
  carList : any[] = [];


  constructor( private _commonservice: commonService,
    private fb:FormBuilder,
    private _router: Router) { }

  ngOnInit() {
    $.getScript('assets/js/main.js');
    this.getCarDetails();
    this.hotelForm = this.fb.group({                  
      'locationname':[''],
     
      });
      this.Getlocationname();
  }
  Getlocationname()
  {
   this._commonservice.getBestplaces().then(data => {
    if(data)
    {
      this.locationlist =data;
     console.log(this.locationlist)     
    }
  }) 
  }

  getCarDetails(){
    this._commonservice.getCar().then(data => {
      if(data){
        this.carList = data;
        // this.carList.push(data);
        console.log(this.carList);
      }
    })
  }
  selected(){

    console.log(this.locationname)
    this.locationlist.forEach(element => {
     if( element.locationname == this.locationname)
     {      
      this.newdata = element._id
      console.log(this.newdata)

     }
      
    });
  }
  searchHotel(_id:number){
    console.log(_id);
    this._router.navigate(['/hotel',_id]);
  }

}
