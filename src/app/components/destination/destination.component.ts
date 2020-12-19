import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators} from '@angular/forms';
import { commonService } from '../../core/services/common.services';
import { Router,ActivatedRoute} from '@angular/router';
declare var $: any;


@Component({
  selector: 'app-destination',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.css']
})
export class DestinationComponent implements OnInit {
  locationlist:any[]=[];
  packagelist:any[]=[];
  onepackagedta:any[]=[];
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
    this.getpackage();
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

  getpackage()
  {
    this._commonservice.getpackage().then(data => {
      if(data)
      {
        this.packagelist = data;
        console.log(this.packagelist)
        this.onepackagedta.push(this.packagelist[0])
        console.log(this.onepackagedta)
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

  showhotel(_id:number)
  {
    console.log(_id)
    this._router.navigate(['/hotel',_id]);
  }
}
