"use client";

import { useState } from "react";
import Link from "next/link";
import type { Quiz } from "@/data/quizzes";

interface Props {
  quiz: Quiz;
}

export default function QuizRunner({ quiz }: Props) {
  const total = quiz.questions.length;
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [locked, setLocked] = useState(false);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const question = quiz.questions[current];
  const isCorrect = selected === question.answer;

  function handleSelect(index: number) {
    if (locked) return;
    setSelected(index);
    setLocked(true);
    if (index === question.answer) {
      setScore((s) => s + 1);
    }
  }

  function handleNext() {
    if (current + 1 < total) {
      setCurrent((c) => c + 1);
      setSelected(null);
      setLocked(false);
    } else {
      setFinished(true);
    }
  }

  function handleRestart() {
    setCurrent(0);
    setSelected(null);
    setLocked(false);
    setScore(0);
    setFinished(false);
  }

  if (finished) {
    const pct = Math.round((score / total) * 100);
    const { headline, blurb } = resultMessage(pct);
    return (
      <div className="animate-fadeUp glass mx-auto max-w-xl rounded-2xl p-8 text-center">
        <div className="text-5xl">{quiz.icon}</div>
        <h2 className="mt-4 text-2xl font-bold text-ocean-50">{headline}</h2>
        <p className="mt-2 text-ocean-200/80">{blurb}</p>

        <div className="my-8">
          <div className="text-6xl font-bold text-seafoam-300">
            {score}
            <span className="text-2xl text-ocean-300/70">/{total}</span>
          </div>
          <div className="mx-auto mt-4 h-3 w-full max-w-sm overflow-hidden rounded-full bg-ocean-800/70">
            <div
              className="h-full rounded-full bg-gradient-to-r from-ocean-400 to-seafoam-400 transition-all duration-700"
              style={{ width: `${pct}%` }}
            />
          </div>
          <p className="mt-2 text-sm text-ocean-300/70">{pct}% correct</p>
        </div>

        <div className="flex flex-col justify-center gap-3 sm:flex-row">
          <button
            onClick={handleRestart}
            className="rounded-full bg-seafoam-500 px-6 py-2.5 font-medium text-ocean-950 transition hover:bg-seafoam-400"
          >
            Retake quiz
          </button>
          <Link
            href="/"
            className="rounded-full border border-ocean-600/60 bg-ocean-800/50 px-6 py-2.5 font-medium text-ocean-100 transition hover:bg-ocean-700/60"
          >
            Back to all quizzes
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-2xl">
      {/* Progress */}
      <div className="mb-6">
        <div className="mb-2 flex items-center justify-between text-sm text-ocean-300/80">
          <span>
            Question {current + 1} of {total}
          </span>
          <span>Score: {score}</span>
        </div>
        <div className="h-2 w-full overflow-hidden rounded-full bg-ocean-800/70">
          <div
            className="h-full rounded-full bg-gradient-to-r from-ocean-400 to-seafoam-400 transition-all duration-500"
            style={{ width: `${(current / total) * 100}%` }}
          />
        </div>
      </div>

      {/* Question card */}
      <div key={current} className="animate-fadeUp glass rounded-2xl p-6 sm:p-8">
        <h2 className="text-xl font-semibold leading-snug text-ocean-50">
          {question.prompt}
        </h2>

        <div className="mt-6 space-y-3">
          {question.options.map((option, index) => {
            const state = optionState(index, selected, question.answer, locked);
            return (
              <button
                key={index}
                onClick={() => handleSelect(index)}
                disabled={locked}
                className={`flex w-full items-center gap-3 rounded-xl border px-4 py-3.5 text-left transition ${state.classes}`}
              >
                <span
                  className={`grid h-7 w-7 shrink-0 place-items-center rounded-full border text-sm font-semibold ${state.badge}`}
                >
                  {state.icon ?? String.fromCharCode(65 + index)}
                </span>
                <span className="text-ocean-50">{option}</span>
              </button>
            );
          })}
        </div>

        {/* Feedback */}
        {locked && (
          <div
            className={`mt-5 animate-fadeUp rounded-xl border p-4 text-sm ${
              isCorrect
                ? "border-seafoam-500/40 bg-seafoam-500/10 text-seafoam-300"
                : "border-rose-400/40 bg-rose-500/10 text-rose-200"
            }`}
          >
            <p className="font-semibold">
              {isCorrect ? "Correct! 🌊" : "Not quite."}
            </p>
            <p className="mt-1 text-ocean-100/90">{question.explanation}</p>
          </div>
        )}

        {/* Next */}
        {locked && (
          <div className="mt-6 flex justify-end">
            <button
              onClick={handleNext}
              className="rounded-full bg-seafoam-500 px-6 py-2.5 font-medium text-ocean-950 transition hover:bg-seafoam-400"
            >
              {current + 1 < total ? "Next question →" : "See results →"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

function optionState(
  index: number,
  selected: number | null,
  answer: number,
  locked: boolean
) {
  if (!locked) {
    return {
      classes:
        "border-ocean-700/60 bg-ocean-800/40 hover:border-seafoam-400/60 hover:bg-ocean-700/50",
      badge: "border-ocean-500/60 bg-ocean-700/50 text-ocean-100",
      icon: null as string | null,
    };
  }
  if (index === answer) {
    return {
      classes: "border-seafoam-500/60 bg-seafoam-500/15",
      badge: "border-seafoam-400 bg-seafoam-500 text-ocean-950",
      icon: "✓",
    };
  }
  if (index === selected) {
    return {
      classes: "border-rose-400/60 bg-rose-500/15",
      badge: "border-rose-400 bg-rose-500 text-white",
      icon: "✕",
    };
  }
  return {
    classes: "border-ocean-800/60 bg-ocean-900/30 opacity-60",
    badge: "border-ocean-600/60 bg-ocean-800/50 text-ocean-300",
    icon: null as string | null,
  };
}

function resultMessage(pct: number): { headline: string; blurb: string } {
  if (pct === 100)
    return {
      headline: "Perfect score! 🐳",
      blurb: "You've mastered this concept. The ocean of agentic AI is yours.",
    };
  if (pct >= 70)
    return {
      headline: "Great work! 🐬",
      blurb: "You have a strong grasp of the fundamentals. Review the misses and dive again.",
    };
  if (pct >= 40)
    return {
      headline: "Good start! 🐠",
      blurb: "You're getting the hang of it. Revisit the explanations and try once more.",
    };
  return {
    headline: "Keep swimming! 🐟",
    blurb: "Every expert started here. Read through the explanations and retake the quiz.",
  };
}
