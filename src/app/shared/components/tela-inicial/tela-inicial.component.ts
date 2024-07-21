import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tela-inicial',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tela-inicial.component.html',
  styleUrl: './tela-inicial.component.scss'
})
export class TelaInicialComponent implements OnInit {

  proximasAtividades = [
    { descricao: 'Entrega de trabalho da disciplina Angular 1', data: '2024-07-30' },
    { descricao: 'Avaliação da disciplina Angular 2 ', data: '2024-08-10' },
    { descricao: 'Chat com o mentor', data: '2024-07-25' },
  ];

  minhasDisciplinas = [
    { nome: 'Angular', semestre: 1 },
    { nome: 'Java', semestre: 2 },
    { nome: 'Javascript', semestre: 1 },
    { nome: 'React', semestre: 2 },
    { nome: 'CSS', semestre: 1 },
  ];

  cursosExtras = [
    { nome: 'Curso de Python', descricao: 'Aprenda Python do zero.' },
    { nome: 'Curso de Docker', descricao: 'Containerização de aplicações com Docker.' },
    { nome: 'Curso de Cloud', descricao: 'Introdução a computação em nuvem.' },
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
