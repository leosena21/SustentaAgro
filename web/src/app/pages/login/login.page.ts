import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MenuController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formGroup: FormGroup;


  constructor(
    private navCtroller: NavController,
    private formBuilder: FormBuilder,
    private menuController: MenuController
  ) {
    
    this.formGroup = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      senha : ['', [Validators.required]],    
    });
   }

  ngOnInit() {
    this.menuController.enable(false);
  }

  handleLogin(){
    console.log(this.formGroup);
    // this.navCtroller.navigateRoot("cadagro");
  }
}
