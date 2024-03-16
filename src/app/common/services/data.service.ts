import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  isMobile(): boolean{
    return window.innerWidth < 768;
  }
  getFirstLetter(name: string): string{
    if(!name || name.trim().length === 0){
      return '';
    }
    return name.trim().charAt(0).toUpperCase();
  }
}
