import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { VariablenService } from '../../../services/variablen.service';
import { MenuPopupComponent } from "./menu-popup/menu-popup.component";


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, MenuPopupComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  logo: string = '/images/logo/logo-adrian.png';
  logo_transparent: string = '/images/logo/logo-adrian-hover.png';

  logo_init: string = '/images/logo/logo-adrian-init.png';
  logo_init_transparent: string = '/images/logo/logo-adrian-init-hover.png';

  menu_icon: string = '/images/menu_icons/menu.png';
  menu_icon_hover: string = '/images/menu_icons/menu-hover.png';

  hover_logo: boolean = true;
  hover_logo_init: boolean = true;
  hover_menu_icon: boolean = true;

  language: boolean = true;

  @Input() openMenu: boolean = false;

  constructor(private service: VariablenService) { }

  ngOnInit() {
    this.service.currentLanguage.subscribe(language => {
      this.language = language;
    });
  }

  changelanguage(language: string) {
    if (language === 'de') {
      this.service.changeLanguage(false);
    } else if (language === 'en') {
      this.service.changeLanguage(true);
    }
  }

  openMenuPopup() {
    this.openMenu = true;
    this.hover_menu_icon = true;
  }

  reloadPage() {
    window.location.href = '/';
  }

}
