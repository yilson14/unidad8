import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http'; 
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
subproducto: any[]=[];

  constructor(private http: Http) { }

  producto(){
    return this.http.get("https://producto-68071.firebaseio.com/.json").pipe(map((res: Response)=> res.json()));
  }
}
