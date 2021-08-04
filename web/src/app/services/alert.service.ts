import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(
    private alertController: AlertController,
  ) { }
  
  async simpleAlert(msg) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Informação: ',
      subHeader: 'Subtitle',
      message: msg,
      buttons: ['OK']
    });

    await alert.present();
  }

  async editAlert(header:string, msg:string, buttons: any){
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: header,
      message: msg,
      buttons: buttons
    });

    await alert.present();
  }
}
