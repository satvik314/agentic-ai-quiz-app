import Link from "next/link";
import { notFound } from "next/navigation";
import { getQuiz, quizzes } from "@/data/quizzes";
import QuizRunner from "@/components/QuizRunner";

export function generateStaticParams() {
  return quizzes.map((quiz) => ({ slug: quiz.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const quiz = getQuiz(slug);
  return {
    title: quiz ? `${quiz.title} — Agentic AI Quizzes` : "Quiz not found",
  };
}

export default async function QuizPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const quiz = getQuiz(slug);
  if (!quiz) notFound();

  return (
    <div>
      <div className="mb-8 animate-fadeUp">
        <Link
          href="/"
          className="text-sm text-ocean-300/80 transition hover:text-seafoam-300"
        >
          ← All quizzes
        </Link>
        <div className="mt-3 flex items-center gap-4">
          <span className="grid h-14 w-14 place-items-center rounded-xl bg-ocean-700/50 text-3xl">
            {quiz.icon}
          </span>
          <div>
            <h1 className="text-2xl font-bold text-ocean-50 sm:text-3xl">
              {quiz.title}
            </h1>
            <p className="text-seafoam-300/90">{quiz.tagline}</p>
          </div>
        </div>
      </div>

      <QuizRunner quiz={quiz} />
    </div>
  );
}
