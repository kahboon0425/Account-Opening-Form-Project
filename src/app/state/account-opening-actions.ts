export namespace AccountOpeningAction{
  export class StoreRegistrationSteps {
    static readonly type = '[AccountOpening] StoreRegistrationSteps';
    constructor(public stepId: string) {}
  }

  export class StoreFinancialDetails{
    static readonly type = '[AccountOpening] StoreFinancialDetails';
    constructor(public employmentStatus: string){}
  }

}




