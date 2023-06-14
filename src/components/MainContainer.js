import React, { useState, useEffect } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {

  const [stockList, setStockList] = useState([])
  const [portfolio, setPortfolio] = useState([])
  const [filter, setFilter] = useState("")
  const [sorter, setSorter] = useState("")

  useEffect(() => {
    fetch("http://localhost:3001/stocks")
    .then(res => res.json())
    .then(stockData => setStockList(stockData))
  }, [])

  function onAddStock(newStock){
    if(portfolio.find((stock) => stock.id === newStock.id)){
      return true
    } else {
      setPortfolio([...portfolio, newStock])
    }
  }

  function onRemoveStock(removedStock){
    const updatedPortfolio = portfolio.filter((stock) => stock.id !== removedStock.id)
    setPortfolio(updatedPortfolio)
  }

  return (
    <div>
      <SearchBar setFilter={setFilter} setSorter={setSorter}/>
      <div className="row">
        <div className="col-8">
          <StockContainer stockList={stockList} onAddStock={onAddStock} filter={filter} sorter={sorter}/>
        </div>
        <div className="col-4">
          <PortfolioContainer portfolio={portfolio} onRemoveStock={onRemoveStock}/>
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
