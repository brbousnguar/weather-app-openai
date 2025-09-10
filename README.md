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

## AI Model Strategy

This app uses an optimized approach with different OpenAI models for different tasks to balance cost, performance, and quality:

### 🎯 **GPT-4 (Premium)** - Weather Descriptions
- **Used for**: Natural language generation, complex reasoning
- **Components**: `WeatherDescript.jsx`
- **Why**: Superior quality for conversational weather insights and clothing recommendations
- **Cost**: Higher, but justified for user-facing content quality

### ⚡ **GPT-4o-mini (Standard)** - Location Extraction  
- **Used for**: Function calling, structured data extraction
- **Components**: `PromptToLocation.jsx`
- **Why**: Excellent at function calling with 20x lower cost than GPT-4
- **Benefits**: Faster response times, same accuracy for structured tasks

### 📊 **Cost Optimization**
```
Location Extraction: GPT-4o-mini (~$0.0015/1K tokens) - 50-90% savings
Weather Descriptions: GPT-4 (~$0.03/1K tokens) - Premium quality maintained
```

The configuration is centralized in `src/config/openai.js` with the `getModelForTask()` helper function for easy management.

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
│   ├── WeatherForm.jsx       # Input form for weather queries
│   ├── WeatherCard.jsx       # Weather data display component
│   ├── WeahterDescript.jsx   # AI weather descriptions (GPT-4)
│   ├── PromptToLocation.jsx  # Location extraction (GPT-4o-mini)
│   └── useApiRequests.jsx    # Custom hook for API calls
├── config/
│   └── openai.js            # Centralized OpenAI configuration
├── App.jsx                  # Main application component
└── main.jsx                 # React entry point
```

## AI Integration Architecture

### Model Configuration (`src/config/openai.js`)
```javascript
export const OPENAI_CONFIG = {
  models: {
    premium: "gpt-4",           // Complex reasoning & descriptions
    standard: "gpt-4o-mini",    // Function calling & extraction
    basic: "gpt-3.5-turbo"      // Fallback option
  }
};

// Smart model selection based on task type
export const getModelForTask = (taskType) => {
  switch (taskType) {
    case 'description': return OPENAI_CONFIG.models.premium;
    case 'function-calling': return OPENAI_CONFIG.models.standard;
    default: return OPENAI_CONFIG.models.standard;
  }
};
```

### Usage Examples
- **Location Extraction**: `getModelForTask('function-calling')` → GPT-4o-mini
- **Weather Descriptions**: `getModelForTask('description')` → GPT-4

## API Integration Examples

This project demonstrates:

- **Optimized AI Model Selection**: Different OpenAI models for different tasks
- **OpenAI Function Calling**: Structured data extraction from natural language
- **Cost-Effective AI Integration**: 50-90% cost savings through smart model selection
- **Weather API Integration**: Real-time data with comprehensive error handling
- **Custom React Hooks**: Clean separation of API state management
- **Environment Configuration**: Secure API key storage and centralized config

### Key Technical Patterns

1. **Multi-Model Strategy**: Premium models for quality, efficient models for structure
2. **Centralized Configuration**: Single source of truth for AI settings
3. **Task-Based Model Selection**: Automatic model routing based on use case
4. **Error Boundary Patterns**: Graceful degradation when AI services fail

Perfect for learning modern React development with cost-optimized AI integration!
