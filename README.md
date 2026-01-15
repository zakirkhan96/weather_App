# 🌦️ Weather Forecasting App

A modern, responsive weather forecasting web application built with React and Vite. Get real-time weather data and a 5-day forecast for any city in the world.

## ✨ Features

- 🌍 **Search any city worldwide** - Find weather information for any location
- ��️ **Real-time weather data** - Current temperature, conditions, humidity, wind speed, and pressure
- 📅 **5-day forecast** - See weather predictions for the next 5 days
- 🔄 **Temperature unit toggle** - Switch between Celsius (°C) and Fahrenheit (°F)
- 📱 **Fully responsive** - Works perfectly on desktop, tablet, and mobile devices
- ⚡ **Fast performance** - Built with Vite for instant reload and blazing fast development

## 🛠️ Tech Stack

- **React 18** - UI library
- **Vite** - Build tool & dev server
- **OpenWeatherMap API** - Real-time weather data
- **CSS3** - Modern styling with gradients and animations

## 🚀 Quick Start

### 1. Clone the Repository
```bash
git clone https://github.com/zakirkhan96/weather_App.git
cd weather_App
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Get Your OpenWeatherMap API Key
**⚠️ IMPORTANT:** The API key in the code has been **deactivated for security**. You need to generate your own:

1. Go to: https://openweathermap.org/api
2. Click **"Sign Up"** and create a free account
3. Verify your email
4. Go to **API keys** section
5. Copy your **Default API Key**

### 4. Add Your API Key
Open `src/App.jsx` and replace line 13:
```javascript
const API_KEY = 'YOUR_API_KEY'  // ← Replace with your API key
```

Example:
```javascript
const API_KEY = 'abc123def456ghi789jkl0123456789'
```

### 5. Start Development Server
```bash
npm run dev
```

The app will open at **http://localhost:5173** ✅

## 📖 How to Use

1. **Search for a city**: Type any city name in the search box and click "Search"
2. **View current weather**: See real-time temperature, humidity, wind speed, and pressure
3. **Check forecast**: Scroll down to see the 5-day weather forecast
4. **Toggle temperature unit**: Click the °C/°F button to switch temperature units

## 📁 Project Structure

```
weather_App/
├── src/
│   ├── App.jsx          # Main React component with all logic
│   ├── App.css          # Styling and responsive design
│   ├── main.jsx         # React entry point
│   └── index.css        # Global styles
├── index.html           # HTML template
├── package.json         # Dependencies and scripts
├── vite.config.js       # Vite configuration
└── README.md            # This file
```

## �� Available Scripts

### `npm run dev`
Starts the development server with hot reload at http://localhost:5173

### `npm run build`
Creates an optimized production build in the `dist` folder

### `npm run preview`
Preview the production build locally

## 🔑 API Key Information

- **Service**: OpenWeatherMap
- **Free Tier**: 1,000 API calls per day
- **Rate Limit**: 60 calls per minute
- **Update Frequency**: Every 10 minutes

## 📸 Screenshots

- Current weather display with temperature, location, and conditions
- 5-day forecast cards with daily predictions
- Beautiful gradient UI with smooth animations
- Fully responsive mobile-friendly design

## ⚡ Performance

- **Initial Load**: < 500ms
- **Search Response**: 1-3 seconds (API dependent)
- **Mobile Optimized**: Works smoothly on all devices
- **No dependencies bloat**: Minimal package size

## 🐛 Troubleshooting

### "City not found" Error
- Check the spelling of the city name
- Try using the English name
- Use a more specific location (e.g., "London, UK")

### "Please add your OpenWeatherMap API key" Error
- You haven't replaced the placeholder in `src/App.jsx`
- Make sure your API key is correct and active
- API keys can take a few minutes to activate

### Page looks broken
- Refresh your browser (F5)
- Try a different browser
- Clear browser cache

## 🚀 Deployment

### Deploy to Netlify (Easiest)
1. Push your code to GitHub
2. Go to https://netlify.com
3. Click "New site from Git"
4. Select your repository
5. Build command: `npm run build`
6. Publish directory: `dist`
7. Click Deploy! 🎉

### Deploy to Vercel
1. Push your code to GitHub
2. Go to https://vercel.com
3. Import your GitHub repository
4. Click Deploy
5. Done! 🎉

## 📝 License

Open source project - feel free to use and modify!

## 👨‍💻 Author

**Zakir Khan**

## 🤝 Contributing

Found a bug or want to improve the app? Feel free to:
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Support

If you have any questions or issues:
- Check this README
- Review the code comments
- Visit https://openweathermap.org/api for API help

---

**Happy Weather Forecasting!** 🌦️☀️🌧️⛈️

**Live Demo**: http://localhost:5173 (after running `npm run dev`)  
**GitHub**: https://github.com/zakirkhan96/weather_App
