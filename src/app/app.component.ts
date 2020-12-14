import { Component } from '@angular/core';
import { Pizza } from './pizza';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Pizza Party';
  name = '4 Fromages';

  maSuperPizza: Pizza = {
    id:1,
    name: '4 Fromages',
    price: 12, 
    image: '4-fromages.jpg'
  };

  mesPizzas: Pizza[] = [
    {id:1, name:'Reine', price: 12, image:'reine.jpg'},
    {id:2, name:'4 fromages', price: 13, image:'4-fromages.jpg'},
    {id:3, name:'Orientale', price: 11, image:'orientale.jpg'},
    {id:4, name:'Cannibale', price: 9, image:'cannibale.jpg'},
  ];

  // On peut créer une fonction / une méthode
  onSelect(pizza: Pizza){
    // console.log('ça marche');
    // console.log(this);
    // console.log(pizza.name + ' ' + pizza.price + ' $');
    this.maSuperPizza = pizza;
    // console.log(this.mesPizzas.name);
  }

}
