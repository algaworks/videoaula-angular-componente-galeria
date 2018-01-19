import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent implements OnInit {

  @Input() usuarios: Array<any>;

  @Output() selecionado = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  selecionando(usuario: any) {
    this.selecionado.emit(usuario);
  }
}
