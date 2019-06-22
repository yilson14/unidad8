import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http'; 
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: Http) { }

  login(){
    return this.http.get("https://angular-f94fd.firebaseio.com/.json").pipe(map((res: Response)=> res.json()));
  }
}
