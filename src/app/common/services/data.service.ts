import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private isImageLoaded = new Subject<boolean>();

  constructor() { }

  isMobile(): boolean {
    return window.innerWidth < 768;
  }
  getFirstLetter(name: string): string {
    if (!name || name.trim().length === 0) {
      return '';
    }
    return name.trim().charAt(0).toUpperCase();
  }

  setImageLoad(isLoaded: boolean) {
    this.isImageLoaded.next(isLoaded);
  }

  getImageLoad() {
    return this.isImageLoaded.asObservable();
  }

}
