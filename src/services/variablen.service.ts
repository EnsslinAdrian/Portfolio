import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VariablenService {
  private languageSource = new BehaviorSubject<boolean>(true);
  currentLanguage = this.languageSource.asObservable();

  changeLanguage(language: boolean) {
    this.languageSource.next(language);
  }

  constructor() { }
}
