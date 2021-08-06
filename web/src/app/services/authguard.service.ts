import { Injectable } from '@angular/core';
import { NavController } from '@ionic/angular';
import { isNullOrUndefined } from '@swimlane/ngx-datatable';
import { AlertService } from './alert.service';
import { StorageService } from './storage.service';

@Injectable()
export class AuthService {
  constructor(
    private storageService: StorageService,
    private navCtrl: NavController,
    private alertService: AlertService,
  ) {}
  // ...
  canActivate(): boolean {
    const email = this.storageService.getUsuarioEmail();

    if(isNullOrUndefined(email)){
      this.alertService.simpleAlert("Realizar login antes de continuar");
      this.navCtrl.navigateRoot("login");
      return false;
    }

    return true;
  }
}