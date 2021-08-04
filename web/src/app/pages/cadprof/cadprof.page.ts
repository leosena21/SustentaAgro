import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MenuController, NavController } from '@ionic/angular';
import { professorDTO } from 'src/app/models/professor.dto';
import { AlertService } from 'src/app/services/alert.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-cadprof',
  templateUrl: './cadprof.page.html',
  styleUrls: ['./cadprof.page.scss'],
})
export class CadprofPage implements OnInit {

  formGroup: FormGroup;


  constructor(
    private navCtroller: NavController,
    private formBuilder: FormBuilder,
    private menuController: MenuController,
    private alertService: AlertService,
    private storageService: StorageService,
  ) {
    
    this.formGroup = this.formBuilder.group({
      nome: ['', [Validators.required]],
      cpf: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required]],    
    });
   }

  ngOnInit() {
    this.menuController.enable(false);
  }

  handleCad(){
    let usuario = this.formGroup.value as professorDTO;
    let agros = this.storageService.getAgro();
    let profs = this.storageService.getProfessor()==null ? [] : this.storageService.getProfessor();
    if(agros.find(agro => agro.email==this.formGroup.value.email)==null && profs.find(prof => prof.email==this.formGroup.value.email)==null){
      profs.push(usuario);
      this.storageService.setProfessor(profs);
      this.alertService.simpleAlert("Cadastro realizado com sucesso");
      this.navCtroller.navigateRoot("login");
    }
    else{
      this.alertService.simpleAlert("Já existe um agricultor ou um professor cadastrado com esse email");
    }
  }

}
