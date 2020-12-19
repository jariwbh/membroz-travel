import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators} from '@angular/forms';
import { commonService } from '../../core/services/common.services';
import { Router,ActivatedRoute} from '@angular/router';
declare var $: any;
declare var $:any;

@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.css']
})
export class FlightComponent implements OnInit {
  locationlist:any[]=[];
  locationname:any;
  newdata:any;
  hotelForm:FormGroup;

  constructor(private fb:FormBuilder,
    private _commonservice:commonService,
    private _router: Router,
    private  _route : ActivatedRoute) { }

  ngOnInit() {
    $.getScript('assets/js/main.js');
    this.Getlocationname();
    this.hotelForm = this.fb.group({                  
      'locationname':[''],
     
      });

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
