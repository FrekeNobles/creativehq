/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';
import { projects, picture } from '@/lib/data';

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const p = projects.find((x) => x.slug === params.slug);
  return { title: p ? `${p.title} — CreativeHQ Case Study` : 'Case Study — CreativeHQ' };
}

export default function CaseStudy({ params }: { params: { slug: string } }) {
  const i = projects.findIndex((x) => x.slug === params.slug);
  if (i < 0) notFound();
  const p = projects[i];
  const next = projects[(i + 1) % projects.length];
  const meta = [['Client', p.client], ['Role', p.role], ['Timeline', p.timeline], ['Year', '2026']];

  return (
    <main>
      <section className="wrap pt-10 lg:pt-16">
        <Link href="/#work" className="inline-flex items-center gap-2 text-sm font-bold text-purple"><ArrowLeft size={14} className="text-orange" />All projects</Link>
        <p className="mt-8 text-xs font-semibold text-orange">{p.tags}</p>
        <h1 className="mt-3 max-w-[880px] text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl">{p.title}</h1>
        <p className="mt-6 max-w-[640px] text-[15px] leading-relaxed text-ink/70">{p.blurb}</p>
        <dl className="mt-10 grid grid-cols-2 gap-6 border-y border-black/10 py-6 lg:grid-cols-4">
          {meta.map(([k, v]) => (
            <div key={k}><dt className="text-xs font-semibold text-ink/50">{k}</dt><dd className="mt-1 font-bold">{v}</dd></div>
          ))}
        </dl>
        <img
          src={p.caseStudyImages.hero}
          alt={p.title}
          className="mt-10 aspect-[16/9] w-full rounded-t-3xl object-cover"
        />
      </section>

      <section className="wrap mt-16 grid gap-8 lg:mt-24 lg:grid-cols-[1fr_2fr] lg:gap-16">
        <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">The challenge</h2>
        <p className="text-base leading-relaxed text-ink/70">{p.challenge}</p>
      </section>

      <section className="wrap mt-16 lg:mt-24">
        <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Our approach</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {p.approach.map((a, n) => (
            <div key={a.t} className="rounded-2xl border border-black/10 bg-white p-6 transition-all duration-300 hover:scale-[103.5%] ">
              <span className="text-3xl font-extrabold text-orange">0{n + 1}</span>
              <h3 className="mt-4 font-bold">{a.t}</h3>
              <p className="mt-2 text-[13px] leading-relaxed text-ink/60">{a.d}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 grid gap-5 sm:grid-cols-2">
  {p.caseStudyImages.secondary.map((image) => (
    <img
      key={image}
      src={image}
      alt=""
      className="aspect-[10/7] w-full rounded-2xl object-cover"
    />
  ))}
</div>
      </section>

      <section className="wrap mt-16 rounded-[28px] bg-purple p-8 text-white sm:p-12 lg:mt-24 lg:p-14">
        <h2 className="text-3xl font-extrabold tracking-tight sm:text-5xl">The results</h2>
        <div className="mt-10 grid gap-8 sm:grid-cols-3">
          {p.results.map((r) => (
            <div key={r.l} className="border-t border-white/20 pt-5">
              <p className="text-5xl font-extrabold text-orange">{r.k}</p>
              <p className="mt-2 text-sm text-white/70">{r.l}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="wrap mt-16 lg:mt-24">
        <Link href={`/work/${next.slug}`} className="group flex flex-col gap-4 rounded-3xl border border-black/10 bg-white p-6 sm:flex-row sm:items-center sm:justify-between sm:p-10">
          <div>
            <p className="text-xs font-semibold text-ink/50">Next project</p>
            <p className="mt-2 max-w-[560px] text-2xl font-extrabold leading-tight sm:text-3xl">{next.title}</p>
          </div>
          <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-orange text-white transition-transform group-hover:translate-x-1"><ArrowRight size={18} /></span>
        </Link>
      </section>

      <section className="container  wrap mt-16 lg:mt-24">
        <div className="rounded-2xl bg-orange p-7 text-white sm:p-10 md:p-12">
          <p className="text-[10px] font-bold uppercase tracking-[.15em] text-white/60">Have a similar problem?</p>
          <div className="mt-3 flex flex-col justify-between gap-7 sm:flex-row sm:items-end">
            <h2 className="display max-w-2xl text-4xl font-bold leading-[.92] sm:text-5xl">Let&apos;s build the digital experience your business needs.</h2>
            <a href="mailto:creativehq@gmail.com" className="inline-flex w-fit items-center gap-2 rounded-full bg-purple px-5 py-3 text-[11px] font-bold transition-all duration-300 hover:gap-4">
          Start a conversation 
          <ArrowUpRight size={13} />
          </a>
          </div>
        </div>
      </section>
    </main>
  );
}
