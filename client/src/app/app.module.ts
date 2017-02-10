import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ImageUploadModule } from 'angular2-image-upload';

import { AppComponent } from './app.component';
import { ItemsComponent } from './items/items.component'; 
import { StatesComponent } from './states.component';
import { CitiesComponent } from './cities.component';
import { AddComponent } from './items/add.component';
import { ErrorComponent } from './error.component';
import { ItemComponent } from './items/item.component';

import {myRoutes} from './app.routes';
import { RegComponent } from './user/reg.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import {AuthCanActivateGuard} from './guards/auth.canactivate.guard'
import {AuthService} from './services/auth.service';
import {WebService} from './services/web.service';
import {DataService} from './services/data.service';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { RegsuccessComponent } from './user/regsuccess.component';
import { SigninComponent } from './login/signin.component';
import { ItemaddsuccessComponent } from './items/itemaddsuccess.component';
import { NearitemsComponent } from './items/nearitems.component';
import { FileuploaderComponent } from './fileuploader.component';
import { MapComponent } from './map/map.component';


@NgModule({
  declarations: [
    AppComponent,
    ItemsComponent,
    StatesComponent,
    CitiesComponent,
    AddComponent,
    ErrorComponent,
    ItemComponent,
    LoginComponent,
    RegComponent,
    UserComponent,
    UserComponent,
    LoginComponent,
    HomeComponent,
    SearchComponent,
    RegsuccessComponent,
    SigninComponent,
    ItemaddsuccessComponent,
    NearitemsComponent,
    FileuploaderComponent,
    MapComponent,
    MapComponent,
  ],
  imports: [
     BrowserModule,
    FormsModule,
    HttpModule,
    myRoutes
  ],
  providers: [AuthCanActivateGuard, AuthService, DataService, WebService],
  bootstrap: [AppComponent]
})
export class AppModule { }
