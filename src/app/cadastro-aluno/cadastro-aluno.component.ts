import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-aluno',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './cadastro-aluno.component.html',
  styleUrl: './cadastro-aluno.component.scss'
})
export class CadastroAlunoComponent implements OnInit {

  constructor(private router: Router) {}
  cadastroForm!: FormGroup;
  alunoCadastrado: Array<{nome: string, cpf: string, email: string, celular: string, curso: string}> = []

  ngOnInit(): void {
      this.criarForm();
  }

  criarForm(){
    this.cadastroForm = new FormGroup({
      nome: new FormControl('', Validators.required),
      cpf: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      celular: new FormControl('', Validators.required),
      curso: new FormControl('', Validators.required)

    })
  }

  salvar(){
    if(this.cadastroForm.valid){
      this.alunoCadastrado.push(this.cadastroForm.value);
      console.log("Aluno cadastrado:", this.alunoCadastrado);
      this.router.navigate(['/alunos']);
    } else {
      this.cadastroForm.markAllAsTouched()
    }
  }
}
