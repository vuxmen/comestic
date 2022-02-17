import { Component, OnInit, HostListener, Input } from '@angular/core';

enum INavigationDomain {
  HOME = "Home",
  PRODUCT = "Product",
  PROMO = "Promo",
  ABOUT = "About",
  CONTACT = "Contact"
}

@Component({
  selector: 'navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  domains: INavigationDomain[]= [
    INavigationDomain.HOME,
    INavigationDomain.PRODUCT,
    INavigationDomain.PROMO,
    INavigationDomain.ABOUT,
    INavigationDomain.CONTACT
  ];
  innerWidth: any
  @Input() display!: boolean

  constructor() {
  }

  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
  }
}
