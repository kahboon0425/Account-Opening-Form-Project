import {PersonalDetailsModel} from "../models/personal-details.model";
import {AccountOpeningStateModel} from "../models/account-opening-state.model";
import {Action, Selector, State, StateContext, Store} from "@ngxs/store";
import {Injectable} from "@angular/core";
import {LoginDetailsModel} from "../models/login-details.model";
import {AccountOpeningAction} from "./account-opening-actions";
import {FatcaStatusModel} from "../models/fatca-status.model";


export const LOGIN_STATE_FORM: LoginDetailsModel = {
  email: '',
  username: '',
  password: '',
  confirmPassword: '',
}

export const INITIAL_STATE_FORM: PersonalDetailsModel = {
  firstName: '',
  lastName: '',
  phoneNumber: '',
  gender: '',
  nationality: '',
  dateOfBirth: '',
  countryCode: '',
}

export const INITIAL_FATCA_STATUS: FatcaStatusModel={
  USCitizenship: '',
  USBirthPlace: '',
  USPhoneNo: '',
}


const INITIAL_STATE: AccountOpeningStateModel = {
  message: 'hello',
  personalDetails: {
    model: INITIAL_STATE_FORM,
    dirty: false,
    status: '',
    errors: {},
    loading: false,
  },

  loginDetails: {
    message: 'hello',
    model: LOGIN_STATE_FORM,
    dirty: false,
    status: '',
    errors: {},
    loading: false,
  },
  fatcaStatus:{
    model:INITIAL_FATCA_STATUS,
    dirty: false,
    status: '',
    errors: {},
    loading: false,
  },

  registrationStep: '',
  employmentStatus: '',

};

@State<AccountOpeningStateModel>({
  name: "account_opening",
  defaults: INITIAL_STATE,
})

@Injectable()
export class AccountOpeningState {
  constructor(private store: Store) {
  }

  @Selector()
  public static getMessage(state: AccountOpeningStateModel): string {
    return state.message
  }

  @Selector()
  public static getPersonalDetails(state: AccountOpeningStateModel): PersonalDetailsModel {
    return state.personalDetails.model;
  }

  @Selector()
  public static getLoginDetails(state: AccountOpeningStateModel): LoginDetailsModel {
    return state.loginDetails.model;
  }

  @Selector()
  public static getFatcaStatus(state: AccountOpeningStateModel): FatcaStatusModel {
    return state.fatcaStatus.model;
  }


  @Selector()
  public static getRegistrationStep(state: AccountOpeningStateModel): string {
    return state.registrationStep;
  }

  @Selector()
  public static getFinancialStatus(state: AccountOpeningStateModel): string {
    return state.employmentStatus;
  }



  @Action(AccountOpeningAction.StoreRegistrationSteps)
  storeRegistrationSteps(
    ctx: StateContext<AccountOpeningStateModel>,
    action: AccountOpeningAction.StoreRegistrationSteps
  ) {
    const state = ctx.getState();
    ctx.patchState({
      registrationStep: action.stepId
    });
  }

  @Action(AccountOpeningAction.StoreFinancialDetails)
  storeFinancialDetails(
    ctx: StateContext<AccountOpeningStateModel>,
    action: AccountOpeningAction.StoreFinancialDetails
  ) {
    const state = ctx.getState();
    ctx.patchState({
      employmentStatus: action.employmentStatus
    });
  }

}
