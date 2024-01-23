import { Component, OnInit } from '@angular/core';
import {PersonalDetailsModel} from "../models/personal-details.model";
import {tap} from "rxjs/operators";
import {AccountOpeningState} from "../state/account-opening-state";
import {Select, Store} from "@ngxs/store";
import {Observable} from "rxjs";
import {LoginDetailsModel} from "../models/login-details.model";
import {Router} from "@angular/router";
import {AccountOpeningAction} from "../state/account-opening-actions";
import {RegistrationSteps} from "../constants/registration-steps-constants";
import {FatcaStatusModel} from "../models/fatca-status.model";
// import {fatcaStatusModel} from "../models/fatca-status.model";


@Component({
  selector: 'app-review-application',
  templateUrl: './review-application.component.html',
  styleUrls: ['./review-application.component.css']
})
export class ReviewApplicationComponent implements OnInit {

  isVisible = false;
  isConfirmLoading = false;

  constructor(private router: Router, private store: Store) {

  }

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
      this.isVisible = false;
      this.router.navigate(['/','home'])
  }


  // // @ts-ignore
  // @Select(AccountOpeningState.getPersonalDetails) form$: Observable<PersonalDetailsModel>;
  //
  // // @ts-ignore
  // @Select(AccountOpeningState.getLoginDetails) loginForm$: Observable<LoginDetailsModel>;
  //
  // // @ts-ignore
  // @Select(AccountOpeningState.getFatcaStatus) fatcaStatus$: Observable<FatcaStatusModel>;



  employmentStatus = '';
  personalDetailsForm: PersonalDetailsModel = {};
  loginForm: LoginDetailsModel = {};
  fatcaStatusForm: FatcaStatusModel = {};

  id: string = RegistrationSteps.REVIEW_APPLICATION;
  ngOnInit(): void {
    // @ts-ignore
    this.store.select(AccountOpeningState.getPersonalDetails).subscribe(
      value => {
        this.personalDetailsForm = value
      }
    )
    // @ts-ignore
    this.store.select(AccountOpeningState.getLoginDetails).subscribe(
      value => {
        this.loginForm= value
      }
    )
    // @ts-ignore
    this.store.select(AccountOpeningState.getFatcaStatus).subscribe(
      value => {
        this.fatcaStatusForm = value
      }
    )

    // @ts-ignore
    this.store.select(AccountOpeningState.getFinancialStatus).subscribe(
      value => {
        this.employmentStatus = value
      }
    );

    this.store.dispatch(new AccountOpeningAction.StoreRegistrationSteps(this.id));

  }


}
