export interface Question {
  id: number;
  prompt: string;
  options: string[];
  /** Index into `options` of the correct answer. */
  answer: number;
  explanation: string;
}

export interface Quiz {
  slug: string;
  title: string;
  tagline: string;
  /** A short emoji used as the quiz icon. */
  icon: string;
  description: string;
  questions: Question[];
}

export const quizzes: Quiz[] = [
  {
    slug: "agents-and-autonomy",
    title: "Agents & Autonomy",
    tagline: "What makes an AI system truly agentic",
    icon: "🧭",
    description:
      "Explore the defining traits of agentic systems: autonomy, goal-direction, and the agent loop.",
    questions: [
      {
        id: 1,
        prompt: "What most distinguishes an 'agentic' AI system from a standard chatbot?",
        options: [
          "It uses a larger language model",
          "It can autonomously take actions to pursue a goal over multiple steps",
          "It always responds faster",
          "It never makes mistakes",
        ],
        answer: 1,
        explanation:
          "An agentic system is defined by autonomy and goal-directed behavior — it can plan and take a sequence of actions toward an objective, rather than just returning a single response.",
      },
      {
        id: 2,
        prompt: "The core 'agent loop' is best described as which cycle?",
        options: [
          "Train, validate, deploy",
          "Perceive, reason/plan, act, observe",
          "Encode, decode, repeat",
          "Prompt, wait, exit",
        ],
        answer: 1,
        explanation:
          "Agents operate in a loop: they perceive state/input, reason or plan, take an action, then observe the result and repeat until the goal is met.",
      },
      {
        id: 3,
        prompt: "What does 'autonomy' specifically grant an agent?",
        options: [
          "The ability to decide its next steps without a human approving each one",
          "Unlimited compute",
          "Immunity from hallucination",
          "A guaranteed correct answer",
        ],
        answer: 0,
        explanation:
          "Autonomy means the agent can choose and sequence its own actions to reach a goal, rather than requiring a human to direct every individual step.",
      },
      {
        id: 4,
        prompt: "In agent design, what is a 'goal' or 'objective'?",
        options: [
          "The model's parameter count",
          "The desired end state the agent works to achieve",
          "The temperature setting",
          "A list of banned words",
        ],
        answer: 1,
        explanation:
          "A goal is the target end state. Agentic behavior is goal-directed: the agent evaluates whether its actions are bringing it closer to that desired state.",
      },
      {
        id: 5,
        prompt: "Why is a 'stopping condition' important in an agent loop?",
        options: [
          "It makes the model larger",
          "It prevents the agent from looping forever and defines when the task is done",
          "It improves grammar",
          "It encrypts the output",
        ],
        answer: 1,
        explanation:
          "Without a stopping condition (goal reached, max steps, or budget exhausted), an agent could loop indefinitely. It defines successful or safe termination.",
      },
      {
        id: 6,
        prompt: "Which of these is the clearest example of agentic behavior?",
        options: [
          "Translating a single sentence",
          "Researching a topic across multiple web pages, then writing and revising a report",
          "Returning a definition of a word",
          "Echoing the user's input",
        ],
        answer: 1,
        explanation:
          "Multi-step research, synthesis, and self-revision require planning, tool use, and iteration — hallmarks of agentic behavior — unlike a single-shot lookup.",
      },
      {
        id: 7,
        prompt: "What role does the 'environment' play for an agent?",
        options: [
          "It is irrelevant to the agent",
          "It provides the state the agent perceives and the place where its actions have effects",
          "It only stores logs",
          "It is just the user interface theme",
        ],
        answer: 1,
        explanation:
          "The environment is what the agent observes and acts upon. Actions change the environment's state, and those changes feed back into the agent's next perception.",
      },
    ],
  },
  {
    slug: "tool-use",
    title: "Tool Use & Function Calling",
    tagline: "Giving agents hands to act on the world",
    icon: "🛠️",
    description:
      "Learn how agents extend their abilities through tools, function calling, and external APIs.",
    questions: [
      {
        id: 1,
        prompt: "What is the primary purpose of giving an LLM access to 'tools'?",
        options: [
          "To make responses longer",
          "To let the model take real actions or fetch information beyond its training data",
          "To reduce token costs",
          "To change the model's personality",
        ],
        answer: 1,
        explanation:
          "Tools let a model do things it can't do from weights alone — search the web, run code, query a database, or call an API — grounding it in live, real-world capability.",
      },
      {
        id: 2,
        prompt: "In function calling, what does the model actually produce?",
        options: [
          "The final executed result of the function",
          "A structured request (name + arguments) describing which function to call",
          "Raw machine code",
          "A new model checkpoint",
        ],
        answer: 1,
        explanation:
          "The model emits a structured call — typically the function name and JSON arguments. The host application executes it and returns the result back to the model.",
      },
      {
        id: 3,
        prompt: "Why are tool/function definitions usually provided as a schema?",
        options: [
          "To make the code look professional",
          "So the model knows each tool's name, purpose, and the exact arguments it accepts",
          "To slow the model down",
          "Schemas are not actually used",
        ],
        answer: 1,
        explanation:
          "A clear schema (name, description, typed parameters) tells the model when and how to use a tool, improving the reliability of the arguments it generates.",
      },
      {
        id: 4,
        prompt: "After a tool runs, what typically happens next in the loop?",
        options: [
          "The conversation ends immediately",
          "The tool's result is fed back to the model so it can reason about the next step",
          "The result is discarded",
          "The model is retrained",
        ],
        answer: 1,
        explanation:
          "Tool results are returned to the model as new context. The model then decides whether to call another tool or produce a final answer.",
      },
      {
        id: 5,
        prompt: "Which is a key risk when an agent can execute tools?",
        options: [
          "Tools always make the model smaller",
          "Unintended or unsafe actions if tools have side effects (e.g., deleting data)",
          "Tools remove the need for prompts",
          "There are no risks",
        ],
        answer: 1,
        explanation:
          "Tools with side effects (sending emails, deleting files, making payments) can cause real harm. Guardrails, permissions, and confirmations are essential.",
      },
      {
        id: 6,
        prompt: "What is a good practice when writing a tool description for an agent?",
        options: [
          "Make it vague to allow flexibility",
          "Clearly state what the tool does and when it should (and shouldn't) be used",
          "Leave it blank",
          "Describe an unrelated tool",
        ],
        answer: 1,
        explanation:
          "Precise descriptions and clear usage boundaries help the model pick the right tool at the right time and avoid misuse.",
      },
      {
        id: 7,
        prompt: "What does 'grounding' through tools help reduce?",
        options: [
          "Model size",
          "Hallucination, by letting the model rely on real data instead of guessing",
          "Network latency",
          "The need for any prompt",
        ],
        answer: 1,
        explanation:
          "By fetching authoritative, up-to-date data via tools, an agent can ground its answers in fact rather than relying solely on memorized (and possibly outdated) knowledge.",
      },
    ],
  },
  {
    slug: "memory-and-context",
    title: "Memory & Context",
    tagline: "How agents remember and stay coherent",
    icon: "🧠",
    description:
      "Understand context windows, short- and long-term memory, and retrieval-augmented generation.",
    questions: [
      {
        id: 1,
        prompt: "What is the 'context window' of a language model?",
        options: [
          "The screen size of the app",
          "The maximum amount of text (tokens) the model can consider at once",
          "The model's training duration",
          "A pop-up dialog",
        ],
        answer: 1,
        explanation:
          "The context window is the token budget the model can attend to in a single pass — it bounds how much conversation, instructions, and retrieved data fit at once.",
      },
      {
        id: 2,
        prompt: "What is typically meant by an agent's 'short-term memory'?",
        options: [
          "Its model weights",
          "The recent conversation/context held within the current context window",
          "A permanent database",
          "The CPU cache",
        ],
        answer: 1,
        explanation:
          "Short-term (working) memory is the in-context information for the current session — recent messages, intermediate results, and the active task state.",
      },
      {
        id: 3,
        prompt: "How is 'long-term memory' usually implemented for agents?",
        options: [
          "By making the context window infinite",
          "By storing information externally (e.g., a vector database) and retrieving it when relevant",
          "By retraining the model after every message",
          "It cannot be implemented",
        ],
        answer: 1,
        explanation:
          "Long-term memory lives outside the context window — often in a vector store — and relevant pieces are retrieved and injected into context as needed.",
      },
      {
        id: 4,
        prompt: "What does RAG (Retrieval-Augmented Generation) do?",
        options: [
          "Trains a model from scratch",
          "Retrieves relevant documents and adds them to the prompt to inform the response",
          "Compresses the model",
          "Removes the need for a model",
        ],
        answer: 1,
        explanation:
          "RAG fetches relevant external knowledge at query time and places it in context, letting the model answer using information it wasn't trained on.",
      },
      {
        id: 5,
        prompt: "Why are embeddings central to semantic memory retrieval?",
        options: [
          "They store text as images",
          "They map text to vectors so similar meanings are close together for search",
          "They encrypt the data",
          "They translate languages",
        ],
        answer: 1,
        explanation:
          "Embeddings turn text into numeric vectors where semantic similarity equals geometric closeness, enabling 'find the most relevant memory' via nearest-neighbor search.",
      },
      {
        id: 6,
        prompt: "What problem does 'context window overflow' cause?",
        options: [
          "The model runs faster",
          "Older or important information gets truncated and effectively forgotten",
          "Nothing — windows never overflow",
          "It improves accuracy",
        ],
        answer: 1,
        explanation:
          "When content exceeds the window, something must be dropped or summarized. Naive truncation can lose crucial earlier context, hurting coherence.",
      },
      {
        id: 7,
        prompt: "Which technique helps fit a long history into a limited context window?",
        options: [
          "Summarizing or compressing older messages",
          "Deleting the model",
          "Increasing the temperature",
          "Disabling all tools",
        ],
        answer: 0,
        explanation:
          "Summarization (and other compaction strategies) condenses prior history so the essential state remains in context without exceeding the token budget.",
      },
    ],
  },
  {
    slug: "planning-and-reasoning",
    title: "Planning & Reasoning",
    tagline: "How agents think before they act",
    icon: "🗺️",
    description:
      "Dive into reasoning strategies like chain-of-thought, ReAct, decomposition, and reflection.",
    questions: [
      {
        id: 1,
        prompt: "What is 'task decomposition' in agent planning?",
        options: [
          "Deleting parts of the task",
          "Breaking a complex goal into smaller, manageable subtasks",
          "Running the task twice",
          "Compressing the prompt",
        ],
        answer: 1,
        explanation:
          "Decomposition splits a hard problem into ordered subtasks the agent can tackle one at a time, making complex goals tractable.",
      },
      {
        id: 2,
        prompt: "What does 'chain-of-thought' prompting encourage a model to do?",
        options: [
          "Answer instantly with no reasoning",
          "Work through intermediate reasoning steps before giving a final answer",
          "Call more tools",
          "Use a bigger model",
        ],
        answer: 1,
        explanation:
          "Chain-of-thought elicits explicit step-by-step reasoning, which often improves accuracy on multi-step or logical problems.",
      },
      {
        id: 3,
        prompt: "The ReAct pattern interleaves which two things?",
        options: [
          "Reading and writing files",
          "Reasoning traces and actions (tool calls)",
          "Recording and acting in a play",
          "Retraining and evaluating",
        ],
        answer: 1,
        explanation:
          "ReAct (Reason + Act) alternates between thinking ('reasoning') and doing ('acting' via tools), using observations to guide the next thought.",
      },
      {
        id: 4,
        prompt: "What is 'reflection' (self-critique) in an agent workflow?",
        options: [
          "The agent reviewing and critiquing its own output to improve it",
          "Mirroring the user's text",
          "A type of database",
          "Lowering the temperature",
        ],
        answer: 0,
        explanation:
          "Reflection has the agent evaluate its own results, spot errors, and revise — an iterative quality-improvement step.",
      },
      {
        id: 5,
        prompt: "Why might an agent create an explicit plan before acting?",
        options: [
          "To waste tokens",
          "To organize steps, reduce errors, and keep complex multi-step tasks on track",
          "Plans are never useful",
          "To avoid using tools",
        ],
        answer: 1,
        explanation:
          "An explicit plan provides structure and a checklist, helping the agent stay coherent and recover when a step fails.",
      },
      {
        id: 6,
        prompt: "What advantage does exploring multiple reasoning paths (e.g., tree-of-thought) offer?",
        options: [
          "It guarantees the shortest answer",
          "It lets the agent consider alternatives and pick the most promising solution",
          "It disables planning",
          "It removes the need for tools",
        ],
        answer: 1,
        explanation:
          "Branching approaches like tree-of-thought evaluate several candidate paths, improving results on problems with multiple possible solution routes.",
      },
      {
        id: 7,
        prompt: "When a planned step fails, a robust agent should ideally:",
        options: [
          "Crash and stop",
          "Re-plan or adapt based on the new observation",
          "Ignore the failure and continue blindly",
          "Restart from scratch every time",
        ],
        answer: 1,
        explanation:
          "Good agents are adaptive: they incorporate feedback from failures and re-plan rather than blindly continuing or giving up.",
      },
    ],
  },
  {
    slug: "multi-agent-systems",
    title: "Multi-Agent Systems",
    tagline: "Many specialized agents, working together",
    icon: "🤝",
    description:
      "Examine orchestration, agent roles, communication, and coordination patterns in multi-agent setups.",
    questions: [
      {
        id: 1,
        prompt: "What is a core motivation for using multiple agents instead of one?",
        options: [
          "To increase electricity usage",
          "To divide work among specialized agents, each focused on a sub-problem",
          "To make the system slower",
          "To avoid using any tools",
        ],
        answer: 1,
        explanation:
          "Specialization lets each agent focus on what it does best (e.g., research, coding, review), often improving quality and modularity on complex tasks.",
      },
      {
        id: 2,
        prompt: "In an orchestrator–worker pattern, what is the orchestrator's job?",
        options: [
          "To do all the work itself",
          "To break down the task and delegate subtasks to worker agents, then combine results",
          "To shut down the workers",
          "To store embeddings",
        ],
        answer: 1,
        explanation:
          "The orchestrator (or 'manager') plans, assigns subtasks to specialized workers, and synthesizes their outputs into a final result.",
      },
      {
        id: 3,
        prompt: "What is an 'agent role' or 'persona' in a multi-agent system?",
        options: [
          "A defined responsibility/specialty that shapes an agent's behavior",
          "The agent's font color",
          "A random seed",
          "The hardware it runs on",
        ],
        answer: 0,
        explanation:
          "Assigning roles (e.g., researcher, critic, coder) focuses each agent's instructions and tools on a specific responsibility within the system.",
      },
      {
        id: 4,
        prompt: "How do agents in a multi-agent system typically coordinate?",
        options: [
          "They never interact",
          "By passing messages or sharing state/results with one another",
          "Only through retraining",
          "By using the same GPU core",
        ],
        answer: 1,
        explanation:
          "Coordination happens via communication — agents exchange messages, hand off tasks, or read/write shared state to align their work.",
      },
      {
        id: 5,
        prompt: "What is a benefit of a dedicated 'critic' or reviewer agent?",
        options: [
          "It slows everything down for no reason",
          "It evaluates another agent's output and catches errors before final delivery",
          "It replaces the user",
          "It stores long-term memory",
        ],
        answer: 1,
        explanation:
          "A critic agent provides an independent review step, improving reliability by catching mistakes the producing agent missed.",
      },
      {
        id: 6,
        prompt: "Which is a real challenge in multi-agent systems?",
        options: [
          "They are always cheaper than a single agent",
          "Coordination overhead, conflicting outputs, and compounding errors",
          "They never need communication",
          "They cannot use tools",
        ],
        answer: 1,
        explanation:
          "More agents means more messages, potential conflicts, and the risk that one agent's error propagates — all of which add coordination complexity and cost.",
      },
      {
        id: 7,
        prompt: "In a 'pipeline' (sequential) multi-agent pattern, agents are arranged so that:",
        options: [
          "All agents run in complete isolation forever",
          "Each agent's output becomes the next agent's input, like an assembly line",
          "Only one agent ever runs",
          "Agents randomly overwrite each other",
        ],
        answer: 1,
        explanation:
          "A sequential pipeline chains agents so each stage transforms the previous stage's output — useful for clear, ordered workflows.",
      },
    ],
  },
];

export function getQuiz(slug: string): Quiz | undefined {
  return quizzes.find((q) => q.slug === slug);
}
