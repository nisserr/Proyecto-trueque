
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  constructor(private formBuilder: FormBuilder ,private router: Router
    ) { 
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      lastname: ['', Validators.required],
      birthday: ['', Validators.required],
      commune: ['', Validators.required],
      email: ['', Validators.required, Validators.email],
      password: ['', Validators.required]})


   
    }
   
  
  ngOnInit(): void {
  }
  registerForm: FormGroup;
  submitted = false;

  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      console.log("nofunciona")
      return;
    }this.router.navigate(['/Perfil']);
    console.log("funciona")
  }

}
