export interface Terminal {
  id: string;
  name: string;
  status: boolean;
  branch: string;
  updated: string; // Likely an ISO 8601 string (e.g., '2025-05-27T13:33:26')
  amountEUR: number;
  amountCZK: number;
  notification?: string[];

}

export interface TerminalInfo {
  id: string;
  name: string;
  status: boolean;
  branch: string;
  updated: string; // Likely an ISO 8601 string (e.g., '2025-05-27T13:33:26')
  amountEUR: number;
  amountCZK: number;
  stateOfMeans: {
    denomination: number,
    totalCount: number,
    totalAmount: number,
    countToBePaid: number,
    amountToBePaid: number,
    type: 'coin' | 'money',
  }[];

  coinRecycler: {
    denomination: number,
    totalCount: number,
    totalAmount: number,
    warningCount: number,
    criticalCount: number,
    maxCount: number,
    type: 'coin' | 'money',
  }[];
}