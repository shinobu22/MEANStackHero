import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/member/login/login.component';
import { RegisterComponent } from './components/member/register/register.component';
import { StockHomeComponent } from './components/stock/stock-home/stock-home.component';
import { StockCreateComponent } from './components/stock/stock-create/stock-create.component';
import { StockEditComponent } from './components/stock/stock-edit/stock-edit.component';
import { AuthGuard } from './services/auth.guard';
import { ShopHomeComponent } from './components/shop/shop-home/shop-home.component';
import { ReportHomeComponent } from './components/report/report-home/report-home.component';
import { UserHomeComponent } from './components/user/user-home/user-home.component';
import { GraphHomeComponent } from './components/graph/graph-home/graph-home.component';
import { TransactionHomeComponent } from './components/transaction/transaction-home/transaction-home.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: 'stock',
    children: [
      { path: '', component: StockHomeComponent },
      { path: 'create', component: StockCreateComponent },
      { path: 'edit/:id', component: StockEditComponent },
    ], canActivate: [AuthGuard]
  },
  { path: 'orders', component: TransactionHomeComponent, canActivate: [AuthGuard]},
  { path: 'chart', component: TransactionHomeComponent, canActivate: [AuthGuard]},
  { path: 'report', component: ReportHomeComponent, canActivate: [AuthGuard]},
  { path: 'user', component: UserHomeComponent, canActivate: [AuthGuard]},
  { path: 'graph', component: GraphHomeComponent, canActivate: [AuthGuard]},
  { path: 'shop', component: ShopHomeComponent, canActivate: [AuthGuard]},
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
