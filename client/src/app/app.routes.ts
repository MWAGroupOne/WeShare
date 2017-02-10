import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { StatesComponent } from './states.component';
import { LoginComponent } from './login/login.component';
import { CitiesComponent } from './cities.component';
import { ItemsComponent } from './items/items.component';
import { ItemComponent } from './items/item.component';
import { RegComponent } from './user/reg.component';
import { AddComponent } from './items/add.component';
import { AuthCanActivateGuard } from './guards/auth.canactivate.guard';
import { RegsuccessComponent } from './user/regsuccess.component';
import { ItemaddsuccessComponent } from './items/itemaddsuccess.component';
import { NearitemsComponent } from './items/nearitems.component';
import { FileuploaderComponent } from './fileuploader.component';

const MY_ROUTES: Routes = [
  { path: '', component: LoginComponent, canActivate: [AuthCanActivateGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: RegComponent },
  { path: 'regsuccess', component: RegsuccessComponent },
  {
    path: 'home', component: HomeComponent, /*canActivate: [AuthCanActivateGuard],*/ children: [
      { path: 'states', component: StatesComponent/*, canActivate: [AuthCanActivateGuard]*/ },
      { path: 'cities/:id', component: CitiesComponent/*, canActivate: [AuthCanActivateGuard]*/ },
      { path: 'items/:id', component: ItemsComponent/*, canActivate: [AuthCanActivateGuard]*/ },
      { path: 'item/:id', component: ItemComponent/*, canActivate: [AuthCanActivateGuard]*/ },
      { path: 'cities/:id', component: CitiesComponent/*, canActivate: [AuthCanActivateGuard]*/ },
      { path: 'additem', component: AddComponent /*, canActivate: [AuthCanActivateGuard]*/ },
      { path: 'itemaddsuccess', component: ItemaddsuccessComponent/*, canActivate: [AuthCanActivateGuard]*/ },
      { path: 'nearitems', component: NearitemsComponent/*, canActivate: [AuthCanActivateGuard]*/ },
      { path: 'fileuploader', component: FileuploaderComponent/*, canActivate: [AuthCanActivateGuard]*/ }
    ]
  },
  
  { path: '**', redirectTo: 'error' }
];

export const myRoutes = RouterModule.forRoot(MY_ROUTES);