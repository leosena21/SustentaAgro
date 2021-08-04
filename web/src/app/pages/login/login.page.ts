import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MenuController, NavController } from '@ionic/angular';
import { agroDTO } from 'src/app/models/agro.dto';
import { AlertService } from 'src/app/services/alert.service';
import { StorageService } from 'src/app/services/storage.service';

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
    private alertService: AlertService,
    private storageService: StorageService,

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

  handleLogin(){
    let usuario = this.storageService.getAgro().find(usr => usr.email==this.formGroup.value.email);
    if(usuario!=null){
      if(usuario.email==this.formGroup.value.email && usuario.senha==this.formGroup.value.senha){
        this.alertService.simpleAlert("Login realizado");
      }
      else{
        this.alertService.simpleAlert("Email ou senha incorretos");
      }
    }
    else{
      let professor = this.storageService.getProfessor().find(usr => usr.email==this.formGroup.value.email);
      if(professor!=null){
        if(professor.email==this.formGroup.value.email && professor.senha==this.formGroup.value.senha){
          this.alertService.simpleAlert("Login realizado");
        }
        else{
          this.alertService.simpleAlert("Email ou senha incorretos");
        }
      }
      else{
        this.alertService.simpleAlert("Usuario não encontrado");
      }
    }
  }
}
