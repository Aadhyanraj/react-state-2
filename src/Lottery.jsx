import { useState } from "react";
import "./Lottery.css";
import { genTicket, sum } from "./helper";
import Ticket from "./Ticket";

export default function Lottery({ n = 3, winningSum = 15 }) {
    let [ticket, setTicket] = useState(genTicket(n));
    let isWining = sum(ticket) === winningSum;

    let byTicket = () => {
        setTicket(genTicket(n));
    }

    return (
        <div>
            <h1>Lottery Game</h1>
            <div className="ticket">
                <Ticket ticket={ticket} />
            </div>
            <br />
            <button className="btn" onClick={() => setTicket(genTicket(3))}>Generate</button>
            <h2 className="won">{isWining && "congratulations, Aadhyan you won"}</h2>

        </div>
    );
}
