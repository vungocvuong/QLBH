import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: 'dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
    { path: 'product', title: 'Sản Phẩm',  icon:'shopping_basket', class: '' },
    { path: 'sale-invoice', title: 'Hoá Đơn Bán',  icon:'content_paste', class: '' },
    { path: 'purchase-invoice', title: 'Hoá Đơn Nhập',  icon:'content_paste', class: '' },
    { path: 'customer', title: 'Khách Hàng',  icon:'people', class: '' },
    { path: 'user', title: 'Người Dùng',  icon:'person', class: '' }
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
