import "./App.css";
import { useState, useEffect } from "react";
import type {
  Procedure,
  SelectedProcedure,
  InsuranceCalculation,
} from "./types";

function App() {
  // state to store the procedures from the json file
  const [procedures, setProcedures] = useState<Procedure[]>([]);

  // state to store the selected procedures
  const [selectedProcedures, setSelectedProcedures] = useState<
    SelectedProcedure[]
  >([]);

  // state to store the total cost of the selected procedures
  const [totalCost, setTotalCost] = useState(0);

  // state to store the calculations from the api
  const [calculations, setCalculations] = useState<InsuranceCalculation | null>(
    null
  );

  // state to store the loading state of the api call
  const [isLoading, setIsLoading] = useState(false);

  // function to add a procedure to the selected procedures
  const addProcedure = (procedure: Procedure) => {};

  // function to remove a procedure from the selected procedures
  const removeProcedure = (id: string) => {};

  // function to calculate the insurance coverage using the api
  const calculateInsurance = async () => {};

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <header className="bg-white shadow-lg border-b border-gray-100">
        <div className="container mx-auto py-8 px-4">
          <h1 className="text-4xl font-bold text-gray-900 text-center">
            Total Life Insurance
            <span className="block text-2xl text-blue-600 mt-2">
              Procedure Calculator
            </span>
          </h1>
        </div>
      </header>

      <main className="container mx-auto py-8 px-4 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Available Procedures */}
          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
            <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center">
              <span className="w-2 h-8 bg-blue-500 rounded-full mr-3"></span>
              Available Procedures
            </h2>
            <div className="space-y-4">
              {/* loop through the procedures and display them */}

              <div className="flex justify-between items-center p-4 border border-gray-100 rounded-lg hover:bg-blue-50 transition-colors duration-200">
                <div>
                  <p className="font-semibold text-gray-800"></p>
                  <div className="flex items-center space-x-4 mt-1">
                    <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
                      Code:
                    </span>
                    <span className="text-sm font-medium text-blue-600"></span>
                  </div>
                </div>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-200 flex items-center">
                  <span className="mr-2">+</span> Add
                </button>
              </div>
            </div>
          </div>

          {/* Selected Procedures */}
          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
            <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center">
              <span className="w-2 h-8 bg-green-500 rounded-full mr-3"></span>
              Selected Procedures
            </h2>
            <div className="space-y-4">
              {/* loop through the selected procedures and display them */}

              <div className="flex justify-between items-center p-4 border border-gray-100 rounded-lg bg-gray-50">
                <div>
                  <p className="font-semibold text-gray-800"></p>
                  <div className="flex items-center space-x-4 mt-1">
                    <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
                      Code:
                    </span>
                    <span className="text-sm font-medium text-green-600"></span>
                  </div>
                </div>
                <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors duration-200 flex items-center">
                  <span className="mr-2">×</span> Remove
                </button>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-gray-100">
              <p className="text-xl font-bold text-gray-800 flex justify-between items-center">
                <span>Total Cost:</span>
                <span className="text-blue-600"></span>
              </p>
            </div>
          </div>
        </div>

        {/* Insurance Calculator */}
        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 mt-8">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center">
            <span className="w-2 h-8 bg-indigo-500 rounded-full mr-3"></span>
            Insurance Calculations
          </h2>

          <button
            className={`w-full py-4 px-6 rounded-lg text-lg font-semibold transition-all duration-200`}
          >
            {isLoading ? (
              <span className="flex items-center justify-center">
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Calculating...
              </span>
            ) : (
              "Calculate Insurance Coverage"
            )}
          </button>

          {calculations && (
            <div className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-100">
                  <p className="text-sm font-medium text-blue-600 mb-2">
                    Coinsurance
                  </p>
                  <p className="text-2xl font-bold text-gray-800"></p>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl border border-green-100">
                  <p className="text-sm font-medium text-green-600 mb-2">
                    Copay
                  </p>
                  <p className="text-2xl font-bold text-gray-800"></p>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-indigo-50 p-6 rounded-xl border border-purple-100">
                  <p className="text-sm font-medium text-purple-600 mb-2">
                    Deductible
                  </p>
                  <p className="text-2xl font-bold text-gray-800"></p>
                </div>
                <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-xl border border-amber-100">
                  <p className="text-sm font-medium text-amber-600 mb-2">
                    Remaining Balance
                  </p>
                  <p className="text-2xl font-bold text-gray-800"></p>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default App;
