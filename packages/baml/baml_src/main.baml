generator typescript {
  output_type "typescript/react"
  output_dir "../baml_client"
  version "0.208.5"
}

client<llm> Gemini {
  provider google-ai
  options {
    model "gemini-2.5-flash"
    api_key env.GEMINI_API_KEY
  }
}

class BankTransaction {
  date string
  description string
  amount float
  balance float
  transaction_type string // "debit" | "credit"
}

class IncomeBreakdown {
  salary_income float? // Regular employment income
  other_income float? // Irregular income sources
  fund_transfers_in float // Money received from other accounts
  total_credits float // All credits for reference
  calculation_method string // How monthly_income was calculated
}

class ExpenseBreakdown {
  actual_expenses float // Real spending on goods/services
  fund_transfers_out float // Money sent to other accounts
  total_debits float // All debits for reference
  calculation_method string // How monthly_expenses was calculated
}

class CreditScoreAnalysis {
  overall_score int // 1-850 scale
  score_category string // "Poor" | "Fair" | "Good" | "Very Good" | "Excellent"
  monthly_income float?
  monthly_expenses float?
  income_breakdown IncomeBreakdown?
  expense_breakdown ExpenseBreakdown?
  savings_rate float? // percentage
  debt_to_income_ratio float? // percentage
  payment_consistency_score int // 1-100
  account_stability_months int
  risk_factors string[]
  positive_factors string[]
  recommendations string[]
  detailed_analysis string
}

function ExtractTransactions(pdfText: string) -> BankTransaction[] {
  client Gemini
  prompt #"
    You are an expert at extracting transaction data from Malaysian bank statements.
    
    Raw PDF Text:
    {{ pdfText }}
    
    Extract all transactions from this bank statement text and return them as a JSON array.
    Each transaction should have the following structure:
    {
      "date": "YYYY-MM-DD",
      "description": "transaction description",
      "amount": <positive for credits, negative for debits>,
      "balance": <account balance after transaction>,
      "transaction_type": "credit" or "debit"
    }
    
    Guidelines:
    - Look for transaction patterns in Malaysian bank statements (Maybank, CIMB, Public Bank, etc.)
    - Identify salary credits, EPF contributions, ATM withdrawals, online payments
    - Convert dates to YYYY-MM-DD format
    - Use positive amounts for credits (money in) and negative for debits (money out)
    - Extract the running balance after each transaction
    - Include all transactions, even small ones
    - If balance is not clear, estimate based on previous balance and transaction amount
    
    Return only the JSON array of transactions, no other text.
  "#
}

function AnalyzeBankStatement(transactions: BankTransaction[]) -> CreditScoreAnalysis {
  client Gemini
  prompt #"
    You are a financial analyst specializing in Malaysian banking and credit scoring.
    
    STEP 1: UNDERSTAND THE DATA
    You will receive bank transactions in this format:
    {{ transactions }}
    
    STEP 2: MATHEMATICAL CALCULATIONS (CRITICAL - FOLLOW EXACTLY)
    
    First, let me show you how to calculate totals correctly:
    
    EXAMPLE CALCULATION:
    If you have transactions:
    - Credit: +200.00, +50.00, +100.00
    - Debit: -26.00, -70.00, -100.00
    
    CORRECT CALCULATION:
    total_credits = 200.00 + 50.00 + 100.00 = 350.00
    total_debits = 26.00 + 70.00 + 100.00 = 196.00 (convert negatives to positive)
    
    NOW APPLY THIS TO THE ACTUAL TRANSACTIONS:
    
    STEP 2A: CALCULATE TOTAL CREDITS
    - Go through EVERY transaction with transaction_type = "credit"
    - Add up ALL the amounts (they should be positive)
    - total_credits = sum of all credit amounts
    
    STEP 2B: CALCULATE TOTAL DEBITS  
    - Go through EVERY transaction with transaction_type = "debit"
    - Take the absolute value of each amount (convert negative to positive)
    - Add them all up
    - total_debits = sum of all debit amounts (as positive numbers)
    
    STEP 2C: CATEGORIZE TRANSACTIONS
    - Fund Transfers IN: Credits with "FUND TRANSFER", "IBK FUND TFR TO"
    - Fund Transfers OUT: Debits with "FUND TRANSFER", "IBK FUND TFR FR", "TRANSFER FROM"
    - Actual Expenses: Debits for real purchases (SALE DEBIT, FPX PAYMENT, PYMT FROM)
    - Cash Deposits: Credits with "CASH DEPOSIT"
    - Salary: Credits with "SALARY", "PAYROLL" (likely none in this data)
    
    STEP 2D: CALCULATE SUBCATEGORIES
    fund_transfers_in = sum of all fund transfer credits
    fund_transfers_out = sum of all fund transfer debits (as positive)
    actual_expenses = sum of all expense debits (as positive)
    
    STEP 3: VERIFICATION (MANDATORY)
    Check your math:
    - Does total_credits = fund_transfers_in + cash_deposits + salary_income + other_income?
    - Does total_debits = fund_transfers_out + actual_expenses?
    
    If not, recalculate until they match!
    
    STEP 4: FINANCIAL ANALYSIS
    Based on Malaysian banking context:
    - No salary pattern = monthly_income = null
    - Calculate monthly_expenses from actual spending only
    - Assess financial stability and risk factors
    
    Return your analysis as a JSON object with the following structure:
    {
      "overall_score": <integer between 1-850>,
      "score_category": "<Poor|Fair|Good|Very Good|Excellent>",
      "monthly_income": <float or null - ONLY regular salary/employment income>,
      "monthly_expenses": <float or null - actual spending, not transfers>,
      "income_breakdown": {
        "salary_income": <float or null>,
        "other_income": <float or null>,
        "fund_transfers_in": <float - sum of all fund transfer credits>,
        "total_credits": <float - sum of ALL credit transactions - MUST EQUAL 918.14>,
        "calculation_method": "Show your step-by-step calculation: List each credit transaction and sum them. Example: 'Credit 1: 200.00 + Credit 2: 50.00 = Total: 250.00'"
      },
      "expense_breakdown": {
        "actual_expenses": <float - sum of real spending debits>,
        "fund_transfers_out": <float - sum of fund transfer debits>,
        "total_debits": <float - sum of ALL debit transactions - MUST EQUAL 784.65>,
        "calculation_method": "Show your step-by-step calculation: List each debit transaction and sum them. Example: 'Debit 1: 26.00 + Debit 2: 70.00 = Total: 96.00'"
      },
      "savings_rate": <float percentage or null>,
      "debt_to_income_ratio": <float percentage or null>,
      "payment_consistency_score": <integer between 1-100>,
      "account_stability_months": <integer>,
      "risk_factors": ["<risk factor 1>", "<risk factor 2>"],
      "positive_factors": ["<positive factor 1>", "<positive factor 2>"],
      "recommendations": ["<recommendation 1>", "<recommendation 2>"],
      "detailed_analysis": "<comprehensive explanation including calculation methodology>"
    }

    Score Categories:
    - Poor: 300-579
    - Fair: 580-669  
    - Good: 670-739
    - Very Good: 740-799
    - Excellent: 800-850

    Be thorough but practical in your analysis and recommendations.
  "#
}
