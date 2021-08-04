import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MenuController, NavController } from '@ionic/angular';
import { AlertService } from 'src/app/services/alert.service';

@Component({
  selector: 'app-cadagro',
  templateUrl: './cadagro.page.html',
  styleUrls: ['./cadagro.page.scss'],
})
export class CadagroPage implements OnInit {

  formGroup: FormGroup;


  constructor(
    private navCtroller: NavController,
    private formBuilder: FormBuilder,
    private menuController: MenuController,
    private alertService: AlertService
  ) {
    
    this.formGroup = this.formBuilder.group({
      nome: ['', [Validators.required]],
      cpf: ['', [Validators.required]],
      endereco: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required]],    
    });
   }

  ngOnInit() {
    this.menuController.enable(false);
  }

}
