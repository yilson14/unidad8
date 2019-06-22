import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VermasService {

  imagen: string;
  nombre: string;
  precio: string;
  unidades: string; 
  
  constructor() { }
}
