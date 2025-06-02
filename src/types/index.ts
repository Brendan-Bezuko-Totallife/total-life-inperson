export interface Procedure {
  code: string;
  name: string;
  price: number;
}

export interface InsuranceCalculation {
  coinsurance: number;
  copay: number;
  deductible: number;
  remainingBalance: number;
}

export interface SelectedProcedure extends Procedure {
  id: string;
}
