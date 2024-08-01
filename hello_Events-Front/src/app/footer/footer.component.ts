import {Component, OnInit} from '@angular/core';
import {MatInputModule} from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {CommonModule} from "@angular/common";
import {MatToolbarModule} from "@angular/material/toolbar";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {Contact} from "../models/Contact";
import {ContactService} from "../Services/contact.service";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCardModule,
    CommonModule,
    MatToolbarModule,
    ReactiveFormsModule
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent implements OnInit{
  contactForm: FormGroup;
  contact:Contact ={
    id:0,
    name: '',
    email: '',
    message: '',
    requestDate: ''
  };
  constructor(private fb: FormBuilder,private contactService:ContactService) {
    this.contactForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      name: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      this.contact.email= this.contactForm.get('email')?.value,
        this.contact.name= this.contactForm.get('name')?.value,
        this.contact.message= this.contactForm.get('message')?.value
      this.contactService.saveContact(this.contact).subscribe(response => {
        console.log('Contact data sent successfully', response);
      }, error => {
        console.error('Error sending contact data', error);
      });
    }
  }

  ngOnInit(): void {
  }

}
