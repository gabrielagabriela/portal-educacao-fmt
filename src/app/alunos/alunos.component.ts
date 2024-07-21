import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-alunos',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './alunos.component.html',
  styleUrl: './alunos.component.scss',
})
export class AlunosComponent implements OnInit {
  textoPesquisa: string | undefined;
  listagemUsuarios: Array<{
    nome: string;
    cpf: string;
    email: string;
    celular: string;
    curso: string;
    rota: string;
  }> = [];

  listagemUsuarioPesquisa = [
    {
      nome: 'Ana Paula',
      cpf: '1234567',
      email: 'ana@gmail.com',
      celular: '998228282',
      curso: 'Java',
      rota: '',
    },
    {
      nome: 'Maria José',
      cpf: '1234567',
      email: 'maria@gmail.com',
      celular: '998228282',
      curso: 'CSS',
      rota: '',
    },
    {
      nome: 'Carlos Antonio',
      cpf: '1234567',
      email: 'caros@gmail.com',
      celular: '998228282',
      curso: 'React',
      rota: '',
    },
    {
      nome: 'Pedro Paulo',
      cpf: '1234567',
      email: '12pp@gmail.com',
      celular: '998228282',
      curso: 'Java',
      rota: '',
    },
    {
      nome: 'João Lucas',
      cpf: '1234567',
      email: 'uiebfe@gmail.com',
      celular: '998228282',
      curso: 'Java',
      rota: '',
    },
  ];

  ngOnInit(): void {
    this.listagemUsuarios = this.listagemUsuarioPesquisa;
  }

  pesquisar() {
    if (this.textoPesquisa) {
      this.listagemUsuarios = this.listagemUsuarioPesquisa.filter(
        (usuario) =>
          usuario.nome
            .toUpperCase()
            .includes(this.textoPesquisa!.toUpperCase()) ||
          usuario.email
            .toUpperCase()
            .includes(this.textoPesquisa!.toUpperCase())
      );
    } else {
      this.listagemUsuarios = this.listagemUsuarioPesquisa;
    }
  }

  editar(index: number) {
    const usuario = this.listagemUsuarios[index]
  }

  excluir(index: number) {
    let resposta = confirm('Quer mesmo excluir este usuário');
    if (resposta) {
      this.listagemUsuarios.splice(index, 1)
    }
  }
}
