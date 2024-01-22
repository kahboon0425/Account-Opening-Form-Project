import { Component, OnInit } from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {Select, Store} from "@ngxs/store";
import {AccountOpeningState} from "../state/account-opening-state";
import {Observable} from "rxjs";
import {LoginDetailsModel} from "../models/login-details.model";
import {tap} from "rxjs/operators";
import {AccountOpeningAction} from "../state/account-opening-actions";
import {RegistrationSteps} from "../constants/registration-steps-constants";

@Component({
  selector: 'app-financial-details',
  templateUrl: './financial-details.component.html',
  styleUrls: ['./financial-details.component.css']
})
export class FinancialDetailsComponent implements OnInit {

  constructor(private fb: FormBuilder, private store: Store) {

  }

  // NGXS_FORM_NAME = 'account_opening';


  financialDetails = this.fb.group({
    sourceOfIncome: [''],
    currentEmploymentStatus: [''],
  });

  onSubmit() {
    this.store.dispatch(new AccountOpeningAction.StoreFinancialDetails(this.employementStatus));


  }

  employmentStatusData = ['Worker', 'Employee', 'Self-employed'];
  employementStatus = 'Employed';


  @Select(AccountOpeningState.getMessage)
    // @ts-ignore
  message$: Observable<String>;
  // @ts-ignore
  messageSubscription: Subscription;
  // @ts-ignore
  messagePassIn: String;

  // @ts-ignore
  @Select(AccountOpeningState.getLoginDetails) form$: Observable<LoginDetailsModel>;


  id: string = RegistrationSteps.FINANCIAL_DETAILS;

  ngOnInit(): void {
    this.messageSubscription = this.message$
      .pipe(
        tap(value => {this.messagePassIn = <String>value})
      ).subscribe();

    this.store.dispatch(new AccountOpeningAction.StoreRegistrationSteps(this.id));

  }


  ngOnDestroy(): void {
    this.messageSubscription.unsubscribe();
  }
}
