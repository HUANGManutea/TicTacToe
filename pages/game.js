import { Client } from "boardgame.io/react";
import { SocketIO } from "boardgame.io/multiplayer";
import { TicTacToe } from "../lib/game";
import { TicTacToeBoard } from "../components/board";
import React, { useState } from "react";

const TicTacToeClient = Client({
  game: TicTacToe,
  board: TicTacToeBoard,
  multiplayer: SocketIO({server: 'localhost:8000' }),
  debug: true
});

export default function Game() {
    const [playerID, setPlayerID] = useState(null);
    if (playerID === null) {
        return (
            <div>
              <p>Play as</p>
              <button onClick={() => setPlayerID('0')}>
                Player 0
              </button>
              <button onClick={() => setPlayerID('1')}>
                Player 1
              </button>
            </div>
          );
    }
    return (
        <div>
            <p>Playing as {playerID}</p>
            <TicTacToeClient playerID={playerID} />
        </div>
    )
}