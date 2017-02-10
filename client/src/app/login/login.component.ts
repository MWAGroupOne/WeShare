import { Component, OnInit } from '@angular/core';
import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot, ActivatedRoute, Router } from "@angular/router";
import { Observable } from "rxjs/Rx";
import { WebService } from '../services/web.service';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

user ={email:"bwamie@gmail.com", password:""}
  constructor(private webService: WebService,private authService: AuthService, private router: Router) {
  }

  ngOnInit() {
  }

onSubmit(f) {
    console.log(f.value);
    this.webService.postReq('signin', f.value).subscribe(
      response => {
        console.log("Hello User: " + response.json().auth);
        this.authService.auth(response.json().auth);
        this.router.navigateByUrl('');
      },
      error => console.error("Request failure: "+error)
    );
  }
}
