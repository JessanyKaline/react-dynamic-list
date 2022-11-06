import './style.css';

export function Card({description, time}){
    return(
        <div className="card">
            <strong>{description}</strong>
            <small>{time}</small>
        </div>
    )
}