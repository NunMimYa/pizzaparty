import { Component } from '@angular/core';
import { Pizza } from './pizza';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Pizza Party';
  // name = '4 Fromages';


  // maSuperPizza: Pizza = {
  // id:1,
  //   name: '4 Fromages',
  //   price: 12, 
  //   image: '4-fromages.jpg'
  // };
}
