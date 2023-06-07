import { ICompanyCost } from "./companyCost.model";
export interface ICompanyCostState {
  data: ICompanyCost[];
  currentPage: number;
  count: number;
}
