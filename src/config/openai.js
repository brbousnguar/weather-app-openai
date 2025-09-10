// OpenAI API configuration
export const OPENAI_CONFIG = {
  apiUrl: "https://api.openai.com/v1/chat/completions",
  model: "gpt-4",
  apiKey: import.meta.env.VITE_OPENAI,
};

// Helper function to get common headers
export const getOpenAIHeaders = () => ({
  Authorization: `Bearer ${OPENAI_CONFIG.apiKey}`,
  "Content-Type": "application/json",
});
