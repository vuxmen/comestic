import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {faBars} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'mobile-bar',
  templateUrl: './mobile-bar.component.html',
  styleUrls: ['./mobile-bar.component.scss']
})
export class MobileBarComponent implements OnInit {
  faBars = faBars;

  @Input() navigationDisplay!: boolean
  @Output() toggleNavBarEvent = new EventEmitter<boolean>()

  constructor() { }
  ngOnInit(): void {

  }

  _toggleNavbar() {
    this.toggleNavBarEvent.emit(!this.navigationDisplay)
  }

}
