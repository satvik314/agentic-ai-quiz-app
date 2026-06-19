# 🌊 Agentic AI Quizzes — Ocean Edition

An interactive quiz app to learn and test your knowledge of **agentic AI**, built with [Next.js](https://nextjs.org) and styled with a deep-blue ocean theme.

## Five core concepts (7 questions each)

1. **Agents & Autonomy** — what makes a system truly agentic, the agent loop, goals and stopping conditions.
2. **Tool Use & Function Calling** — extending agents with tools, schemas, and grounding.
3. **Memory & Context** — context windows, short/long-term memory, embeddings, and RAG.
4. **Planning & Reasoning** — decomposition, chain-of-thought, ReAct, reflection, and re-planning.
5. **Multi-Agent Systems** — orchestration, roles, communication, and coordination patterns.

## Features

- Interactive, one-question-at-a-time quiz flow
- Instant feedback with an explanation for every answer
- Live progress bar and running score
- Animated results screen with tiered feedback
- Fully responsive, ocean-themed UI (deep blues + seafoam accents)

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build

```bash
npm run build
npm start
```

## Tech stack

- Next.js 15 (App Router) + React 19
- TypeScript
- Tailwind CSS

## Project structure

```
src/
  app/
    layout.tsx              # Root layout, header/footer, ocean background
    page.tsx                # Home — quiz catalog
    quiz/[slug]/page.tsx    # Dynamic quiz page (statically generated)
    globals.css             # Ocean theme + animations
  components/
    QuizRunner.tsx          # Interactive quiz client component
  data/
    quizzes.ts              # All quiz questions, answers, and explanations
```
