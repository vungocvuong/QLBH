import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductComponent } from './product/product.component';
import { SaleInvoiceComponent } from './sale-invoice/sale-invoice.component';
import { PurchaseInvoiceComponent } from './purchase-invoice/purchase-invoice.component';
import { CustomerComponent } from './customer/customer.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'product', component: ProductComponent },
  { path: 'sale-invoice', component: SaleInvoiceComponent },
  { path: 'purchase-invoice', component: PurchaseInvoiceComponent },
  { path: 'customer', component: CustomerComponent },
  { path: 'user', component: UserComponent },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
