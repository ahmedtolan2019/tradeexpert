import React from "react";
import { ProvideTradeExpert } from "./features/market/useTradeExpert";
import DashboardScreen from "./screens/Dashboard";

function App() {
  return (
    <div className="w-screen overflow-scroll h-screen bg-slate-50">
      <ProvideTradeExpert>
        <DashboardScreen />
      </ProvideTradeExpert>
    </div>
  );
}

export default App;
