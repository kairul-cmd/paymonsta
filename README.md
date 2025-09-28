# PayMonsta - AI Bank Statement Score Analyzer

PayMonsta is an AI-powered web application that analyzes Malaysian bank statements to provide bank statement score assessments and financial recommendations.

## Features

- 🏦 **Bank Statement Analysis**: Upload PDF bank statements for AI-powered analysis
- 📊 **Bank Statement Score Calculation**: Get bank statement scores on a 1-850 scale with detailed breakdowns
- 💡 **Smart Recommendations**: Receive personalized advice to improve your financial health
- 🇲🇾 **Malaysian Context**: Tailored for Malaysian banking patterns and financial practices
- 🔒 **Secure Processing**: Your data is processed securely and not stored permanently

## Tech Stack

- **Frontend**: Next.js 14 with TypeScript and Tailwind CSS
- **AI/ML**: BAML with Google Gemini 2.5 Flash
- **Monorepo**: Turborepo with pnpm workspaces
- **Deployment**: Vercel-ready configuration

## Project Structure

```
paymonsta/
├── apps/
│   └── web/                 # Next.js web application
│       ├── src/
│       │   ├── app/         # App Router pages
│       │   ├── components/  # React components
│       │   └── lib/         # Utility functions
│       └── package.json
├── packages/
│   └── baml/               # BAML AI configuration
│       ├── baml_src/       # BAML source files
│       └── baml_client/    # Generated BAML client
├── package.json            # Root package.json
├── pnpm-workspace.yaml    # pnpm workspace configuration
└── turbo.json             # Turborepo configuration
```

## Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm 8+
- Google AI API key (for Gemini 2.5 Flash)

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd paymonsta
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Set up environment variables**
   ```bash
   cd apps/web
   cp .env.example .env.local
   ```
   
   Edit `.env.local` and add your Gemini API key:
   ```
   GEMINI_API_KEY=your_actual_api_key_here
   ```

4. **Generate BAML client**
   ```bash
   cd packages/baml
   pnpm build
   ```

5. **Start development server**
   ```bash
   # From root directory
   pnpm dev
   ```

The application will be available at `http://localhost:3000`.

### Getting a Gemini API Key

1. Go to [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Sign in with your Google account
3. Create a new API key
4. Copy the key and add it to your `.env.local` file

## Usage

1. **Upload Bank Statement**: Drag and drop or select a PDF bank statement file
2. **AI Analysis**: The system will extract transaction data and analyze financial patterns
3. **View Results**: Get your bank statement score, financial metrics, and personalized recommendations
4. **Improve Score**: Follow the AI-generated recommendations to enhance your financial health

## Development

### Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build all packages
- `pnpm lint` - Run linting
- `pnpm type-check` - Run TypeScript type checking

### Adding New Features

1. **Frontend Components**: Add to `apps/web/src/components/`
2. **API Routes**: Add to `apps/web/src/app/api/`
3. **BAML Functions**: Edit `packages/baml/baml_src/main.baml`

## Deployment

### Vercel Deployment

1. Connect your repository to Vercel
2. Set the root directory to `apps/web`
3. Add environment variables in Vercel dashboard
4. Deploy!

### Environment Variables for Production

```
GEMINI_API_KEY=your_production_gemini_api_key
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## Security & Privacy

- Bank statements are processed in memory only
- No financial data is permanently stored
- API calls are made securely to Google's Gemini service
- All processing happens server-side for security

## License

This project is licensed under the MIT License.

## Support

For support or questions, please open an issue in the repository.

---

Built with ❤️ for the Malaysian fintech community
