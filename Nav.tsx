const links = [
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Case studies" },
  { href: "#skills", label: "Capabilities" },
  { href: "#roadmap", label: "In progress" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-rule bg-paper/90 backdrop-blur">
      <div className="mx-auto flex max-w-report items-center justify-between px-6 py-4 sm:px-10">
        <a href="#top" className="font-serif text-lg text-ink">
          Harshit Raman
        </a>
        <nav className="hidden gap-6 font-sans text-sm text-muted md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href="https://www.linkedin.com/in/harshitraman/"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-sm border border-ink px-3 py-1.5 font-sans text-sm text-ink transition-colors hover:bg-ink hover:text-paper"
        >
          LinkedIn
        </a>
      </div>
    </header>
  );
}
