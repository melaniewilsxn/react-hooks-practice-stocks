import React from "react";
import Stock from "./Stock";

function PortfolioContainer({ portfolio, onRemoveStock }) {

  const displayPortfolio = portfolio.map((stock) => {
    return <Stock stock={stock} key={stock.id} onStockClick={onRemoveStock}/>
  })

  return (
    <div>
      <h2>My Portfolio</h2>
      {displayPortfolio}
    </div>
  );
}

export default PortfolioContainer;
