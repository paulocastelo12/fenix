import { Component, OnInit } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { SidebarService } from 'src/app/shared/services/sidebar.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  bars = faBars;

  isOpended: boolean = true;
  isShowing = false;

  constructor(private sidebarService :SidebarService) { }

  ngOnInit(): void {
  }

  changeIsOpen(){
    this.sidebarService.openSideBar();
  }


}
