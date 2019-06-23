import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './component/user/user.component';
import { AboutusComponent } from './component/aboutus/aboutus.component';
import { FormsModule} from '@angular/forms';            //NUENG ADDED TO LINK 2 COMPONENTS
import { ProfileComponent } from './component/profile/profile.component';    
import { TodoService} from './services/todo.service';    //NUENG ADDED AFTER CREATED SERVICE
import { HttpModule} from '@angular/http'; //ADD FOR API
import { RouterModule,Route, Routes} from '@angular/router';    //ADD FOR MENU

const appRouter:Routes = [
{path:"",component:UserComponent},
{path:"about",component:AboutusComponent}

]

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AboutusComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRouter)  //ADD FOR MENU

  ],
  providers: [TodoService],   //NUENG ADDED AFTER CREATED SERVICE
  bootstrap: [AppComponent]
})
export class AppModule { }
