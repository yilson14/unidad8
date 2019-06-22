import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  carrito: any[]=[];
  total=0;
  estado = 0;
  constructor() { }
}
