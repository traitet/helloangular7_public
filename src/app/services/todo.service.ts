import { Injectable } from '@angular/core';     
import { Http} from '@angular/http';
import { map, take } from 'rxjs/operators';
//npm install rxjs@latest --save				//API ( function get)
//npm install @angular/http@latest			//API 



@Injectable({         //INJECABLE : ALL CLASS CAN CALL
  providedIn: 'root'
})
export class TodoService {

  constructor(private http:Http) { 


  }

  getTodoList() {

     return this.http.get("https://jsonplaceholder.typicode.com/todos").pipe(map((res)=>res.json()))    //change code
     
  }



}
