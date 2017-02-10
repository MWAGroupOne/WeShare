import { Component, OnInit } from '@angular/core';
import { WebService } from '../services/web.service';
import { DataService } from '../services/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-nearitems',
  template: ` <h2>Items Near You</h2>
      <div *ngFor="let item of items" class="clickable" >
<div class="row" class="itemdata">
  <div><a [routerLink]="['../item', item._id]"><h4>{{item.name}}</h4></a></div>
  <div>
   <a [routerLink]="['../item', item._id]"><img src="http://gxgraphics.com/images/promotional-products-icon-u6916.png" /></a>
  </div>
  <div>
  <div>Category:{{item.category}}</div>
  <div>City: {{item.location.city}}</div>
  <div>State: {{item.location.city}}</div>
  <div>{{item.description}}</div>
  </div>
</div>
    </div>`,
  styleUrls: ['./items.component.css']
})
export class NearitemsComponent implements OnInit {

  items: any[];
  url: string;
  latitude;
  longitude;
  city: any;

  constructor(private webService: WebService, private activatedRoute: ActivatedRoute) {
    this.url = this.activatedRoute.snapshot.url[0] + "";
  }

  ngOnInit() {
    navigator.geolocation.getCurrentPosition(
      position => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.webService.getReq('nearitems/?currentLong=' + this.longitude + '&currentlat=' + this.latitude).subscribe(
          res => { console.log(res.json()); this.items = res.json(); });
      }
    )
  }
}
