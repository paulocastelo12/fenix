import { Component, OnInit } from '@angular/core';
import { SidebarService } from 'src/app/shared/services/sidebar.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor(private sidebarService: SidebarService) { }

  isOpended: boolean = true;

  ngOnInit(): void {
    this.sidebarService.emitirActionSide.subscribe(
      isOpenBar => this.isOpended = isOpenBar
    );
  }

}
