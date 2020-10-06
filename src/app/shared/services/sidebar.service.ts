import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  isOpen = true;
  isShow = false;

  emitirActionSide = new EventEmitter<boolean>();

  constructor() { }

  openSideBar(){
    this.isOpen = !this.isOpen;
    this.emitirActionSide.emit(this.isOpen)
    //console.log(this.isOpen);
  }

  mouseen() {
    if (!this.isOpen) {
      this.isShow = true;
      this.emitirActionSide.emit(this.isShow)
    }
  }

  mouselea() {
    if (!this.isOpen) {
      this.isShow = false;
      this.emitirActionSide.emit(this.isShow)
    }
  }
}

