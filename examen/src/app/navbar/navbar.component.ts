import { Component, OnInit } from '@angular/core';
import {CarritoService} from'../carrito.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

   
  constructor(private carro: CarritoService) { }

  invisible(){
    this.carro.estado = 1;
  }

  visible(){
    this.carro.estado = 0;
  }
  ngOnInit() {

  }

}
