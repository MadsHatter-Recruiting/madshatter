# Mads Hatter (v1)

Mads Hatter is a production-ready v1 AI resume reviewer built with Next.js (App Router), TypeScript, Tailwind CSS, and the OpenAI API.

Users can:
- Upload a PDF resume
- Optionally paste a job description (`Job Target Mode`)
- Get structured recruiter feedback and scores
- Click through to `Chat with Mads` for a live paid session

## Tech Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS
- OpenAI API (server-side only)
- `pdf-parse` for PDF text extraction

## Local Setup

1. Install dependencies:

```bash
npm install
```

2. Create `.env.local` in the project root:

```bash
OPENAI_API_KEY=your_openai_api_key_here
```

3. Run locally:

```bash
npm run dev
```

4. Open:

- [http://localhost:3000](http://localhost:3000)

## API

### `POST /api/review`

Accepts `multipart/form-data`:
- `file`: PDF resume (required)
- `jobDescription`: string (optional)

Behavior:
- Extracts PDF text server-side
- Runs OpenAI review in either:
  - General recruiter mode (no JD)
  - Job Target mode (with JD)
- Enforces strict JSON output schema

Error handling included for:
- missing PDF
- bad/unreadable PDF
- empty extracted text
- OpenAI/API failures

## Output Schemas

### No Job Description

```json
{
  "recruiter_score": 7.8,
  "strengths": ["..."],
  "issues": ["..."],
  "priority_rewrites": [
    { "original": "...", "improved": "...", "why": "..." }
  ],
  "next_steps": ["..."]
}
```

### With Job Description

```json
{
  "recruiter_score": 7.8,
  "match_score": 76,
  "strengths": ["..."],
  "issues": ["..."],
  "missing_keywords": ["..."],
  "priority_rewrites": [
    { "original": "...", "improved": "...", "why": "..." }
  ],
  "tailored_summary": "...",
  "next_steps": ["..."]
}
```

## Placeholder Links

- LinkedIn: `https://linkedin.com/in/your-link-here`
- Calendly: `https://calendly.com/your-link-here`

## Deploy to Vercel

1. Push this repo to GitHub.
2. Import project in Vercel.
3. Set environment variable in Vercel project settings:
   - `OPENAI_API_KEY`
4. Deploy.

This app is deploy-ready and does not require a database for v1.
