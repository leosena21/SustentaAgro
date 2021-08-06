import { Component, OnInit } from '@angular/core';
import { NavigationExtras } from '@angular/router';
import { NavController } from '@ionic/angular';
import { ColumnMode } from '@swimlane/ngx-datatable';
import { praticaDTO } from 'src/app/models/pratica.dto';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-dashagro',
  templateUrl: './dashagro.page.html',
  styleUrls: ['./dashagro.page.scss'],
})
export class DashagroPage implements OnInit {

  prticas: praticaDTO[] = [];
  columns = [{ prop: 'nome' }, { name: 'Descricao' }];
  ColumnMode = ColumnMode;
  selected = [];
  pontos = 0;


  constructor(
    public navCtrl: NavController,
    public storageService: StorageService,
  ) {
    this.gerarPratica();
   }

  ngOnInit() {
  }

  ionViewDidEnter(){
    this.pontos = 0;
    this.storageService.getRealizado().filter(realizado => realizado.agricultor.email==this.storageService.getUsuarioEmail()).forEach(element => {
      if(element.avaliado){
        this.pontos = this.pontos + Number.parseInt(element.pontuacao);
      }
    })

  }

  gerarPratica(){
    this.prticas.push({
      nome: "Plantio direto",
      descricao: "descrição", 
      url:"https://blog.livup.com.br/wp-content/uploads/2019/01/consumo-sustentavel.jpg",
      passos: [
        {
          id:1,
          nome: "Colheita abc",
          descricao: "descricao pratica",
          isChecked: false
        },
        {
          id:2,
          nome: "passo2 abc",
          descricao: "descricao pratica2",
          isChecked: false
        }
      ]
    });
    this.prticas.push({
      nome: "Descarte de embalagem de agroquimico",
      descricao: "descrição", 
      url:"https://blog.livup.com.br/wp-content/uploads/2019/01/consumo-sustentavel.jpg",
      passos: [
        {
          id:1,
          nome: "Descarte abc",
          descricao: "descricao Descarte",
          isChecked: false
        },
        {
          id:2,
          nome: "Descarte2 abc",
          descricao: "descricao Descarte2",
          isChecked: false
        }
      ]
    });
  }

  onSelect({ selected }) {
    console.log('Select Event', selected, this.selected);
  }

  onActivate(event) {
    console.log(event.row)
    let navigationExtras: NavigationExtras = {
      queryParams: {
          pratica: event.row
      }
    };
    this.navCtrl.navigateForward("pratica", navigationExtras);
  }

}
