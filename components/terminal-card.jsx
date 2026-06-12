export default function TerminalCard() {
  return (
    <section className="py-24">
      <div className="border-border bg-background/40 overflow-hidden rounded-3xl border backdrop-blur-sm">
        {/* Terminal Header */}
        <div className="border-border flex items-center gap-2 border-b px-5 py-3">
          <div className="h-3 w-3 rounded-full bg-red-500" />
          <div className="h-3 w-3 rounded-full bg-yellow-500" />
          <div className="h-3 w-3 rounded-full bg-green-500" />
        </div>

        {/* Terminal Content */}
        <div className="p-6 font-mono text-sm md:text-base">
          <p className="text-emerald-400">$ whoami</p>

          <div className="text-muted-foreground mt-6 space-y-2">
            <p>
              <span className="text-foreground">Name:</span> Veerender Nemali
            </p>

            <p>
              <span className="text-foreground">Role:</span> Software Engineer
            </p>

            <p>
              <span className="text-foreground">Experience:</span> Full Stack
              Developer Intern @ PatternLab.ai
            </p>

            <p>
              <span className="text-foreground">Focus:</span> Full Stack
              Development, System Design, Problem Solving
            </p>

            <p>
              <span className="text-foreground">Tech:</span> React, Next.js,
              Node.js, NestJS, MongoDB, MySQL
            </p>

            <p>
              <span className="text-foreground">Status:</span> Open to Software
              Engineer opportunities
            </p>
          </div>

          <div className="mt-6">
            <span className="text-emerald-400">$</span>
            <span className="ml-2 animate-pulse">|</span>
          </div>
        </div>
      </div>
    </section>
  );
}
