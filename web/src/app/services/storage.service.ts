import { Injectable } from '@angular/core';
import { STORAGE_KEYS } from '../config/storage_keys.config';
import { agroDTO } from '../models/agro.dto';
import { praticaDTO } from '../models/pratica.dto';
import { professorDTO } from '../models/professor.dto';
import { realizadoDTO } from '../models/realizado.dto';

@Injectable({
  providedIn: 'root',
})
export class StorageService{
  
  getAgro() : agroDTO[]{
    let usr = localStorage.getItem(STORAGE_KEYS.agro);
    if(usr == null){
      return null;
    }
    else{
      return JSON.parse(usr);
    }
  }

  setAgro(obj : agroDTO[]){
    if(obj == null){
      localStorage.removeItem(STORAGE_KEYS.agro);
    }
    else{
      localStorage.setItem(STORAGE_KEYS.agro, JSON.stringify(obj));
    }
  }
  
  getProfessor() : professorDTO[]{
    let usr = localStorage.getItem(STORAGE_KEYS.professor);
    if(usr == null){
      return null;
    }
    else{
      return JSON.parse(usr);
    }
  }

  setProfessor(obj : professorDTO[]){
    if(obj == null){
      localStorage.removeItem(STORAGE_KEYS.professor);
    }
    else{
      localStorage.setItem(STORAGE_KEYS.professor, JSON.stringify(obj));
    }
  }

  getPratica() : praticaDTO[]{
    let str = localStorage.getItem(STORAGE_KEYS.pratica);
    if(str == null){
      return null;
    }
    else{
      return JSON.parse(str);
    }
  }

  setPratica(obj : praticaDTO[]){
    if(obj == null){
      localStorage.removeItem(STORAGE_KEYS.pratica);
    }
    else{
      localStorage.setItem(STORAGE_KEYS.pratica, JSON.stringify(obj));
    }
  }

  getRealizado() : realizadoDTO[]{
    let str = localStorage.getItem(STORAGE_KEYS.realizado);
    if(str == null){
      return null;
    }
    else{
      return JSON.parse(str);
    }
  }

  setRealizado(obj : realizadoDTO[]){
    if(obj == null){
      localStorage.removeItem(STORAGE_KEYS.realizado);
    }
    else{
      localStorage.setItem(STORAGE_KEYS.realizado, JSON.stringify(obj));
    }
  }

  getUsuarioEmail() : string{
    let str = localStorage.getItem(STORAGE_KEYS.usuarioEmail);
    if(str == null){
      return null;
    }
    else{
      return str;
    }
  }

  setUsuarioEmail(obj : string){
    if(obj == null){
      localStorage.removeItem(STORAGE_KEYS.usuarioEmail);
    }
    else{
      localStorage.setItem(STORAGE_KEYS.usuarioEmail, obj);
    }
  }

}