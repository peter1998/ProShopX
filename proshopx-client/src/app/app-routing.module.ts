import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { CryptoCurrencyListComponent } from './crypto-currency-list/crypto-currency-list.component';
import { CryptoCurrencyDetailComponent } from './crypto-currency-detail/crypto-currency-detail.component';
import { InternetOfThingsComponent } from './internet-of-things/internet-of-things.component';
import { CyberSecurityComponent } from './cyber-security/cyber-security.component';
import { CartPageComponent } from './cart-page/cart-page.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'cryptocurrency', component: CryptoCurrencyListComponent },
  { path: 'cryptocurrency/:id', component: CryptoCurrencyDetailComponent },
  { path: 'iot', component: InternetOfThingsComponent },
  { path: 'cybersecurity', component: CyberSecurityComponent },
  { path: 'watchlist', component: CartPageComponent },
  // other routes...
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
