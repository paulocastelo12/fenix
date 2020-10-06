import { Component, OnInit } from '@angular/core';
import { faBars, faMinus, faPlus, faPlusCircle, faRedo, faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  minus = faMinus;
  redo = faRedo;
  plus = faPlusCircle;


  constructor() { }

  ngOnInit(): void {
  }

}
