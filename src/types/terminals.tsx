export interface Terminal {
  name: string;
  status: boolean;
  branch: string;
  updated: string; // Likely an ISO 8601 string (e.g., '2025-05-27T13:33:26')
  amountEUR: number;
  amountCZK: number;
}