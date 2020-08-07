import { Component, OnInit } from '@angular/core';
import { Fruta } from '../models/fruta.model';

@Component({
  selector: 'app-lista-frutas',
  templateUrl: './lista-frutas.component.html',
  styleUrls: ['./lista-frutas.component.css']
})
export class ListaFrutasComponent implements OnInit {
  frutas: Fruta[];
  constructor() {
      this.frutas = []
   }

  ngOnInit(): void {
  }

  guardar(nombre:string, precio:number):boolean{
    this.frutas.push(new Fruta(nombre, precio));
    return false;
  }
}
