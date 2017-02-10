import { Component, OnInit } from '@angular/core';
import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot, ActivatedRoute, Router } from "@angular/router";
import { Observable } from "rxjs/Rx";
import { WebService } from '../services/web.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['add.component.css']
})
export class AddComponent implements OnInit {

  testdata = "Hello";

  item = {"name": "Sofas", "description": "Just for just", "details": "test data", "contacts": { "email": "bxd", "phone": "643678999" }, "category": "offered", "location": { "state": "IA", "city": "ottumwa", "geo": [ -99.9666635, 41.0226 ] }, "image": "", "status": "available" };

 constructor(private webService: WebService, private router: Router) {

  }

  ngOnInit() {
  }

onSubmit2(f) {
    this.webService.postReq('additem', this.item).subscribe(
      response => {
        console.log("Hello item save: " + response.json());
        this.router.navigateByUrl('home/itemaddsuccess');
      },
      error => console.error("Request failure: "+error)
    );
  }
}
