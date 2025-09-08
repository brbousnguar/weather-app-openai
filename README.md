# Weather Chat AI App

An intelligent weather application that combines React, OpenAI's GPT API, and OpenWeatherMap to provide conversational weather insights with AI-generated recommendations.

## Features

- 🌤️ **Natural Language Queries**: Ask for weather in plain English ("What's the weather like in Paris?")
- 🤖 **AI-Powered Location Detection**: Automatically extracts location from user prompts using OpenAI function calling
- 💡 **Smart Weather Descriptions**: GPT-generated summaries with clothing recommendations
- 📊 **Interactive Weather Cards**: Temperature, wind data with unit conversion (metric/imperial)
- 📱 **Responsive Design**: Clean, modern interface for desktop and mobile

## Tech Stack

- **Frontend**: React 18 + Vite
- **APIs**: OpenAI GPT + OpenWeatherMap
- **Styling**: CSS with custom properties

## Quick Start

### Prerequisites

- Node.js installed on your machine
- OpenAI API key
- OpenWeatherMap API key

### Setup

1. Clone this repository
2. Create `.env.local` file in the root directory:
   ```
   VITE_OPENAI=your_openai_api_key_here
   VITE_OWM=your_openweathermap_api_key_here
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start development server:
   ```bash
   npm run dev
   ```
5. Press `o` to open in browser, `q` to quit

## How It Works

1. **User Input**: Type natural language weather queries
2. **AI Processing**: OpenAI extracts location and weather preferences
3. **Data Fetching**: App retrieves real-time weather data from OpenWeatherMap
4. **AI Description**: GPT generates personalized weather summaries and recommendations
5. **Display**: Clean interface shows weather cards with interactive controls

## Project Structure

```
src/
├── components/
│   ├── WeatherForm.jsx      # Input form for weather queries
│   ├── WeatherCard.jsx      # Weather data display component
│   ├── Description.jsx      # AI-generated weather descriptions
│   └── useApiRequests.jsx   # Custom hook for API calls
├── App.jsx                  # Main application component
└── main.jsx                 # React entry point
```

## API Integration Examples

This project demonstrates:

- OpenAI function calling for structured data extraction
- Weather API integration with error handling
- Custom React hooks for managing API state
- Environment variable configuration for secure API key storage

Perfect for learning modern React development with AI integration!
