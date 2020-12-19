import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators} from '@angular/forms';
import { commonService } from '../../core/services/common.services';
import { Router,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  hotellist:any[]=[];
  placelist:any[]=[];

  constructor(private fb:FormBuilder,
    private _commonservice:commonService,
    private _router: Router,
    private  _route : ActivatedRoute) { }

  ngOnInit() {
    this.Gethotel()
    this.GetBestplaces();
  }


  Gethotel()
  {
   this._commonservice.gethotels().then(data => {
    if(data)
    {
      this.hotellist =data;
      //console.log(this.hotellist)     
    }
  }   
  ) 
  }

  GetBestplaces()
  {
    this._commonservice.getBestplaces().then(data => {
      if(data)
      {
        this.placelist =data;
       // console.log(this.placelist)     
      }
    }   
    ) 
  }
}
