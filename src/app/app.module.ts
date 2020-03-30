import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TileComponent } from './tile/tile.component';
import { LoginComponent } from './login/login.component';
import   {FormsModule} from '@angular/forms';
import { StatusPipe } from './status.pipe';
import { MytileComponent } from './mytile/mytile.component'
import { HttpClientModule } from '@angular/common/http';
import { StarComponent } from './star/star.component';
import {RouterModule,Routes} from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { TileDetailComponent } from './tile-detail/tile-detail.component';
import {ActivatedRoute} from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { ThankyouComponent } from './thankyou/thankyou.component';

const appRoutes : Routes =  [
 
  {path:"login", component : LoginComponent},
  {path:"register", component : RegisterComponent},
  {path:'tiles',component:TileComponent},
  {path:"tiles/:Id",component:TileDetailComponent},
  {path:"welcome",component:WelcomeComponent},
  {path:"thankyou",component:ThankyouComponent},
  {path:"",pathMatch: 'prefix', redirectTo:"login"},
  {path:"**", redirectTo:"login"}
 ];
 
@NgModule({
  declarations: [
    AppComponent,
    TileComponent,
    LoginComponent,
    StatusPipe,
    MytileComponent,
    StarComponent,
    WelcomeComponent,
    TileDetailComponent,
    RegisterComponent,
    ThankyouComponent   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),ReactiveFormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
