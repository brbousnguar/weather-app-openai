import PropTypes from "prop-types";
import {
  OPENAI_CONFIG,
  getOpenAIHeaders,
  getModelForTask,
} from "../config/openai.js";

const WeatherDescript = (prompt, weatherData) => {
  const sysMsg = `In a conversational professional tone, answer the [Question] based on the [Weather Data]. 

- Provide an opinion about what the weather feels like. 
- Provide temperature in either Celsius or Fahrenheit, whichever is more appropriate. 
- Never display the temperature in Kelvin. 
- Provide a recommendation on how to prepare and what to wear (e.g. bring an umbrella, wear a wind breaker, a warm jacket, etc.)`;

  const newPrompt = `Question: ${prompt}. Weather Data: ${JSON.stringify(
    weatherData
  )}`;

  const data = {
    model: getModelForTask("description"), // Uses GPT-4 for natural language generation
    messages: [
      { role: "system", content: sysMsg },
      { role: "user", content: newPrompt },
    ],
  };

  const params = {
    headers: getOpenAIHeaders(),
    body: JSON.stringify(data),
    method: "POST",
  };

  return fetch(OPENAI_CONFIG.apiUrl, params)
    .then((response) => response.json())
    .then((data) => {
      return data.choices[0].message.content;
    })
    .catch((error) => {
      console.log("Error:", error);
      return Promise.reject("Unable to fetch weather description.");
    });
};

WeatherDescript.propTypes = {
  prompt: PropTypes.string.isRequired,
};

export default WeatherDescript;
