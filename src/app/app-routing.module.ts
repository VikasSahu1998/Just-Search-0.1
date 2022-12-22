import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './categories/categories.component';
import { ComingSoonComponent } from './coming-soon/coming-soon.component';
import { HomeComponent } from './home/home.component';
import { AirTicketComponent } from './SideNavBar/air-ticket/air-ticket.component';
import { OnDemandServicesFilComponent } from './SideNavBar/on-demand-services-fil/on-demand-services-fil.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';


const routes: Routes = [
  { path: 'Home', component: HomeComponent },
  { path: 'ComingSoon', component: ComingSoonComponent },
  { path: 'On-Demand-Services_fil', component: OnDemandServicesFilComponent },
  { path: 'AirTicket', component: AirTicketComponent },
  { path: 'Categories', component: CategoriesComponent },
  { path: 'SignIn', component: SignInComponent },
  { path: 'SignUp', component: SignUpComponent },
  { path: '', redirectTo: 'Home', pathMatch: 'full' }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
