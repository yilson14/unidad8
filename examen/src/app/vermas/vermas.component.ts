import { Component, OnInit } from '@angular/core';
import {VermasService} from '../vermas.service';
import {Router} from '@angular/router'

@Component({
  selector: 'app-vermas',
  templateUrl: './vermas.component.html',
  styleUrls: ['./vermas.component.css']
})
export class VermasComponent implements OnInit {
  imagen = this.ver.imagen;
  nombre = this.ver.nombre;
  precio = this.ver.precio;
  unidades = this.ver.unidades;
  
  constructor(private ver: VermasService, private router:Router) { }

  atras(){
    this.router.navigate(['/principal']);
  }
  
  ngOnInit() {
  
  }

}
