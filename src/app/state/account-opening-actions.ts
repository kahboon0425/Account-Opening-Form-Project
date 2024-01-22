export namespace AccountOpeningAction{
  export class StoreRegistrationSteps {
    static readonly type = '[AccountOpening] StoreRegistrationSteps';
    constructor(public stepId: string) {}
  }

  export class StorePersonalDetails{
    static readonly type = '[AccountOpening] StorePersonalDetails';
    constructor(public countryCode: string, public nationality: string, public gender: string, public dateOfBirth: string){}
  }

  export class StoreFinancialDetails{
    static readonly type = '[AccountOpening] StoreFinancialDetails';
    constructor(public employmentStatus: string){}
  }

}




