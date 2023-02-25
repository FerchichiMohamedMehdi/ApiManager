import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formLogin:FormGroup

  constructor(private fb: FormBuilder, private router:Router ) { }

  ngOnInit(): void {
    console.log("her elogin");

    this.formLogin = this.fb.group({
      email: ["",Validators.required],
      nom: ["",Validators.required],
      password: ["",Validators.required],
    })
    
  }


  login() {

    console.log(this.formLogin.value.email);
     console.log(this.formLogin.value.password);

    if (this.formLogin.value.email == "admin" && this.formLogin.value.password == "admin") {
     alert("Bienvenue au service de gestion des APIs");
     localStorage.setItem("state","1")
    this.router.navigateByUrl("Home");
      }
    else {
     alert("Erreur !!!! veuillez verifier votre login et votre mot de passe");
    }

    console.log("form login is:",this.formLogin.invalid);

    if(this.formLogin.invalid)
    {
      console.log("invalid");
      return;
    }

    else {
      console.log("valid");
      localStorage.setItem("state","1")
      this.router.navigateByUrl("Home");
    }
    
  }

}
