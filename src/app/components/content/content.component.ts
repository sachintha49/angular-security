import { Component } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MenuService} from "../../service/menu.service";
import {MatList, MatListItem} from "@angular/material/list";
import {RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";
import {MatIcon} from "@angular/material/icon";
import {MatLine} from "@angular/material/core";

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [MatSidenavModule, MatList, RouterLinkActive, MatListItem, MatIcon, RouterOutlet, MatLine, RouterLink],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss'
})
export class ContentComponent {
  opened = true;

  constructor(private menuService : MenuService) {
    this.menuService.isOpened.subscribe(data => {
      this.opened = data;
    })
  }
}
