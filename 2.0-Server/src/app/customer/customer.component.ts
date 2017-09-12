import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {
  customers: any[];

  constructor() { }

  ngOnInit() {
    this.customers = ["1", "2", "3", "4", "5"];
  }
}
