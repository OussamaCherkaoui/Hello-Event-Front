import {Component, OnInit} from '@angular/core';
import {Router, RouterLink} from "@angular/router";
import {AuthentificationService} from "../Services/authentification.service";
import {NgIf} from "@angular/common";
import {MatToolbar, MatToolbarModule} from "@angular/material/toolbar";
import {MatAnchor, MatButton, MatButtonModule} from "@angular/material/button";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    RouterLink,
    NgIf,
    MatToolbarModule,
    MatAnchor,
    MatButtonModule
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit{

  isLoggedIn = false;

  constructor(private router: Router, private authService: AuthentificationService) { }

  ngOnInit(): void {
    this.authService.isLoggedIn.subscribe(
      (loggedIn: boolean) => {
        this.isLoggedIn = loggedIn;
      }
    );
  }

  logout() {
    this.authService.logout();
    this.router.navigateByUrl('/logIn');
  }
}
