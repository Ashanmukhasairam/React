import { useState } from "react";
import "./Lottery.css";
import { genTicket,sum } from './helper.js';

export default function Lottery(){
    let [ticket, setTicket]= useState(genTicket(3));
    let isWinning = sum(ticket) === 15;


    let buyTicket =() =>{
        setTicket(genTicket(3));
    }

    return(
        <div>
            <h1>Lottery Game!</h1>
            <div className="ticket">
                <span>{ticket[0]}</span>
                <span>{ticket[1]}</span>
                <span>{ticket[2]}</span>
            </div>
            <h3>{isWinning && "Congrats you win!"}</h3>
            <br />
            <button onClick={buyTicket}>Buy new Ticket</button>
        </div>
    );
}