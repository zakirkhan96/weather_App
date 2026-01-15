import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [city, setCity] = useState('London')
  const [weather, setWeather] = useState(null)
  const [forecast, setForecast] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [unit, setUnit] = useState('C')
  const [search, setSearch] = useState('')

  const API_KEY = 'a57e7031bdd083fb90f57d80bcdda5bf' // Get from https://openweathermap.org/api

  const fetchWeather = async (cityName) => {
    if (!API_KEY || API_KEY === 'YOUR_API_KEY') {
      setError('Please add your OpenWeatherMap API key to App.jsx')
      return
    }

    setLoading(true)
    setError(null)
    try {
      const units = unit === 'C' ? 'metric' : 'imperial'
      
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=${units}&appid=${API_KEY}`
      )
      if (!res.ok) throw new Error('City not found')
      
      const data = await res.json()
      setWeather(data)
      setCity(cityName)

      const forecastRes = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&units=${units}&appid=${API_KEY}`
      )
      const forecastData = await forecastRes.json()
      
      const daily = {}
      forecastData.list.forEach(item => {
        const date = new Date(item.dt * 1000).toLocaleDateString()
        if (!daily[date]) daily[date] = item
      })
      
      setForecast(Object.values(daily).slice(0, 5))
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchWeather(city)
  }, [unit])

  const handleSearch = (e) => {
    e.preventDefault()
    if (search.trim()) {
      fetchWeather(search.trim())
      setSearch('')
    }
  }

  return (
    <div className="app">
      <div className="container">
        <h1>🌦️ Weather App</h1>
        
        <form onSubmit={handleSearch} className="search">
          <input
            type="text"
            placeholder="Enter city..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button type="submit">Search</button>
          <button type="button" onClick={() => setUnit(unit === 'C' ? 'F' : 'C')}>
            °{unit === 'C' ? 'F' : 'C'}
          </button>
        </form>

        {error && <div className="error">{error}</div>}

        {loading && <div className="loading">Loading...</div>}

        {weather && (
          <>
            <div className="current">
              <h2>{weather.main.temp}°</h2>
              <p>{weather.name}, {weather.sys.country}</p>
              <p>{weather.weather[0].description}</p>
              <div className="details">
                <div>Humidity: {weather.main.humidity}%</div>
                <div>Wind: {Math.round(weather.wind.speed)} m/s</div>
                <div>Pressure: {weather.main.pressure} hPa</div>
              </div>
            </div>

            {forecast.length > 0 && (
              <div className="forecast">
                <h3>5-Day Forecast</h3>
                <div className="cards">
                  {forecast.map((day, i) => (
                    <div key={i} className="card">
                      <p>{new Date(day.dt * 1000).toLocaleDateString()}</p>
                      <p>{day.weather[0].main}</p>
                      <p>{Math.round(day.main.temp)}°</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default App
