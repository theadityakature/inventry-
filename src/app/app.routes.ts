import { Routes } from '@angular/router';
import { Dashbord } from './pages/dashbord/dashbord';
// import { DashboardComponent } from './dashboard/dashboard.component';
// import { ShopComponent } from './shop/shop.component';
// import { PurchaseComponent } from './purchase/purchase.component';
// import { ProductsComponent } from './products/products.component';
// import { SettingsComponent } from './settings/settings.component';

export const routes: Routes = [
  { path: 'dashboard', component: Dashbord},
  { path: 'shop', component: Dashbord },
  { path: 'purchase', component: Dashbord },
  { path: 'products', component: Dashbord },
  { path: 'settings', component: Dashbord },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' } // default route
];
