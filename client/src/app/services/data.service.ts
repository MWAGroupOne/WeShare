import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {WebService} from './web.service';

@Injectable()
export class DataService {

  public data: any;

  constructor(public webService: WebService, private http:Http) { 

  }

  getReq(url:string){
     this.webService.getReq(url).subscribe(
      response => {console.log(response);
         this.data = response.json()}, 
      error => console.error(error)
    );
  }

public getCurrentLocation(currentLong,currentLat){
     console.log("Inside data service ");
      return this.http.get('http://localhost:3001/getItemsNearMe?currentLong='+currentLong+'&currentlat='+currentLat);
    }
}
