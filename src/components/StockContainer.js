import React from "react";
import Stock from "./Stock";

function StockContainer({ stockList, onAddStock, filter, sorter }) {

  const filterStocks = stockList.filter((stock) => stock.type.includes(filter))

  if (sorter === "Alphabetically"){
    filterStocks.sort((a, b) => {
      const nameA = a["name"].toLowerCase()
      const nameB = b["name"].toLowerCase()
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
      });
  }

  if (sorter === "Price"){
    filterStocks.sort((a, b) => a["price"]-b["price"])
  }

  return (
    <div>
      <h2>Stocks</h2>
      {filterStocks.map((stock) => (<Stock stock={stock} key={stock.id} onStockClick={onAddStock}/>))}
    </div>
  );
}

export default StockContainer;
