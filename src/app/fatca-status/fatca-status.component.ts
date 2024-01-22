import { Component, OnInit } from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {AccountOpeningAction} from "../state/account-opening-actions";
import {RegistrationSteps} from "../constants/registration-steps-constants";
import {Store} from "@ngxs/store";

@Component({
  selector: 'app-fatca-status',
  templateUrl: './fatca-status.component.html',
  styleUrls: ['./fatca-status.component.css']
})
export class FatcaStatusComponent implements OnInit {
  NGXS_FORM_NAME = 'account_opening.fatcaStatus';

  constructor(private fb: FormBuilder,private store: Store) { }

  fatcaStatus = this.fb.group({
    USCitizenship: [''],
    USBirthPlace: [''],
    USPhoneNo: [''],

  })

  id: string = RegistrationSteps.FATCA_STATUS;

  ngOnInit(): void {
    this.store.dispatch(new AccountOpeningAction.StoreRegistrationSteps(this.id));
  }

}
