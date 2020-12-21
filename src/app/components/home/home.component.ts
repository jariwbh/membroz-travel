import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators} from '@angular/forms';
import { commonService } from '../../core/services/common.services';
import { Router,ActivatedRoute} from '@angular/router';
declare var $: any;


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  locationlist:any[]=[];
  packagelist:any[]=[];
  onepackagedta:any[]=[];
  hotelForm:FormGroup;
  locationname:any;
  newdata:any;
  resortData:any[]=[];
  locationdata:any[]=[];
  

  constructor(private fb:FormBuilder,
    private _commonservice:commonService,
    private _router: Router,
    private  _route : ActivatedRoute) { }

  ngOnInit() {

    $.getScript('assets/js/main.js');
    this.hotelForm = this.fb.group({                  
      'locationname':['',Validators.required],
     
      });
    this.Getlocationname();
    this.getpackage();
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

  showhotel(_id:number)
  {
    console.log(_id)
    this._router.navigate(['/hotel',_id]);
  }
  

}
