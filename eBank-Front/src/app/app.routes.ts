import { Routes } from '@angular/router';
import {OuvrirCompteComponent} from "./ouvrir-compte/ouvrir-compte.component";
import {LogInCompteComponent} from "./log-in-compte/log-in-compte.component";
import {CompteComponent} from "./compte/compte.component";
import {CartComponent} from "./cart/cart.component";
import {RegisterComponentComponent} from "./register-component/register-component.component";
import {LoginComponentComponent} from "./login-component/login-component.component";

export const routes: Routes = [
  { path: 'ouvrirCompte', component: OuvrirCompteComponent },
  { path: 'seConnecterCompte', component: LogInCompteComponent},
  {path:'compte',component:CompteComponent},
  {path:'compte/cart',component:CartComponent},
  {path:'register',component:RegisterComponentComponent},
  {path:'logIn',component:LoginComponentComponent}
];
