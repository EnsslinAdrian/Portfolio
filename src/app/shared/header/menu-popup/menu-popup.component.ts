import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { VariablenService } from '../../../../services/variablen.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu-popup',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu-popup.component.html',
  styleUrl: './menu-popup.component.scss'
})
export class MenuPopupComponent implements OnInit {

  language: boolean = true

  menu_close_icon: string = '/images/menu_icons/close_small.png';
  menu_close_icon_hover: string = '/images/menu_icons/close-hover.png';

  hover_close_icon: boolean = true;

  @Input() openMenu: boolean = false;
  @Output() closeMenu = new EventEmitter<void>();
  @Output() languageChangeEvent = new EventEmitter<string>();

  constructor(private service: VariablenService) { }

  ngOnInit(): void {
    this.service.currentLanguage.subscribe(language => {
      this.language = language;
    })
  }

  closeMenuPopup() {
    this.openMenu = false;
    this.closeMenu.emit();
  }

  changelanguage(language: string) {
    this.languageChangeEvent.emit(language);
  }

}
