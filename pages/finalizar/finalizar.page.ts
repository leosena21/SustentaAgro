import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { isNullOrUndefined } from '@swimlane/ngx-datatable';
import { etapaDTO } from 'src/app/models/etapa.dto';
import { realizadoDTO } from 'src/app/models/realizado.dto';
import { AlertService } from 'src/app/services/alert.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-finalizar',
  templateUrl: './finalizar.page.html',
  styleUrls: ['./finalizar.page.scss'],
})
export class FinalizarPage implements OnInit {

  realizado: realizadoDTO;
  passos: etapaDTO[] = [];
  realizados: realizadoDTO[] = [];
  formGroup: FormGroup;
  isOk: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private navCtl: NavController,
    private storageService: StorageService,
    private alertService: AlertService,
    private formBuilder: FormBuilder,
    private cdRef: ChangeDetectorRef,

  ) {
      this.route.queryParams.subscribe(params => {
        this.realizado = params["realizado"];
        this.passos= this.realizado.pratica.passos.filter(pass => pass.isChecked==true);
      });

      this.formGroup = this.formBuilder.group({
        data: ['', [Validators.required]],
        isOk: [this.isOk, [Validators.required]],
        motivo: ['', []],
        aluno: ['', []],
        pontuacao: ['', [Validators.required]],   
      });
    }

  ngOnInit() {
  }

  changeValue(){
    this.isOk = !this.isOk;
    this.cdRef.detectChanges();
  }

  handleCad(){
    if(this.isOk && isNullOrUndefined(this.formGroup.value.motivo)){
      this.alertService.simpleAlert("Necessário informar o motivo");
    }
    else{
      this.realizados = [];
      this.realizados = this.storageService.getRealizado();
      this.realizados.splice(this.realizados.indexOf(this.realizado), 1);
      
      this.realizado.professor = this.storageService.getProfessor().find(prof => prof.email == this.storageService.getUsuarioEmail());
      this.realizado.conformidade = this.isOk;
      this.realizado.avaliado = true;
      this.realizado.dt_realizado = this.formGroup.value.data;
      this.realizado.motivo = isNullOrUndefined(this.formGroup.value.motivo)? "Em conformidade com as práticas sustentáveis" : this.formGroup.value.motivo;
      this.realizado.alunos.push(
        {
          nome: this.formGroup.value.aluno,
          cpf: "123.456.789-12",
          email: `${this.formGroup.value.aluno}@gmail.com`
        }
      );
      this.realizado.pontuacao = this.formGroup.value.pontuacao;
      
      this.realizados.push(this.realizado);
      this.storageService.setRealizado(this.realizados);
      this.alertService.simpleAlert("Informação salva com sucesso");
      if(this.realizado.alunos.length!=null && this.realizado.alunos.length>0){
        this.alertService.editAlert(
          "Informação: ", 
          `Para gerar o certificado do aluno ${this.realizado.alunos[0].nome} é necessário realizar o pagamento. Esse certificado contará como carga horária para ele. Deseja continuar?`,
          [
            {
              text: 'Sim',
              handler: () => {
                this.alertService.simpleAlert("Certificado gerado com sucesso");
                this.navCtl.navigateRoot("dashprof");
              }
            },
            {
              text: 'Não',
              handler: () => {
                this.navCtl.navigateRoot("dashprof");
              }
            }
          ]
        );
      }
      else{
        this.navCtl.navigateRoot("dashprof");
      }
    }
  
  }
  
}
