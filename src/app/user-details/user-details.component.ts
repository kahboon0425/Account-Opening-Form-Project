import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {Select, Store} from "@ngxs/store";
import {AccountOpeningState} from "../state/account-opening-state";
import {Observable} from "rxjs";
import {LoginDetailsModel} from "../models/login-details.model";
import {tap} from "rxjs/operators";
import {AccountOpeningAction} from "../state/account-opening-actions";
import {RegistrationSteps} from "../constants/registration-steps-constants";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  NGXS_FORM_NAME = 'account_opening.personalDetails';
  mode = 'date';
  isClick = false;

  constructor(private fb: FormBuilder, private store: Store) {
  }

  personalDetails = this.fb.group({
    firstName: ['', [Validators.required]],
    lastName: ['', [Validators.required]],
    phoneNumber: ['', [Validators.required]],
    gender: [''],
    nationality: [''],
    dateOfBirth: [''],
    countryCode: [''],
  })


  get firstName() {
    return this.personalDetails.controls.firstName;
  }

  get lastName() {
    return this.personalDetails.controls.lastName;
  }

  get phoneNumber() {
    return this.personalDetails.controls.phoneNumber;
  }

  onClickNextButton(){
    this.isClick = true;

  }



  onSubmit() {
    console.log(this.personalDetails.value);
  }


  // @ts-ignore
  // @Select(AccountOpeningState.getLoginDetails) form$: Observable<LoginDetailsModel>;

  id: string = RegistrationSteps.PERSONAL_DETAILS;

  loginForm: LoginDetailsModel = {};

  ngOnInit(): void {
    this.store.select(AccountOpeningState.getLoginDetails).subscribe(
      value => {
        this.loginForm= value
      }
    )
    this.store.dispatch(new AccountOpeningAction.StoreRegistrationSteps(this.id));
  }



  selectedCountryCode = 'Malaysia (+60)';
  countryCodeData = ['Malaysia (+60)', 'Singapore (+65)', 'South Korea (+82)', 'United Kingdom (+44)'];

  genderData = ['Female', 'Male'];
  nationalityData = ['Malaysian', 'Singaporean', 'South Korean', 'British'];




}
