import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MenuController, NavController } from '@ionic/angular';
import { agroDTO } from 'src/app/models/agro.dto';
import { AlertService } from 'src/app/services/alert.service';
import { StorageService } from 'src/app/services/storage.service';

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
    private alertService: AlertService,
    private storageService: StorageService,
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

  handleCad(){
    let usuario = this.formGroup.value as agroDTO;
    usuario.pontuacao = 0;
    let agros = this.storageService.getAgro()==null ? [] : this.storageService.getAgro();
    let profs = this.storageService.getProfessor()==null ? [] : this.storageService.getProfessor();
    if(agros.find(agro => agro.email==this.formGroup.value.email)==null && profs.find(prof => prof.email==this.formGroup.value.email)==null){
      agros.push(usuario);
      this.storageService.setAgro(agros);
      this.alertService.simpleAlert("Cadastro realizado com sucesso");
      this.navCtroller.navigateRoot("login");
    }
    else{
      this.alertService.simpleAlert("Já existe um professor ou um agricultor cadastrado com esse email");
    }
  }

}
