
import './App.css'
import { Counter } from './components/Counter'
import HappyBirthday from './assets/HappyBirthday.jpg'
import { useCountdown } from './hooks/useCountdown'

export default function App() {
  const [day, hour, minute, second] = useCountdown("May 21, 2024 00:00:00")

  return (
    <div className='app' style={{backgroundImage: `url(${HappyBirthday})`}}>
      <div className="container">
        <h1 className="title">Contagem regressiva até meu aniversário</h1>
        <div className="contdown-container">
          <Counter title='Days' number={day}/>
          <Counter title='Hours' number={hour}/>
          <Counter title='Minutes' number={minute}/>
          <Counter title='Seconds' number={second}/>
        </div>
      </div>
    </div>
  )
}
