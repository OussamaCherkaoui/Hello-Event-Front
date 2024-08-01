import { Routes } from '@angular/router';
import {LogInComponent} from "./log-in/log-in.component";
import {SignUpComponent} from "./sign-up/sign-up.component";
import {HomeComponent} from "./home/home.component";
import {AproposComponent} from "./apropos/apropos.component";
import {AdminComponent} from "./admin/admin.component";

export const routes: Routes = [
  { path: 'logIn', component: LogInComponent},
  { path: 'signUp', component: SignUpComponent},
  { path: '', component: HomeComponent},
  { path: 'aPropos', component: AproposComponent},
  { path: 'admin', component: AdminComponent}
];
