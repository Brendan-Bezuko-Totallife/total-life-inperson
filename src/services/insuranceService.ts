import axios from "axios";
import { InsuranceCalculation } from "../types";

const API_BASE_URL = "http://localhost:3000/api"; // Replace with your actual API endpoint

export const calculateInsurance = async (
  selectedProcedures: { code: string; price: number }[]
): Promise<InsuranceCalculation> => {
  try {
    const response = await axios.post(`${API_BASE_URL}/calculate`, {
      procedures: selectedProcedures,
    });
    return response.data;
  } catch (error) {
    console.error("Error calculating insurance:", error);
    throw error;
  }
};
