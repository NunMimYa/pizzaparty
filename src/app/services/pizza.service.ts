import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pizza } from '../pizza';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {

    constructor(private http:HttpClient) { }

    // getPizzas(): Promise<any> {
    getPizzas(): Promise<Pizza[]> {

      // return this.http.get('https://jsonplaceholder.typicode.com/todos').toPromise();
      // fetch('https://jsonplaceholder.typicode.com/todos')
      // this.http.get('https://jsonplaceholder.typicode.com/todos').toPromise()
      // .then(function (response) {
      //   console.log(response);
      // });
      // return this.http.get('https://jsonplaceholder.typicode.com/todos').toPromise();
      // return this.http.get('http://localhost:3000/pizzas').toPromise();
      return this.http.get<Pizza[]>('http://localhost:3000/pizzas').toPromise();
     }
}
