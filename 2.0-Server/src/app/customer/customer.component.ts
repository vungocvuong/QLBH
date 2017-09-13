import { Component, OnInit } from '@angular/core';
import { Customer, FacebookInfo } from './customer.model';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {
  customers: Array<Customer> = [];
  constructor() { }

  ngOnInit() {
    for (var i = 0; i < 5; i++) {
      var cus = new Customer();
      cus.id = i.toString();
      cus.name = "Dang Thu Trang";
      cus.address = "Số 72A Nguyễn Trãi, P. Thượng Đình, Q. Thanh Xuân, Tp. Hà Nội";
      cus.phone = "0967245018";
      cus.customerType = "Kim cuong";
      cus.lastBought = Date.now();
      cus.facebook = new FacebookInfo(
        "Vu Ngoc Vuong",
        "https://scontent.fhan3-1.fna.fbcdn.net/v/t1.0-1/p160x160/17759930_1880925222123674_8462300566271354203_n.jpg?oh=80aff32da05c057650758e4cae9e9a29&oe=5A14C074",
        "1",
        "1"
       );
      this.customers.push(cus);
    }
  }
}
