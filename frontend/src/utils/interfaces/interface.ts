import { IconType } from "react-icons";
import { ReactText } from "react";
import { ReactNode } from "react";
import { FlexProps } from "@chakra-ui/react";

export interface LinkItemProps {
  name: string;
  icon: IconType;
  to: string;
}
export interface ProfilePageProps {
  children: ReactNode;
}
export interface SidebarWithHeaderProps {
  onClose: () => void;
  isOpen: boolean;
  onOpen: () => void;
}
export interface NavItemProps extends FlexProps {
  to: string;
  icon: IconType;
  children: ReactText;
}
export interface UserState {
  data: {
    _id: string;
    name: string;
    email: string;
    pic: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
  };
}
export interface User {
  _id: string;
  name: string;
  email: string;
  isAdmin: boolean;
  pic: string;
  token: string;
}
export interface generateTokenPayload {
  _id: string;
  name: string;
  email: string;
  pic: string;
}

export interface TransactionDetails {
  transactionDate: string;
  description: string;
  debit: string;
  credit: string;
  balance: string;
  category: string;
  _id: string;
}

export interface UpdatedUser {
  _id: string;
  name: string;
  email: string;
  pic: string;
  token: string;
}
export interface TransactionFormData {
  transactionDate: string;
  description: string;
  amount: string;
  type: string;
  balance: string;
  category: string;
}
export interface Transaction {
  _id: string;
  userId: string;
  transactions: TransactionDetails;
  __v: number;
}
export interface PieQuery {
  category?: string;
  period?: string;
  type?: string;
  group: "pie";
  isDebit: boolean;
}

export interface BarQuery {
  category?: string;
  period?: string;
  isDebit?: boolean;
  group: "bar";
}
export interface TransactionDetails {
  transactionDate: string;
  description: string;
  debit: string;
  credit: string;
  balance: string;
  category: string;
  _id: string;
}

export interface Transaction {
  _id: string;
  userId: string;
  transactions: TransactionDetails;
  __v: number;
}
export interface TransactionModalProps {
  totalBalance?: number | null;
  isOpen: boolean;
  onClose: () => void;
  transactionFormData: {
    transactionDate: string;
    description: string;
    amount: string;
    type: string;
    balance: string;
    category: string;
  };
  handleTransactionFormChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  handleTransactionFormSubmit: () => void;
  handleCategoryNewTransaction: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  isEditing: boolean;
}
export interface SaveExcelDataRequest {
  excelData: any[]; 
  selectedCategories: string[];
  userId: string;
}

export interface SaveExcelDataResponse {
  success: boolean;
  message: string;
}

