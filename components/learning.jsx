const learning = {
  books: {
    current: [
      {
        title: "Atomic Habits",
        author: "James Clear",
        link: "https://jamesclear.com/atomic-habits",
      },
    ],

    completed: [
      {
        title: "The Subtle Art of Not Giving a Fuck",
        author: "Mark Manson",
        link: "https://markmanson.net/not-giving-a-fuck",
      },
    ],
  },

  papers: {
    current: [
      {
        title: "Google File System",
        link: "https://research.google/pubs/pub51/",
      },
    ],

    completed: [
      // {
      //   title: "MapReduce",
      //   link: "https://research.google/pubs/pub62/",
      // },
      // {
      //   title: "Bigtable",
      //   link: "https://research.google/pubs/pub27898/",
      // },
      // {
      //   title: "Google File System",
      //   link: "https://research.google/pubs/pub51/",
      // },
    ],
  },

  blogs: [
    {
      title: "Netflix Engineering",
      link: "https://netflixtechblog.com",
    },
    {
      title: "Cloudflare Blog",
      link: "https://blog.cloudflare.com",
    },
    {
      title: "Stripe Engineering",
      link: "https://stripe.com/blog/engineering",
    },
    {
      title: "Vercel Blog",
      link: "https://vercel.com/blog",
    },
  ],
};

export default function Learning() {
  return (
    <section id="learning" className="py-32">
      <div className="mx-auto max-w-6xl">
        <p className="text-muted-foreground text-sm tracking-[0.25em] uppercase">
          Learning
        </p>

        <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
          What I'm Learning
        </h2>

        <p className="text-muted-foreground mt-4 max-w-2xl">
          Books, research papers, and engineering blogs that help me better
          understand software systems and scalable architecture.
        </p>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {/* BOOKS */}

          <div className="border-border bg-background/40 rounded-3xl border p-6 backdrop-blur-sm">
            <h3 className="text-xl font-semibold">📖 Books</h3>

            <div className="mt-8">
              <p className="text-sm font-medium text-emerald-400">
                Currently Reading
              </p>

              <div className="mt-3 space-y-3">
                {learning.books.current.map((book) => (
                  <a
                    key={book.title}
                    href={book.link}
                    target="_blank"
                    rel="noreferrer"
                    className="border-border block rounded-xl border p-3 transition-colors hover:border-emerald-500/30"
                  >
                    <p>{book.title}</p>
                    <p className="text-muted-foreground mt-1 text-sm">
                      {book.author}
                    </p>
                  </a>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <p className="text-muted-foreground text-sm font-medium">
                Completed
              </p>

              <div className="mt-3 space-y-2">
                {learning.books.completed.map((book) => (
                  <a
                    key={book.title}
                    href={book.link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-muted-foreground hover:text-foreground block text-sm transition-colors"
                  >
                    ✓ {book.title}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* PAPERS */}

          <div className="border-border bg-background/40 rounded-3xl border p-6 backdrop-blur-sm">
            <h3 className="text-xl font-semibold">📄 Research Papers</h3>

            <div className="mt-8">
              <p className="text-sm font-medium text-emerald-400">
                Currently Reading
              </p>

              <div className="mt-3 space-y-3">
                {learning.papers.current.map((paper) => (
                  <a
                    key={paper.title}
                    href={paper.link}
                    target="_blank"
                    rel="noreferrer"
                    className="border-border block rounded-xl border p-3 transition-colors hover:border-emerald-500/30"
                  >
                    {paper.title}
                  </a>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <p className="text-muted-foreground text-sm font-medium">
                Explored
              </p>

              <div className="mt-3 space-y-2">
                {learning.papers.completed.map((paper) => (
                  <a
                    key={paper.title}
                    href={paper.link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-muted-foreground hover:text-foreground block text-sm transition-colors"
                  >
                    ✓ {paper.title}
                  </a>
                ))}

                {learning.papers.completed.length === 0 && (
                  <span className="text-muted-foreground text-sm italic">
                    Nothing completed yet.
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* BLOGS */}

          <div className="border-border bg-background/40 rounded-3xl border p-6 backdrop-blur-sm">
            <h3 className="text-xl font-semibold">📝 Engineering Blogs</h3>

            <div className="mt-8">
              <p className="text-sm font-medium text-emerald-400">Following</p>

              <div className="mt-3 space-y-3">
                {learning.blogs.map((blog) => (
                  <a
                    key={blog.title}
                    href={blog.link}
                    target="_blank"
                    rel="noreferrer"
                    className="border-border hover:text-foreground text-muted-foreground block rounded-xl border p-3 transition-colors hover:border-emerald-500/30"
                  >
                    {blog.title}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
