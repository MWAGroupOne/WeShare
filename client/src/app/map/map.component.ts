import { Component, OnInit } from '@angular/core';
import {DataService} from '../services/data.service';
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
   latitude;
   longitude;
   city:any;

  constructor(private dataservice:DataService) { }

  ngOnInit() {
    navigator.geolocation.getCurrentPosition(
      position => {
        this.latitude = position.coords.latitude;
        console.log('latitude'+this.latitude);
        this.longitude = position.coords.longitude;
        console.log(this.longitude);
        this.dataservice.getCurrentLocation(this.longitude,this.latitude).subscribe(
       res=>{console.log(res.json());this.city=res.json();} );
        
      }
    )
  }


    //navigator.geolocation.getCurrentPosition(this.success,this.fail);
  
/*success(position) {
        var crd = position.coords;
        this.currentLon = crd.longitude;
        console.log(this.currentLon);
        this.currentLat = crd.latitude;  
        console.log(this.currentLat);
              
    }
    fail(msg) {
        console.log(msg.code + msg.message); 
    }*/
    
}


