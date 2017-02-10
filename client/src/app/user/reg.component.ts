import { Component, OnInit } from '@angular/core';
import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot, ActivatedRoute, Router } from "@angular/router";
import { Observable } from "rxjs/Rx";
import { WebService } from '../services/web.service';

@Component({
  selector: 'app-reg',
  templateUrl: "./reg.component.html",
  styles: ['../login/login.component.css']
})
export class RegComponent implements OnInit {
  user = { fname: "Edwin", lname: "Bwambale", email: "bwamie@gmail.com", passwd: "test", cpasswd: "test" }
  constructor(private webService: WebService, private router: Router) {
    //$('#signupbox').show();
  }

  ngOnInit() {
  }

  onSubmit(f) {
    console.log(f.value);
    this.webService.postReq('saveuser', f.value).subscribe(
      response => {
        //this.cities = response.json()
        console.log("Hello User: " + response.json());
        this.router.navigateByUrl('regsuccess');
      },
      error => console.error(error)
    );
  }
}