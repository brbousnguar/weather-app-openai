# Contributing to Weather Chat AI App

Welcome to Weather Chat AI App! 🌤️ We're excited that you want to contribute to this AI-powered weather application. This is my first community project, and I welcome contributions from developers of all skill levels.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [How to Contribute](#how-to-contribute)
- [Development Setup](#development-setup)
- [Pull Request Process](#pull-request-process)
- [Issue Guidelines](#issue-guidelines)
- [Coding Standards](#coding-standards)
- [AI/API Considerations](#aiapi-considerations)
- [Community](#community)

## Code of Conduct

This project adheres to the [Contributor Covenant Code of Conduct](/.github/CODE_OF_CONDUCT.md). By participating in this project, you agree to abide by its terms. Please read the full Code of Conduct document to understand what behaviors will and will not be tolerated.

## Getting Started

### Prerequisites

Before contributing, make sure you have:

- Node.js (v16 or higher)
- Git
- A code editor (VS Code recommended)
- Basic knowledge of React and JavaScript
- OpenAI API key (for testing AI features)
- OpenWeatherMap API key (for testing weather data)

### First Time Contributors

If this is your first open source contribution, welcome! Here are some good first issues to look for:

- 🐛 Bug fixes
- 📚 Documentation improvements
- 🎨 UI/UX enhancements
- ✨ Small feature additions
- 🧪 Test additions

Look for issues labeled `good first issue` or `help wanted`.

## How to Contribute

### Reporting Bugs

Before submitting a bug report:

1. Check if the issue already exists in our [Issues](../../issues)
2. Test with the latest version
3. Provide detailed information including:
   - Steps to reproduce
   - Expected vs actual behavior
   - Browser/environment details
   - Screenshots (if applicable)

### Suggesting Features

We love new ideas! When suggesting features:

1. Check existing feature requests
2. Explain the problem you're solving
3. Describe your proposed solution
4. Consider the impact on existing functionality
5. Think about AI/API implications

### Types of Contributions Welcome

- **🐛 Bug Fixes**: Help us squash bugs
- **✨ Features**: Add new weather data visualizations, AI improvements
- **🎨 UI/UX**: Improve the user interface and experience
- **📱 Responsive Design**: Enhance mobile experience
- **🤖 AI Enhancements**: Improve prompt engineering, add new AI features
- **🔧 Performance**: Optimize API calls, loading times
- **📚 Documentation**: Improve README, add code comments
- **🧪 Testing**: Add unit tests, integration tests
- **♿ Accessibility**: Make the app more accessible

## Development Setup

1. **Fork the repository**

   ```bash
   # Click the "Fork" button on GitHub
   ```

2. **Clone your fork**

   ```bash
   git clone https://github.com/YOUR_USERNAME/weather-chat-ai-app.git
   cd weather-chat-ai-app
   ```

3. **Install dependencies**

   ```bash
   npm install
   ```

4. **Set up environment variables**

   ```bash
   # Create .env.local file
   VITE_OPENAI=your_openai_api_key_here
   VITE_OWM=your_openweathermap_api_key_here
   ```

5. **Start development server**

   ```bash
   npm run dev
   ```

6. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

## Pull Request Process

### Before Submitting

- [ ] Test your changes thoroughly
- [ ] Run `npm run lint` to check code style
- [ ] Update documentation if needed
- [ ] Test with different weather locations
- [ ] Verify AI responses are appropriate

### PR Guidelines

1. **Clear Title**: Use a descriptive title explaining the change
2. **Detailed Description**: Explain what you changed and why
3. **Link Issues**: Reference any related issues
4. **Screenshots**: Include before/after screenshots for UI changes
5. **Testing**: Describe how you tested your changes

### Example PR Template

```markdown
## Description

Brief description of changes

## Type of Change

- [ ] Bug fix
- [ ] New feature
- [ ] Documentation update
- [ ] Performance improvement

## Testing

- [ ] Tested on desktop
- [ ] Tested on mobile
- [ ] Verified AI responses
- [ ] Tested edge cases

## Screenshots

(if applicable)
```

## Issue Guidelines

### Bug Reports

Use this template for bug reports:

```markdown
**Describe the Bug**
A clear description of what the bug is.

**To Reproduce**
Steps to reproduce the behavior.

**Expected Behavior**
What you expected to happen.

**Environment**

- Browser: [e.g., Chrome 91]
- Device: [e.g., iPhone 12, Desktop]
- Weather location tested: [e.g., New York]
```

### Feature Requests

```markdown
**Feature Description**
Clear description of the feature.

**Problem Solved**
What problem does this solve?

**Proposed Solution**
How should this work?

**Additional Context**
Any other context or screenshots.
```

## Coding Standards

### JavaScript/React

- Use functional components with hooks
- Follow ES6+ standards
- Use meaningful variable names
- Add comments for complex logic
- Keep components small and focused

### CSS

- Use CSS custom properties for theming
- Follow mobile-first responsive design
- Use semantic class names
- Maintain consistent spacing

### Code Example

```jsx
// Good: Clear, documented component
const WeatherCard = ({ weatherData, unit, onUnitChange }) => {
  // Convert temperature based on selected unit
  const temperature =
    unit === "metric" ? weatherData.temp : (weatherData.temp * 9) / 5 + 32;

  return <div className="weather-card">{/* Weather content */}</div>;
};
```

## AI/API Considerations

### OpenAI Integration

- Be mindful of API costs
- Test prompts thoroughly
- Handle API errors gracefully
- Consider rate limiting

### Weather API

- Cache responses when appropriate
- Handle network failures
- Validate location data

### Best Practices

- Always test with real API keys
- Consider offline scenarios
- Implement proper error boundaries
- Monitor API usage

## Community

### Getting Help

- 💬 **Discussions**: Use GitHub Discussions for questions
- 🐛 **Issues**: Report bugs via GitHub Issues
- 📧 **Direct Contact**: Reach out for mentorship opportunities

### Recognition

Contributors will be:

- Added to the README contributors section
- Mentioned in release notes
- Invited to be project maintainers (for regular contributors)

## License

By contributing, you agree that your contributions will be licensed under the same license as the project.

---

**Thank you for contributing to Weather Chat AI App!** 🙏

Your contributions help make this project better for everyone. Whether you're fixing a typo or adding a major feature, every contribution is valued and appreciated.

_This is my first community project, so I'm learning too! Feel free to suggest improvements to this contributing guide itself._
