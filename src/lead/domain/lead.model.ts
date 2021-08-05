export interface LeadModel {
  id?: number;
  firstname: string;
  lastname: string;
  idcard: string;
  agent: any;
  judicials?: any[];
  score?: number;
}
