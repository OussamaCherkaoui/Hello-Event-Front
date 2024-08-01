import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {NgIf} from "@angular/common";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatError, MatFormField, MatFormFieldModule, MatLabel} from "@angular/material/form-field";
import {MatInput, MatInputModule} from "@angular/material/input";
import {MatButton, MatButtonModule} from "@angular/material/button";
import {User} from "../models/User";
import {AuthentificationService} from "../Services/authentification.service";

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [
    FormsModule,
    NgIf,
    ReactiveFormsModule,
    MatLabel,
    MatError,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent implements OnInit{
  signUpForm: FormGroup;
  user : User = {
    email: '', idUser: 0, password: '', phone: '', role: 0, username: ''
  }

  constructor(private fb: FormBuilder,private userService:AuthentificationService) {
    this.signUpForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      phone: ['', [Validators.required, Validators.pattern(/^\+?\d{10,15}$/)]]
    });
  }

  onSubmit() {
    this.user.username = this.signUpForm.get('username')?.value;
    this.user.email = this.signUpForm.get('email')?.value;
    this.user.password = this.signUpForm.get('password')?.value;
    this.user.phone = this.signUpForm.get('phone')?.value;

    if (this.user.username && this.user.email && this.user.password && this.user.phone) {
      if (this.signUpForm.valid) {
        this.userService.register(this.user).subscribe(data=>{
          console.log(data);
        });
      } else {
        console.log('Remplit toutes les champs !!');
      }
    }
  }

  ngOnInit(): void {
  }
}
