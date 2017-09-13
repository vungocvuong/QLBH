import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductComponent } from './product/product.component';
import { SaleInvoiceComponent } from './sale-invoice/sale-invoice.component';
import { PurchaseInvoiceComponent } from './purchase-invoice/purchase-invoice.component';
import { UserComponent } from './user/user.component';

import { CustomerComponent } from './customer/customer.component';
import { CustomerDetailComponent } from './customer/customer-detail/customer-detail.component';


const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'product', component: ProductComponent },
  { path: 'sale-invoice', component: SaleInvoiceComponent },
  { path: 'purchase-invoice', component: PurchaseInvoiceComponent },
  { path: 'user', component: UserComponent },

  { path: 'customer', component: CustomerComponent },
  { path: 'customer/:id', component: CustomerDetailComponent }
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
