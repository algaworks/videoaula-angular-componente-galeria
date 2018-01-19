import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  listaUsuarios = [
    { id: 1, nome: 'Alexandre' },
    { id: 2, nome: 'Ana' },
    { id: 3, nome: 'Anna' },
    { id: 4, nome: 'Thiago' },
    { id: 5, nome: 'Eduardo' },
    { id: 6, nome: 'Junior' }
  ];
}
