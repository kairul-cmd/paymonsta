# PayMonsta Setup Guide

## Quick Setup Steps

1. **Install dependencies**
   ```bash
   pnpm install
   ```

2. **Set up environment variables**
   ```bash
   cd apps/web
   cp .env.example .env.local
   # Edit .env.local and add your GEMINI_API_KEY
   ```

3. **Generate BAML client**
   ```bash
   cd packages/baml
   pnpm exec baml-cli generate
   ```

4. **Start development**
   ```bash
   # From root directory (for full monorepo)
   pnpm dev
   
   # Or just the web app
   cd apps/web && pnpm dev
   ```

## ✅ **Setup Complete!**

Your PayMonsta project is now ready! The setup includes:

- ✅ **Monorepo Structure**: Turborepo + pnpm workspaces
- ✅ **Next.js Web App**: Modern React app with TypeScript
- ✅ **BAML Integration**: AI client generated and ready to use
- ✅ **Tailwind CSS**: Styling system configured
- ✅ **Development Server**: Running on http://localhost:3000

## Next Steps

- Get your Gemini API key from [Google AI Studio](https://makersuite.google.com/app/apikey)
- Test the application by uploading a sample bank statement PDF
- Customize the AI prompts in `packages/baml/baml_src/main.baml`
- Add more sophisticated PDF parsing (currently using mock data)

## Current Limitations

- PDF parsing is currently mocked (you'll need to implement actual PDF parsing)
- Basic UI (can be enhanced with more sophisticated design)
- Single file upload only
- No user authentication (add if needed for production)

## Production Considerations

- Implement proper PDF parsing with libraries like `pdf-parse`
- Add user authentication and session management
- Implement proper error handling and logging
- Add rate limiting for API calls
- Consider caching for repeated analyses
- Add proper data validation and sanitization
