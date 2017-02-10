import { Component, OnInit } from '@angular/core';
import { WebService } from '../services/web.service';
import { DataService } from '../services/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-items',
  template: ` <h2>Items</h2>
      <div *ngFor="let item of items">
     <div class="row">
  <div class="col-sm-4">
   <a [routerLink]="['../../item', item._id]"><img src="http://gxgraphics.com/images/promotional-products-icon-u6916.png" /></a>
  </div>
  <div class="col-sm-4">
   <a [routerLink]="['../../item', item._id]"><h4>{{item.name}}</h4></a>
  <div>{{item.description}}</div>
  </div>
    </div>`,
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  items: any[];
  url: string;
  postData: any;

  constructor(private webService: WebService, private activatedRoute: ActivatedRoute) {
    this.url = this.activatedRoute.snapshot.url[0] + "/" + this.activatedRoute.snapshot.params['id'];
  }

  ngOnInit() {
    this.webService.getReq(this.url).subscribe(
      response => {
        this.items = response.json()
      },
      error => console.error(error)
    );
  }
}
