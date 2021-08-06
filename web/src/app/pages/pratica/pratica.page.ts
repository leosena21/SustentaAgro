import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { praticaDTO } from 'src/app/models/pratica.dto';
import { AlertService } from 'src/app/services/alert.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-pratica',
  templateUrl: './pratica.page.html',
  styleUrls: ['./pratica.page.scss'],
})
export class PraticaPage implements OnInit {

  pratica: praticaDTO;

  constructor(
    private route: ActivatedRoute,
    private navCtl: NavController,
    private storageService: StorageService,
    private alertService: AlertService,
  ) {
    this.route.queryParams.subscribe(params => {
      this.pratica = params["pratica"];
  });
   }

  ngOnInit() {
  }

  handleSave(){
    let realizados = this.storageService.getRealizado();
    let atual = realizados==null ? [] : realizados;
    atual.push({
      avaliado: false,
      pratica: this.pratica,
      alunos: [],
      conformidade: null,
      dt_realizado: null,
      motivo: null,
      pontuacao: null,
      professor: null,
      agricultor: this.storageService.getUsuarioEmail()
    });
    
    this.alertService.editAlert(
      "Informação: ", 
      "Você está ciente que ao continuar uma equipe irá validar a execução dessa prática?", 
      [
        {
          text: 'Sim',
          handler: () => {
            this.storageService.setRealizado(atual);
            this.alertService.simpleAlert("Prática salva com sucesso");
            this.navCtl.navigateRoot("dashagro");
          }
        },
        {
          text: 'Não',
          handler: () => {
          }
        }
      ]
    )
  }
}
