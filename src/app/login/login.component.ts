import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  constructor(private router: Router) {}

  loginFormModel = {
    email: '',
    senha: ''
  }

  onSubmit(){
    if(this.loginFormModel.email && this.loginFormModel.senha){
      console.log("redirecionar para a home")
      this.router.navigate(['/home']);
    } else{
      console.log("preencha os campos")
    }
  }

  esqueciSenha(){
    alert("Processo de recuperação de senha envido para o e-mail cadastrado")
  }
}
