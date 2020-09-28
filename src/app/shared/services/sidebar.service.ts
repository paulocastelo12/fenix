import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  isOpen = true;

  emitirActionSide = new EventEmitter<boolean>();

  constructor() { }

  openSideBar(){
    this.isOpen = !this.isOpen;
    this.emitirActionSide.emit(this.isOpen)
    //console.log(this.isOpen);
  }
}

