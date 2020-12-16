import { Component, OnInit } from '@angular/core';
import { Pizza } from '../pizza';
import { PizzaService } from '../services/pizza.service';

@Component({
  selector: 'app-pizza-list',
  templateUrl: './pizza-list.component.html',
  styleUrls: ['./pizza-list.component.scss']
})
export class PizzaListComponent implements OnInit {
  maSuperPizza: Pizza;

  mesPizzas: Pizza[];

  // On peut créer une fonction / une méthode
  onSelect(pizza: Pizza){
    // console.log('ça marche');
    // console.log(this);
    // console.log(pizza.name + ' ' + pizza.price + ' $');
    this.maSuperPizza = pizza;
    // console.log(this.mesPizzas.name);
  }

  constructor(private pizzaService: PizzaService) { }

  ngOnInit(): void {
     // console.log(this.pizzaService.getPizzas());
     // ici, on touche au DOM
    //  let self = this;
    //  this.pizzaService.getPizzas().then(function (pizzas) {
    //   //  console.log(pizzas);
    //   // this.mesPizzas = pizzas;
    //   self.mesPizzas = pizzas;
    //   console.log(self);
    //  });
     this.pizzaService.getPizzas().then(pizzas => {
       this.mesPizzas = pizzas;
     });
  }
}
