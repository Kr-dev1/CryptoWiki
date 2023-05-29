import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

const SavedCoin = () => {
  const [coins, setCoins] = useState([]);

  return (
    <div>
      {coins.length === 0 ? (
        <p>
          You don't have any coins saved,. Please save a copin to add it to your
          Saved Coins.{" "}
          <Link to="/" className="text-accent">
            Click here to search coins
          </Link>
        </p>
      ) : (
        <table className="w-full border-collapse text-center">
          <thead>
            <tr className="border-b">
              <th className="px-4"> Rank </th>
              <th className="text-left"> Coin </th>
              <th className="text-left"> Remove</th>
            </tr>
          </thead>
          <tbody>
            {coins.map((coin) => {
              <tr key={coin.id} className="h-[60px] overflow-hidden">
                <td>{coin?.rank}</td>
                <td>
                  <Link to={`/coins/${coin.id}`}>
                    <div className="flex items-center">
                      <img
                        className="w-8 mr-8"
                        src={coin?.image}
                        alt={coin.name}
                      />
                      <div>
                        <p className="hidden sm:table-cell">{coin?.name}</p>
                        <p className="text-grey-500 text-left text-sm">
                          {coin?.symbol.toUpperCase()}
                        </p>
                      </div>
                    </div>
                  </Link>
                </td>
                <td>
                  <AiOutlineClose className="cursor-pointer" />
                </td>
              </tr>;
            })}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default SavedCoin;
