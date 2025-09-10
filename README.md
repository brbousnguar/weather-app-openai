# Weather Chat AI App

[![React](https://img.shields.io/badge/React-18-blue.svg)](https://reactjs.org/)
[![OpenAI](https://img.shields.io/badge/OpenAI-GPT--4-green.svg)](https://openai.com/)
[![Vite](https://img.shields.io/badge/Vite-4.3-646CFF.svg)](https://vitejs.dev/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)

> An intelligent weather application that combines React, OpenAI's GPT API, and OpenWeatherMap to provide conversational weather insights with AI-generated recommendations.

## 🌟 Live Demo

[Try the live demo here](https://your-demo-url.com) | [View Screenshots](#screenshots)

## ✨ Key Features

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

## 🤝 Contributing

We welcome contributions! Here are some ways you can help:

- 🐛 **Report bugs** - Found an issue? [Open a bug report](https://github.com/yourusername/weather-chat-ai/issues)
- 🚀 **Suggest features** - Have an idea? [Request a feature](https://github.com/yourusername/weather-chat-ai/issues)
- 📖 **Improve docs** - Help make our documentation better
- 🔧 **Submit PRs** - Fix bugs or implement new features

See our [Contributing Guide](CONTRIBUTING.md) for detailed information.

### Development Roadmap
- [ ] Add weather alerts and warnings
- [ ] Implement location-based weather maps
- [ ] Add weather history and trends
- [ ] Support for multiple languages
- [ ] Mobile app version
- [ ] Integration with smart home devices

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🌟 Show Your Support

If this project helped you, please give it a ⭐ on GitHub and share it with the community!

## 📞 Connect

- 🐦 Follow on Twitter: [@yourusername](https://twitter.com/yourusername)
- 💼 Connect on LinkedIn: [Your Profile](https://linkedin.com/in/yourprofile)
- 📧 Email: your.email@example.com

---

<div align="center">
  Made with ❤️ and ☕ by <a href="https://github.com/yourusername">Your Name</a>
</div>

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

## 📸 Screenshots

### Main Interface
![Weather Chat Interface](docs/images/main-interface.png)

### AI Weather Description
![AI Generated Weather Description](docs/images/ai-description.png)

### Weather Cards
![Interactive Weather Cards](docs/images/weather-cards.png)

> **Note**: Add actual screenshots to a `docs/images/` folder for better visual appeal

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ installed
- OpenAI API key ([Get one here](https://platform.openai.com/api-keys))
- OpenWeatherMap API key ([Get one here](https://openweathermap.org/api))

### Installation
