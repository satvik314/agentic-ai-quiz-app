import Link from "next/link";
import { quizzes } from "@/data/quizzes";

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="animate-fadeUp text-center">
        <p className="mb-3 inline-block rounded-full border border-seafoam-500/40 bg-seafoam-500/10 px-4 py-1 text-sm font-medium text-seafoam-300">
          Five core concepts · Seven questions each
        </p>
        <h1 className="mx-auto max-w-3xl text-4xl font-bold tracking-tight text-ocean-50 sm:text-5xl">
          Master the fundamentals of{" "}
          <span className="bg-gradient-to-r from-seafoam-300 to-ocean-300 bg-clip-text text-transparent">
            Agentic AI
          </span>
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-ocean-200/80">
          Dive into focused quizzes on autonomy, tool use, memory, planning, and
          multi-agent systems. Track your score and learn from every answer.
        </p>
      </section>

      {/* Quiz grid */}
      <section className="mt-12 grid gap-6 sm:grid-cols-2">
        {quizzes.map((quiz, i) => (
          <Link
            key={quiz.slug}
            href={`/quiz/${quiz.slug}`}
            style={{ animationDelay: `${i * 80}ms` }}
            className="group animate-fadeUp glass relative overflow-hidden rounded-2xl p-6 transition duration-300 hover:-translate-y-1 hover:border-seafoam-400/60 hover:shadow-2xl hover:shadow-ocean-950/50"
          >
            <div className="flex items-start gap-4">
              <span className="grid h-14 w-14 shrink-0 place-items-center rounded-xl bg-ocean-700/50 text-3xl transition group-hover:bg-ocean-600/60">
                {quiz.icon}
              </span>
              <div>
                <h2 className="text-xl font-semibold text-ocean-50">
                  {quiz.title}
                </h2>
                <p className="text-sm text-seafoam-300/90">{quiz.tagline}</p>
              </div>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-ocean-200/75">
              {quiz.description}
            </p>
            <div className="mt-5 flex items-center justify-between">
              <span className="text-xs uppercase tracking-wide text-ocean-300/70">
                {quiz.questions.length} questions
              </span>
              <span className="inline-flex items-center gap-1 text-sm font-medium text-seafoam-300 transition group-hover:gap-2">
                Start quiz
                <span aria-hidden>→</span>
              </span>
            </div>
          </Link>
        ))}
      </section>
    </div>
  );
}
