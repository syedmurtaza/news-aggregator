import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { useSelector } from 'react-redux';
import AppRoutes from "./components/common/AppRoutes";
import Header from "./components/layout/header/Header";
import FilterBox from "./components/common/pages/FilterBox";
import Footer from "./components/layout/footer/Footer";
import moment from 'moment';


import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  let year = moment().format('YYYY');
  const { isLoggedIn } = useSelector((state) => state.auth);

  return (
    <Router>
      <div>
        <Header title="News Aggregator" />
        <div className="container min-vh-100">
          {isLoggedIn ? <FilterBox /> : ""}
          <AppRoutes />
        </div>
        <Footer copyrights={"Copyrights " + year} />

      </div>

    </Router>
  );
}

export default App;