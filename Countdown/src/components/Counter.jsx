import './Counter.css'

export function Counter({number, title}) {
    return(
        <div className="counter">
            <p>{number}</p>
            <h3>{title}</h3>
        </div>
    )
}