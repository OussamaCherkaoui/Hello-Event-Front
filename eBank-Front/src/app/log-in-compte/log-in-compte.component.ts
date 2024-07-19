import {Component, OnInit} from '@angular/core';
import {CompteService} from "../services/compte.service";
import {Router} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-log-in-compte',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,CommonModule
  ],
  templateUrl: './log-in-compte.component.html',
  styleUrl: './log-in-compte.component.css'
})
export class LogInCompteComponent implements OnInit{
  public numeroCompte='';
  public motDePass:number|undefined;
  errorMessage: string | null = null;
  ngOnInit(): void {
  }
  constructor(
    private compteService: CompteService,
    private router: Router
  ) {}

  logInCompte(){
    this.compteService.logInCompte(this.numeroCompte,this.motDePass).subscribe(
      (compte)=>{
        if (compte) {
          this.router.navigate(['/compte']);
        } else {
          this.errorMessage = 'Numéro de compte ou mot de passe incorrect.';
        }
      },
      (error) => {
        this.errorMessage = error.message;
      }
    );
  }
}
