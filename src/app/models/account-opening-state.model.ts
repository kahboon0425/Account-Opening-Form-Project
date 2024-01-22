import {PersonalDetailsModel} from "./personal-details.model";
import {LoginDetailsModel} from "./login-details.model";
import {FatcaStatusModel} from "./fatca-status.model";

export class AccountOpeningStateModel{
  // @ts-ignore
  message: string;

  // @ts-ignore
  personalDetails: StateFormModel<PersonalDetailsModel>;
  // @ts-ignore
  loginDetails: StateFormModel<LoginDetailsModel>;
  // @ts-ignore
  fatcaStatus: StateFormModel<FatcaStatusModel>;


  // @ts-ignore
  registrationStep: string;

  // @ts-ignore
  employmentStatus: string;

}
