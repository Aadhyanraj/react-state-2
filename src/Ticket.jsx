import TicketNum from "./TicketNum";
import './Ticket.css';

export default function Ticket({ ticket }) {
    return (
        <div className="Ticket">
            <p className="p">Ticket</p>
            {ticket.map((num,idx)=>(
                <TicketNum key={idx} num={num}></TicketNum>
            ))}
          
        </div>
    );
}