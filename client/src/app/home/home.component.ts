import { Component, OnInit } from '@angular/core';
import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot, ActivatedRoute, Router } from "@angular/router";
import { Observable } from "rxjs/Rx";
import { StatesComponent } from '../states.component';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService) {
    this.router.navigateByUrl('home/states');
   }

  ngOnInit() {
  }

  logOut(){
    this.authService.auth(false); 
    this.router.navigateByUrl('');
  }

}
