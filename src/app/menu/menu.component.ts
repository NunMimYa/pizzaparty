import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  isCollapsed = false;
  // @Input() navTitle;
  @Input() navTitle: string;
  @Input() color = 'light';

  changeTheme(){
    if (this.color === 'light'){
      this.color = 'dark';
    } else {
      this.color = 'light';
    }
  }

  toggleCollapseNavbar(){
    console.log('test');

    this.isCollapsed = !this.isCollapsed;

    // if (!this.isCollapsed){
    //   this.isCollapsed = true; 
    // }
    // else{
    //   this.isCollapsed = false; 
    // }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
