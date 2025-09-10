// OpenAI API configuration
export const OPENAI_CONFIG = {
  apiUrl: "https://api.openai.com/v1/chat/completions",
  apiKey: import.meta.env.VITE_OPENAI,
  models: {
    // Use GPT-4 for complex reasoning and natural language generation
    premium: "gpt-4",
    // Use GPT-4o-mini for structured tasks and function calling (faster + cheaper)
    standard: "gpt-4o-mini",
    // Fallback option
    basic: "gpt-3.5-turbo",
  },
};

// Helper function to get common headers
export const getOpenAIHeaders = () => ({
  Authorization: `Bearer ${OPENAI_CONFIG.apiKey}`,
  "Content-Type": "application/json",
});

// Helper function to get model for specific use cases
export const getModelForTask = (taskType) => {
  switch (taskType) {
    case "description":
    case "reasoning":
      return OPENAI_CONFIG.models.premium; // GPT-4 for weather descriptions
    case "extraction":
    case "function-calling":
      return OPENAI_CONFIG.models.standard; // GPT-4o-mini for location extraction
    default:
      return OPENAI_CONFIG.models.standard;
  }
};
