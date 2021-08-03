import { Component, Input, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  @Input() title: string;
  @Input() showMenuButton: boolean;

  constructor(
    private menuController: MenuController
  ) { }

  ngOnInit() {}

  handleMenu(){
    this.menuController.isOpen("main-content").then(response => {
      if(response){
        this.menuController.close();
      }
      else{
        this.menuController.open();
      }
    })
  }

}
