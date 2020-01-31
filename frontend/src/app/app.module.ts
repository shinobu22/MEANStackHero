import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { LoginComponent } from './components/member/login/login.component';
import { RegisterComponent } from './components/member/register/register.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { MenuComponent } from './components/shared/menu/menu.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { StockCreateComponent } from './components/stock/stock-create/stock-create.component';
import { StockEditComponent } from './components/stock/stock-edit/stock-edit.component';
import { StockHomeComponent } from './components/stock/stock-home/stock-home.component';
import { JWTInterceptor } from './services/jwt.interceptor';
import { ShopHomeComponent } from './components/shop/shop-home/shop-home.component';
import { ShopPaymentComponent } from './components/shop/shop-payment/shop-payment.component';
import { GraphHomeComponent } from './components/graph/graph-home/graph-home.component';
import { UserHomeComponent } from './components/user/user-home/user-home.component';
import { ReportHomeComponent } from './components/report/report-home/report-home.component';
import { CustomPipe } from './pipes/custom.pipe';
import { TransactionHomeComponent } from './components/transaction/transaction-home/transaction-home.component';
import { ChartComponent } from './components/chart/chart.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    MenuComponent,
    FooterComponent,
    StockCreateComponent,
    StockEditComponent,
    StockHomeComponent,
    ShopHomeComponent,
    ShopPaymentComponent,
    GraphHomeComponent,
    UserHomeComponent,
    ReportHomeComponent,
    CustomPipe,
    TransactionHomeComponent,
    ChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JWTInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
