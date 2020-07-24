import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { CartComponent } from './components/cart/cart.component';
import { GoodsComponent } from './components/goods/goods.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import{AuthGuard} from './services/guards/auth.guard';
import { from } from 'rxjs';

const routes: Routes = [
  { path: '', component: HomeComponent,data:{index:0} },
  { path: 'login', component: LoginComponent,data:{index:3} },
  { path: 'signup', component: SignupComponent ,data:{index:4}},
  { path: 'cart', component: CartComponent, canActivate:[AuthGuard] ,data:{index:1}},
  { path: 'goods', component: GoodsComponent,data:{index:2} },
  { path: '**', component:  NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
