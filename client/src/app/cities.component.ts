import { Component, OnInit } from '@angular/core';
import { WebService } from './services/web.service';
import { DataService } from './services/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cities',
  template: `
  <div>
  <h2>Cities</h2>
      <div *ngFor="let city of cities"  class="clickable">
     <a [routerLink]="['../../items', city]"> {{city}}</a>
    </div>
    </div>
  `,
    styles: [`.clickable {
    border: 1px dotted black;
    width: 200px;
    display: inline-block;
    height:50px;
    margin-right:20px;
    margin-bottom:20px;
}`]
})
export class CitiesComponent implements OnInit {

  url: string;
  postData: any;
  cities: any[];
  constructor(private webService: WebService, private activatedRoute: ActivatedRoute) {
    this.url = this.activatedRoute.snapshot.url[0] + "/" + this.activatedRoute.snapshot.params['id'];
  }

  ngOnInit() {
    this.webService.getReq(this.url).subscribe(
      response => {
        console.log("=====------"+response.json());
        this.cities = response.json()
      },
      error => console.error(error)
    );
  }
}
