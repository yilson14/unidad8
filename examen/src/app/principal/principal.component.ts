import { Component, OnInit } from '@angular/core';
import {ProductoService} from '../producto.service';
import {VermasService} from '../vermas.service';
import {CarritoService} from '../carrito.service';
import {Router} from '@angular/router'


@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  productos: any[]=[];
  subproducto: any[]= this.producto.subproducto;

  constructor(private producto: ProductoService, private ver: VermasService, private router:Router, private carro:CarritoService ) { }
  
  buscador(texto){
    this.subproducto = [];
    for(var i=0; i<this.producto.subproducto.length; i++){
      var cadena;
      cadena = this.producto.subproducto[i].nombre;

      if(cadena.indexOf(texto)!=-1){
        this.producto.subproducto[i].vista = true
        this.subproducto.push(this.producto.subproducto[i])
      }else{
        this.producto.subproducto[i].vista = false
      }
    }
  }

  vermas(nombre){

    for(var i=0; i<this.subproducto.length; i++){
  

      if(this.subproducto[i].nombre == nombre){
        this.ver.imagen = this.subproducto[i].imagen;
        this.ver.nombre = this.subproducto[i].nombre;
        this.ver.precio = this.subproducto[i].precio;
        this.ver.unidades = this.subproducto[i].unidades;
      }
    }

    this.router.navigate(['/ver']);
  }

  agregar(imagen, nombre, precio, unidad){
    precio = precio.substring(2);
    var subtotal = precio * unidad;
    var val = true; 
    var  pre, sub, num;

    for(var i=0; i<this.subproducto.length; i++){
  

      if(this.subproducto[i].nombre == nombre){
        this.subproducto[i].unidades = this.subproducto[i].unidades - unidad ;
      }
    }

    for(var x=0; x<this.carro.carrito.length; x++){
  

      if(this.carro.carrito[x].nombre == nombre){
        pre = parseInt( this.carro.carrito[x].unidad) + parseInt(unidad) 
        this.carro.carrito[x].unidad = pre;
        num =  this.carro.carrito[x].subtotal;
        sub =   num  + subtotal;
        this.carro.carrito[x].subtotal = sub ;
        val = false;
        this.carro.total = this.carro.total + subtotal;
      }
    }

    if(val){
      this.carro.carrito.push({imagen,nombre, subtotal, unidad})
      this.carro.total = this.carro.total + subtotal;
    }
    
  }

  ngOnInit() {

    
    this.producto.producto().subscribe((data: Response)=>{
     if(this.producto.subproducto.length==0){
      for(let key in data){
        if(data[key]!=null){

          this.productos.push(data[key]);
        }
        
        }
        this.subproducto = this.productos;
        this.producto.subproducto = this.subproducto;
    }
     }
      )
 
}
 

}
