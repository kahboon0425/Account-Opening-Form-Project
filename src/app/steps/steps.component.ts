import { Component, OnInit } from '@angular/core';
import {RegistrationSteps} from "../constants/registration-steps-constants";
import {Select, Store} from "@ngxs/store";
import {AccountOpeningState} from "../state/account-opening-state";
import {Observable} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-steps',
  templateUrl: './steps.component.html',
  styleUrls: ['./steps.component.css']
})
export class StepsComponent implements OnInit {
  // @ts-ignore
  @Select(AccountOpeningState.getRegistrationStep) step$: Observable<string>;

  registrationSteps = RegistrationSteps;
  selectedRegistrationSteps: string = this.registrationSteps.PERSONAL_DETAILS;

  constructor(private router: Router, private store: Store) { }

  //new way
  ngOnInit(): void {
    this.store.select(AccountOpeningState.getRegistrationStep).subscribe(
      value => {
        this.selectedRegistrationSteps = value
      }
    );
  }

  registrationStepsData = [
    {
      value: this.registrationSteps.PERSONAL_DETAILS,
      label: 'Personal Details'
    },
    {
      value: this.registrationSteps.FINANCIAL_DETAILS,
      label: 'Financial Details'
    },
    {
      value: this.registrationSteps.REVIEW_APPLICATION,
      label: 'Review Application'
    },
    {
      value: this.registrationSteps.FATCA_STATUS,
      label: 'Fatca Status'
    },
  ];


  onSelect(value: string): void {
    console.log(value);

    if(value === this.registrationSteps.PERSONAL_DETAILS){
      this.router.navigate(['/', 'user-details'])
    }else if(value === this.registrationSteps.FINANCIAL_DETAILS){
      this.router.navigate(['/', 'financial-details'])
    }else if(value === this.registrationSteps.REVIEW_APPLICATION){
      this.router.navigate(['/', 'review-application'])
    }else if(value === this.registrationSteps.FATCA_STATUS){
      this.router.navigate(['/', 'fatca-status'])
    }
  }

}
