/** @format */

import "./App.css";
import { Balance } from "./components/Balance";
import { Header } from "./components/Header";
import { IncomeExpenses } from "./components/IncomeExpenses";
import { History } from "./components/History";
import { AddNewTransction } from "./components/AddNewTransction";
import { GlobalProvider } from "./Context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <div className='App'>
        <Header />
        <div className='container'>
          <Balance />
          <IncomeExpenses />
          <History />
          <AddNewTransction />
        </div>
      </div>
    </GlobalProvider>
  );
}

export default App;
