import { Component } from '@angular/core';
import { TelaInicialComponent } from '../shared/components/tela-inicial/tela-inicial.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TelaInicialComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
