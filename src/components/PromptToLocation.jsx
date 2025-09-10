import PropTypes from "prop-types";
import {
  OPENAI_CONFIG,
  getOpenAIHeaders,
  getModelForTask,
} from "../config/openai.js";

const PromptToLocation = (prompt) => {
  const data = {
    model: getModelForTask("function-calling"), // Uses GPT-4o-mini for function calling
    messages: [{ role: "user", content: prompt }],
    tools: [
      {
        type: "function",
        function: {
          name: "displayData",
          description: "Get the current weather in a given location.",
          parameters: {
            type: "object",
            properties: {
              country: {
                type: "string",
                description: "Country name.",
              },
              countryCode: {
                type: "string",
                description: "Country code. Use ISO-3166",
              },
              USstate: {
                type: "string",
                description: "Full state name.",
              },
              state: {
                type: "string",
                description: "Two-letter state code.",
              },
              city: {
                type: "string",
                description: "City name.",
              },
              unit: {
                type: "string",
                description: "location unit: metric or imperial.",
              },
            },
            required: [
              "countryCode",
              "country",
              "USstate",
              "state",
              "city",
              "unit",
            ],
          },
        },
      },
    ],
    tool_choice: "auto",
  };

  const params = {
    headers: getOpenAIHeaders(),
    body: JSON.stringify(data),
    method: "POST",
  };

  // Return the fetch() promise
  return fetch(OPENAI_CONFIG.apiUrl, params)
    .then((response) => response.json())
    .then((data) => {
      const promptRes = JSON.parse(
        data.choices[0].message.tool_calls[0].function.arguments
      );
      console.log(promptRes);

      const locationString = () => {
        if (promptRes.countryCode === "US") {
          return `${promptRes.city},${promptRes.state},${promptRes.country}`;
        } else {
          return `${promptRes.city},${promptRes.country}`;
        }
      };

      const promptData = {
        locationString: locationString(),
        units: promptRes.unit,
        country: promptRes.country,
        USstate: promptRes.USstate,
      };

      return promptData;
    })
    .catch((error) => {
      console.log("Error:", error);
      return Promise.reject(
        "Unable to identify a location from your question. Please try again."
      );
    });
};

PromptToLocation.propTypes = {
  prompt: PropTypes.string.isRequired,
};

export default PromptToLocation;
