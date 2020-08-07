import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { Fruta } from '../models/fruta.model';


@Component({
  selector: 'app-fruteria',
  templateUrl: './fruteria.component.html',
  styleUrls: ['./fruteria.component.css']
})
export class FruteriaComponent implements OnInit {
  @Input() fruta: Fruta[];
  @HostBinding('attr.class') cssClass = 'prueba'
  constructor() { }

  ngOnInit(): void {
  }

}
