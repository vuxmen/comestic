import { Component, OnInit, HostListener } from '@angular/core';

enum IResponsive {
  breakPoint = 768
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  navigationDisplay: boolean = true
  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    const innerWidth = event.target.innerWidth;
    innerWidth < IResponsive.breakPoint
    ? this.navigationDisplay = false
    : this.navigationDisplay = true
  }

  receiveMessage($event: boolean) {
    this.navigationDisplay = $event
  }

}
