import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController, MenuController, NavController } from '@ionic/angular';
import { AlertService } from 'src/app/services/alert.service';

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
    private menuController: MenuController,
    private alertService: AlertService
  ) {
    
    this.formGroup = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      senha : ['', [Validators.required]],    
    });
   }

  ngOnInit() {
    this.menuController.enable(false);
  }

  async handleCad() {
    this.alertService.editAlert(
      "Informação", 
      "Deseja criar qual conta?", 
      [
        {
          text: 'Agricultor',
          handler: () => {
            this.navCtroller.navigateRoot("cadagro");
          }
        },
        {
          text: 'Professor',
          handler: () => {
            this.navCtroller.navigateRoot("cadprof");
          }
        }
      ]
    )
  }
}
