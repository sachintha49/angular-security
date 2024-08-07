import { Routes } from '@angular/router';
import {CarComponent} from "./components/car/car.component";
import {HomeComponent} from "./components/home/home.component";
import {AdminComponent} from "./components/admin/admin.component";
import {UserComponent} from "./components/user/user.component";
import {LoginComponent} from "./components/login/login.component";
import {ForbiddenComponent} from "./components/forbidden/forbidden.component";

export const routes: Routes = [
  {path: 'cars', component: CarComponent},
  {path: 'home', component: HomeComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'user', component: UserComponent},
  {path: 'login', component: LoginComponent},
  {path: 'forbidden', component: ForbiddenComponent}
];
