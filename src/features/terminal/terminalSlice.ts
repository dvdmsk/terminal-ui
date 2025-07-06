import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Terminal } from '../../types/terminals';
import { Order } from '@/types/orders';

// Store to save sorting parameters, search
// Define the Interface for Type of State

/*
  Slise to manage the terminal state:
  -Terminals: List of all terminals
  -OrderName: Sorting order by name (ASC | DESC | Null)
  -Orderstatus: Filter by Terminal Status (True/FALSE)
  -Querybranch: Branch Search Request (Branch)
  -Currentpage: Current Page (for Pagination)
  -itemsPerPage: Number of items on the page
*/
interface TerminalState {
  terminals: Terminal[];
  orderName: Order;
  orderStatus: Order;
  queryBranch: string;
  currentPage: number;
  itemsPerPage: number;
}

const initialState: TerminalState = {
  terminals: [],
  orderName: 'all',
  orderStatus: 'all',
  queryBranch: '',
  currentPage: 1,
  itemsPerPage: 10,
};

export const terminalSlice = createSlice({
  name: 'terminal',
  initialState,
  reducers: {
    // Save the terminals in the Store
    setTerminals: (state, action: PayloadAction<Terminal[]>) => {
      state.terminals = action.payload;
    },
    
    // Set the sorting order by name
    setOrderName: (state, action: PayloadAction<Order>) => {
      state.orderName = action.payload;
    },
    
    // Set the filter by status
    setOrderStatus: (state, action: PayloadAction<Order>) => {
      state.orderStatus = action.payload;
    },
    
    // Set a branch search query
    setQueryBranch: (state, action: PayloadAction<string>) => {
      state.queryBranch = action.payload;
    },
    
    // Set the current page (for PAGINATION)
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
  },
});

export const {
  setOrderName,
  setOrderStatus,
  setQueryBranch,
  setTerminals,
  setCurrentPage,
} = terminalSlice.actions;

export default terminalSlice.reducer;