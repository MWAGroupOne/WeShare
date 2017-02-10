import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-itemaddsuccess',
  template: `
   <div id="signupbox" style=" margin-top:50px">
        <div>
            <div>
                <div class="panel-title">Successful:</div>
                <div style="float:right; font-size: 85%; position: relative; top:-10px"></div>
            </div>
            <div class="panel-body">
               Item has been added successfully. <a [routerLink]="['../additem']">Add another item.</a> or
               <a [routerLink]="['../nearitems']">find items near you.</a>
            </div>
        </div>
    </div>
  `,
  styleUrls: []
})
export class ItemaddsuccessComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
