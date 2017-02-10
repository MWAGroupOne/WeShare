import { Component, OnInit } from '@angular/core';
import { WebService } from './services/web.service';
import { DataService } from './services/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-states',
  template: `
  <div>
  <h2>States</h2>
    <div *ngFor="let state of statesx" class="clickable">
     <a [routerLink]="['/home','cities', state.state.state]">{{state.state.state}}</a>
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
export class StatesComponent implements OnInit {

  statesx: any[];
  postData:any;
  url: string;

  constructor(private webService: WebService, private activatedRoute: ActivatedRoute) {
    this.url = this.activatedRoute.snapshot.url.join('');
   }

  ngOnInit() {
    this.webService.getReq(this.url).subscribe(
      response => {
        this.statesx = response.json();
         //console.log("==========xxx==========x"+JSON.stringify(this.statesx));
      },
      error => console.error(error)
    );
  }

}
