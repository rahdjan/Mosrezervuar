interface PageHeaderProps {
  title: string;
  description?: string;
  eyebrow?: string;
}

export function PageHeader({ title, description, eyebrow }: PageHeaderProps) {
  return (
    <section className="border-b border-line bg-steel-dark">
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-8 lg:py-16">
        {eyebrow && (
          <p className="font-mono text-xs uppercase tracking-widest text-rust">{eyebrow}</p>
        )}
        <h1 className="mt-2 font-display text-4xl font-black uppercase tracking-tight text-white sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        {description && (
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-graphite">{description}</p>
        )}
      </div>
    </section>
  );
}
