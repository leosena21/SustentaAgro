import { Component, OnInit } from '@angular/core';
import { NavigationExtras } from '@angular/router';
import { NavController } from '@ionic/angular';
import { ColumnMode } from '@swimlane/ngx-datatable';
import { praticaDTO } from 'src/app/models/pratica.dto';
import { realizadoDTO } from 'src/app/models/realizado.dto';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-dashprof',
  templateUrl: './dashprof.page.html',
  styleUrls: ['./dashprof.page.scss'],
})
export class DashprofPage implements OnInit {

  realizados: realizadoDTO[] = [];
  columns = [{ prop: 'agricultor.nome', name: "Agricultor: " }, { prop: 'agricultor.endereco', name:"Endereco: " }, {prop: 'pratica.nome', name:"Prática realizada: "}];
  ColumnMode = ColumnMode;
  selected = [];

  constructor(
    private storageService: StorageService,
    public navCtrl: NavController,

  ) { }

  ngOnInit() {
  }

  ionViewDidEnter(){
    this.realizados = [];
    let realizados = this.storageService.getRealizado();
    realizados.forEach(element => {
      if(element.avaliado==false){
        this.realizados.push(element);
      }
    });
  }

  onSelect({ selected }) {
    console.log('Select Event', selected, this.selected);
  }

  onActivate(event) {
    console.log(event.row)
    let navigationExtras: NavigationExtras = {
      queryParams: {
          realizado: event.row
      }
    };
    this.navCtrl.navigateForward("finalizar", navigationExtras);
  }

}
