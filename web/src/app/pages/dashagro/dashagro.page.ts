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
  columns = [{ prop: 'nome', width: 250 }, { name: 'Descricao', width: 650 }];
  ColumnMode = ColumnMode;
  selected = [];
  pontos = 0;


  constructor(
    public navCtrl: NavController,
    public storageService: StorageService,
  ) {
    this.gerarPratica();
    this.storageService.setPratica([]);
    this.storageService.setPratica(this.prticas);
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
      descricao: "Neste sistema o plantio é realizado sem que haja aração ou gradagem prévia do solo, sendo a semente colocada no solo não revolvido e o plantio realizado por plantadeiras que abrem um pequeno sulco de profundidade e largura suficientes para garantir boa cobertura e contato da semente com o solo, permitindo a germinação da mesma. - EMBRAPA", 
      url:"https://blogs.canalrural.com.br/embrapasoja/wp-content/uploads/sites/32/2016/11/HDRRR0001_20091221_0546.jpg",
      passos: [
        {
          id:1,
          nome: "Colheita e distribuição dos restos da cultura antecessora para formação da palhada;",
          descricao: "descricao pratica",
          isChecked: false
        },
        {
          id:2,
          nome: "Não realizou Gradagem ou aração do solo.",
          descricao: "descricao pratica2",
          isChecked: false
        }
      ]
    });
    this.prticas.push({
      nome: "Descarte de embalagem de agroquimico",
      descricao: "É a correta destinação final às embalagens vazias dos agrotóxicos utilizados na agricultura. - EMBRAPA", 
      url:"https://i1.wp.com/blog.aegro.com.br/wp-content/uploads/2020/11/descarte-de-embalagem-de-agrotoxicos.jpg",
      passos: [
        {
          id:1,
          nome: "Tríplice lavagem ou lavagem de alta pressão;",
          descricao: "descricao Descarte",
          isChecked: false
        },
        {
          id:2,
          nome: "Inutilizar as embalagens e entregar a uma unidade de recebimento.",
          descricao: "descricao Descarte2",
          isChecked: false
        }
      ]
    });
    this.prticas.push({
      nome: "Rotação de cultura",
      descricao: "É a alternância de culturas numa dada área agrícola. Procura-se com esta prática o melhor aproveitamento da fertilidade do solo pelo aprofundamento diferenciado das raízes, a melhoria da drenagem, a diversidade biológica e o controle de pragas e doenças. - EMBRAPA", 
      url:"https://irrigat.com.br/wp-content/uploads/esquema-de-rotacao-de-culturas.jpg",
      passos: [
        {
          id:1,
          nome: "Sucessão de culturas;",
          descricao: "descricao Descarte",
          isChecked: false
        },
        {
          id:2,
          nome: "Uso de leguminosas como adubo verde e cobertura de solo.",
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
