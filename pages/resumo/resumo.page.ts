import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ColumnMode } from '@swimlane/ngx-datatable';
import { realizadoDTO } from 'src/app/models/realizado.dto';
import { AlertService } from 'src/app/services/alert.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-resumo',
  templateUrl: './resumo.page.html',
  styleUrls: ['./resumo.page.scss'],
})
export class ResumoPage implements OnInit {

  realizados: realizadoDTO[] = [];
  columns = [
    { prop: 'pratica.nome', name: "Prática: " }, 
    { prop: 'dt_realizado', name:"Data da visita: " }, 
    { prop: 'pontuacao', name:"Pontuação: "},
    { prop: 'motivo', name:"Motivo: "}
  ];
  ColumnMode = ColumnMode;
  selected = [];

  constructor(
    private storageService: StorageService,
    public navCtrl: NavController,
    public alertService: AlertService,

  ) { }

  ngOnInit() {
  }

  ionViewDidEnter(){
    this.realizados = [];
    let realizados = this.storageService.getRealizado().filter(rl => rl.agricultor.email == this.storageService.getUsuarioEmail());
    realizados.forEach(element => {
      if(element.avaliado){
        this.realizados.push(element);
      }
    });

    if(this.realizados.length<=0){
      this.alertService.simpleAlert("Não há pratícas realizadas e aprovadas.");
      this.navCtrl.navigateRoot("dashagro");
    }
  }

}
