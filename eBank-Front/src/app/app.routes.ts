import { Routes } from '@angular/router';
import {OuvrirCompteComponent} from "./ouvrir-compte/ouvrir-compte.component";
import {LogInCompteComponent} from "./log-in-compte/log-in-compte.component";
import {CompteComponent} from "./compte/compte.component";

export const routes: Routes = [
  { path: 'ouvrirCompte', component: OuvrirCompteComponent },
  { path: 'seConnecterCompte', component: LogInCompteComponent},
  {path:'compte',component:CompteComponent}
];
