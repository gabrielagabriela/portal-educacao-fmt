import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-disciplinas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './disciplinas.component.html',
  styleUrl: './disciplinas.component.scss'
})
export class DisciplinasComponent {

  cursos = [
    {
      nome: "Angular",
      disciplinas: [
        {
          semestre: 1,
          disciplinas: ["Angular 1", "Angular 2"]
        },
        {
          semestre: 2,
          disciplinas: ["Angular 3", "Angular 4"]
        }
      ]
    },

    {
      nome: "Java",
      disciplinas: [
        {
          semestre: 1,
          disciplinas: ["Java 1", "Java 2"]
        },
        {
          semestre: 2,
          disciplinas: ["Java 3", "Java 4"]
        }
      ]
    },

    {
      nome: "Javascript",
      disciplinas: [
        {
          semestre: 1,
          disciplinas: ["Javascript 1", "Javascript 2"]
        },
        {
          semestre: 2,
          disciplinas: ["Javascript 3", "Javascript 4"]
        }
      ]
    },

    {
      nome: "React",
      disciplinas: [
        {
          semestre: 1,
          disciplinas: ["React 1", "React 2"]
        },
        {
          semestre: 2,
          disciplinas: ["React 3", "React 4"]
        }
      ]
    },

    {
      nome: "CSS",
      disciplinas: [
        {
          semestre: 1,
          disciplinas: ["CSS 1", "CSS 2"]
        },
        {
          semestre: 2,
          disciplinas: ["CSS 3", "CSS 4"]
        }
      ]
    },
  ]

  cursoSelecionado: any = null;

  selecionarCurso(curso: any) {
    this.cursoSelecionado = curso;
  }
}
