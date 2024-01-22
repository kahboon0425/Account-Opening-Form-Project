import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {AccountOpeningHomeComponent} from "../account-opening-home/account-opening-home.component";
import {NewOrOldClientComponent} from "../new-or-old-client/new-or-old-client.component";
import {
  EmployeeOrBusinessPartnerComponent
} from "../employee-or-business-partner/employee-or-business-partner.component";
import {CreateLoginComponent} from "../create-login/create-login.component";
import {PageNotFoundComponent} from "../page-not-found/page-not-found.component";
import {HomeComponent} from "../home/home.component";
import {UserDetailsComponent} from "../user-details/user-details.component";
import {ReviewApplicationComponent} from "../review-application/review-application.component";
import {FinancialDetailsComponent} from "../financial-details/financial-details.component";
import {FatcaStatusComponent} from "../fatca-status/fatca-status.component";


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: '',  redirectTo: '/home' ,pathMatch:'full'},
  {path: 'account-opening-home', component: AccountOpeningHomeComponent},
  {path: 'new-or-old-client', component: NewOrOldClientComponent},
  {path: 'employee-or-business-partner', component: EmployeeOrBusinessPartnerComponent},
  {path: 'create-login', component: CreateLoginComponent},
  {path: 'fatca-status', component: FatcaStatusComponent},
  {path: 'user-details', component: UserDetailsComponent},
  {path: 'financial-details', component: FinancialDetailsComponent},
  {path: 'review-application', component: ReviewApplicationComponent},
  {path: '**', pathMatch:'full', component: PageNotFoundComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

export const routingComponents = [HomeComponent, AccountOpeningHomeComponent,
  NewOrOldClientComponent, EmployeeOrBusinessPartnerComponent, CreateLoginComponent, UserDetailsComponent, FinancialDetailsComponent, ReviewApplicationComponent, PageNotFoundComponent]
