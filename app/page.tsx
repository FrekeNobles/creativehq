/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import type { LucideIcon } from 'lucide-react';
import { Award, ThumbsUp, Star, Globe, Compass, LayoutGrid, TrendingUp, Code2, ArrowRight, ArrowUpRight, CheckCircle2, Target, Search, Mail, Zap } from 'lucide-react';
import { projects, picture } from '@/lib/data';



const stats: [LucideIcon, string, string][] = [
  [Award, '5+', 'Years Experience'], [ThumbsUp, '120+', 'Projects Completed'], [Star, '98%', 'Client Satisfaction'], [Globe, '8+', 'Countries Worked'],
];
const services: [LucideIcon, string, string, string][] = [
  [Compass, 'Brand Identity', 'Positioning, visual systems, naming and messaging architectures designed to elevate enterprise authority and command premium market value.', 'Strategy & Identity'],
  [LayoutGrid, 'Product Design', 'High-performance digital products engineered with typographic rigor, seamless user flows, mobile mastery and conversion clarity.', 'Interface & Systems'],
  [TrendingUp, 'Commercial Growth', 'ICP discovery, outbound acquisition systems and high-velocity conversion funnels designed to turn visitors into qualified pipeline.', 'Pipeline Engine'],
  [Code2, 'Frontend Build', 'Modern frontend code, micro-interactions, headless CMS integrations and performance scores with 100% technical clarity.', 'Clean Architecture'],
];
const questions: [string, string, string][] = [
  ['Who is this for?', 'Understanding people, market models, existing habits and cognitive expectations before a single pixel is placed.', 'Empathy • Segmentation'],
  ['What problem are we solving?', 'Finding the underlying commercial and customer pain rather than money-making aesthetic symptoms.', 'Root Cause • Validation'],
  ['Why should they care?', 'Crafting an unmistakably differentiated value proposition that cuts straight through industry noise.', 'Clarity • Positioning'],
  ['What do they do next?', 'Designing frictionless pathways to action, qualified engagement, contract execution and long-term retention.', 'Conversion • Outcomes'],
];
const opportunities: [LucideIcon, string, string][] = [
  [Target, 'Market & ICP', 'Pinpoint high-intent enterprise buyers and build laser-focused ideal customer profiles before launching touchpoints.'],
  [Search, 'Prospecting', 'Strategic data scraping, verified contacts and algorithmic territory mapping to keep outbound pipeline healthy.'],
  [Mail, 'Outreach', 'Hyper-personalised executive messaging that solves specific factors, using a human tone instead of boilerplate spam.'],
  [Zap, 'Conversion', 'Landing environments engineered to validate authority, elevate credibility and trigger immediate booking.'],
];
const process: [string, string][] = [
  ['Understand', 'Stakeholder audits, commercial workshops, customer friction points and competitor baseline mapping.'],
  ['Position', 'Information architecture, differentiation framing, clear messaging pillars and key user flows.'],
  ['Architect', 'Art direction, component design systems, high-fidelity prototypes and rigorous typographic hierarchies.'],
  ['Engineer', 'Performance-first frontend builds, fluid micro-interactions, responsive testing and seamless CMS hooks.'],
  ['Optimize', 'Iterative CRO tests, funnel analytics, conversion tracking and ongoing commercial expansion.'],
];
const team: [string, string][] = [
  ['Strategy & Growth', 'Translating corporate ambitions into coherent user segments, distinct messaging architectures and commercial outcome frameworks.'],
  ['Art & Design', 'Typographic discipline, calculated visual balance and intuitive interfaces that project authority and elevate perception.'],
  ['Technical Engineering', 'Clean semantic markup, blazing runtime speeds, solid micro-interactions and resilient architectural foundations for scale.'],
];

const h2 = 'text-[34px] font-extrabold leading-[1.1] tracking-tight sm:text-5xl';
const ArrowDot = ({ dark = false }: { dark?: boolean }) => (
  <span className={`grid h-7 w-7 shrink-0 place-items-center rounded-full text-white ${dark ? 'bg-purple' : 'bg-orange'}`}><ArrowUpRight size={14} /></span>
);

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="mx-auto mt-2 grid max-w-[1440px] items-center gap-6 pl-5 sm:pl-10 lg:grid-cols-[1.15fr_1fr] lg:pl-[76px]">
        <div className="pr-5 pt-8 lg:pr-0 lg:pt-0">
          <h1 className="text-[40px] font-extrabold leading-[1.05] tracking-tight sm:text-[52px] lg:text-[64px]">
            We turn business problems into <span className="text-orange">digital experiences</span> that move people into action.
          </h1>
          <p className="mt-6 max-w-[520px] text-[15px] leading-relaxed text-ink/70">
            We help ambitious businesses build stronger brands, clearer websites and high-converting digital products — backed by strategy, user experience and rigorous commercial thinking.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="#work" className="flex items-center gap-3 rounded-full bg-orange py-2 pl-6 pr-2 text-sm font-bold text-white transition-all duration-300 hover:gap-4 ">View Selected Work <ArrowDot dark /></Link>
            <Link href="#contact" className="flex items-center gap-2 rounded-full border border-black/15 bg-white px-6 py-3 text-sm font-bold transition-all duration-300 hover:gap-4 ">Start a conversation <ArrowUpRight size={14} className='text-orange' /></Link>
          </div>
        </div>
       <div className="relative h-[420px] overflow-hidden rounded-tl-[80px] border-l-4 border-t-4 border-orange sm:h-[560px] lg:mt-28 lg:h-[740px] lg:rounded-tl-[180px]"> 
        <img src="images/heroimage.png" alt="Designer working on a laptop" className="h-full w-full object-cover" /> 
        <div className="absolute inset-x-0 bottom-0 h-[28%] bg-gradient-to-t from-[#FAF8F4] via-white/75 to-transparent" /> 
      </div>
      </section>

      {/* Stats */}
      <section className="wrap relative z-10 -mt-12 grid grid-cols-2 gap-6 rounded-3xl border border-orange bg-sun p-6 lg:-mt-20 lg:grid-cols-4 lg:p-8">
        {stats.map(([Icon, n, l]) => (
          <div key={l} className="flex flex-col items-center text-center">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-white text-orange"><Icon size={16} /></span>
            <p className="mt-2 text-3xl font-extrabold text-purple sm:text-4xl">{n}</p>
            <p className="text-xs font-medium text-ink/60">{l}</p>
          </div>
        ))}
      </section>

      {/* What we do */}
      <section id="services" className="wrap mt-16 rounded-[28px] bg-purple p-6 sm:p-10 lg:mt-24 lg:p-14">
        <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl">What We Do</h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(([Icon, t, d, tag], i) => (
            <div key={t} className="flex flex-col rounded-2xl transition-all duration-300 hover:scale-[103.5%] border border-white/10 bg-purple-light/60 p-5">
              <div className="relative flex items-center justify-center">
                <span className="absolute left-0 grid h-5 w-8 place-items-center rounded-r-lg bg-[#FFFDB4] text-xs font-bold text-orange">
                  0{i + 1}
                </span>

                <span className="grid h-10 w-10 place-items-center rounded-xl bg-orange/15 text-orange">
                  <Icon size={18} />
                </span>
            </div>
              <h3 className="mt-8 text-lg font-bold text-white">{t}</h3>
              <p className="mt-3 flex-1 text-[13px] leading-relaxed text-white/70">{d}</p>
              <div className="mt-6 flex items-center justify-center border-t border-white/10 pt-4 text-xs font-semibold text-white/80">{tag}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Selected projects */}
      <section id="work" className="wrap mt-20 lg:mt-28">
        <h2 className={h2}>Selected Projects</h2>
        <div className="mt-10 space-y-8">
          {projects.map((p, i) => {
  const flip = i === 1;

  return (
    <article
      key={p.slug}
      className="group grid items-center gap-8 rounded-3xl border border-black/10 bg-white p-6 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-black/15 hover:shadow-[0_18px_45px_rgba(0,0,0,0.08)] sm:p-8 lg:grid-cols-2 lg:gap-14 lg:p-12"
    >
      <div className={flip ? "lg:order-2" : ""}>
        <h3 className="text-[26px] font-extrabold leading-tight tracking-tight sm:text-[30px]">
          {p.title}
        </h3>

        <p className="mt-3 text-xs font-semibold text-orange">
          {p.tags}
        </p>

        <p className="mt-4 text-[14px] leading-relaxed text-ink/65">
          {p.blurb}
        </p>

        <ul className="mt-6 space-y-3 rounded-xl bg-cream p-4">
          {p.points.map((x) => (
            <li
              key={x}
              className="flex items-center gap-2 text-[13px] font-semibold"
            >
              <CheckCircle2
                size={16}
                className="shrink-0 text-orange"
              />
              {x}
            </li>
          ))}
        </ul>
      </div>

      <div className={flip ? "lg:order-1" : ""}>
        <div className="overflow-hidden rounded-2xl bg-black/[0.04] p-4">
          <img
            src={p.img}
            alt={p.title}
            className="aspect-[4/3] w-full rounded-xl object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]"
          />
        </div>

        <div
          className={`mt-4 flex ${
            flip ? "justify-start" : "justify-end"
          }`}
        >
          <Link
            href={`/work/${p.slug}`}
            className="flex items-center gap-2 text-sm font-bold text-purple transition-all duration-300 hover:gap-3"
          >
            View Case Study
            <ArrowRight
              size={14}
              className="text-orange transition-transform duration-300 group-hover:translate-x-0.5"
            />
          </Link>
        </div>
      </div>
    </article>
  );
})}
        </div>
        <div className="mt-10 flex justify-center">
          <Link href="#work" className="flex items-center gap-3 rounded-full bg-orange py-2 pl-6 pr-2 text-sm font-bold text-white transition-all duration-300 hover:gap-4 ">View More Of Our Projects <ArrowDot dark /></Link>
        </div>
      </section>

      {/* Process */}
      <section
        id="about"
        className="wrap mt-20 rounded-[28px] bg-purple p-6 sm:p-8 lg:mt-28 lg:p-10"
      >
        <h2 className={`${h2} max-w-[520px] text-white`}>
          Good design should do more than look good
        </h2>

        <p className="mt-3 max-w-[520px] text-sm text-white/70">
          Before we design anything, we ask the questions that make the work matter
          commercially and emotionally.
        </p>

        <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {questions.map(([t, d, tag], i) => (
            <div
              key={t}
              className="flex flex-col rounded-2xl transition-all duration-300 hover:scale-[103.5%] border border-white/10 bg-white/[0.06] p-4"
            >
              <span className="text-3xl font-extrabold text-[#FFFDB4] lg:text-center">
                0{i + 1}
              </span>

              <h3 className="mt-3 font-bold text-white">
                {t}
              </h3>

              <p className="mt-1.5 flex-1 text-[12px] leading-relaxed text-white/65">
                {d}
              </p>

              <p className="mt-4 border-t border-white/10 pt-2.5 text-center text-[10px] font-semibold text-white/50">
                {tag}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-4 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-[10px] font-semibold uppercase tracking-widest text-white/70">
          <span className="text-orange">Systematic Pipeline:</span>

          {["Research", "Strategy", "Design", "Build", "Grow"].map((s, i) => (
            <span key={s}>
              {i > 0 && <span className="mr-3 text-white/30">›</span>}
              {s}
            </span>
          ))}
        </div>
      </section>

      {/* Opportunities */}
      <section className="wrap mt-20 grid items-center gap-10 lg:mt-28 lg:grid-cols-[1fr_1.15fr]">
        <div>
          <h2 className={h2}>Turning business problems into commercial opportunities</h2>
          <p className="mt-6 max-w-[460px] text-sm leading-relaxed text-ink/65">Design does not exist in a vacuum. A high-converting digital presence must connect directly with outbound acquisition, tailored customer journeys, and executive pipeline visibility.</p>
          <p className="mt-4 max-w-[460px] text-sm leading-relaxed text-ink/65">By harmonizing environments with bespoke systems, we turn passive visitors into qualified commercial conversations that yield measurable contract value.</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {opportunities.map(([Icon, t, d]) => (
            <div key={t} className="rounded-2xl border border-black/10 bg-white p-5">
              <span className="grid h-9 w-9 place-items-center rounded-lg bg-purple/10 text-purple"><Icon size={16} /></span>
              <h3 className="mt-4 font-bold">{t}</h3>
              <p className="mt-2 text-[13px] leading-relaxed text-ink/60">{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="wrap mt-20 rounded-3xl border border-black/10 bg-white p-6 sm:p-10 lg:mt-28 lg:p-14">
        <h2 className={`${h2} max-w-[600px]`}>From the first question to the final experience</h2>
        <div className="mt-12 grid gap-y-8 sm:grid-cols-2 lg:grid-cols-5">
          {process.map(([t, d]) => (
            <div key={t} className="relative border-t-2 border-purple pt-6 sm:pr-6">
              <span className="absolute -top-[5px] left-0 h-2 w-2 rounded-full bg-orange" />
              <h3 className="font-bold">{t}</h3>
              <p className="mt-2 text-[13px] leading-relaxed text-ink/60">{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="wrap mt-20 lg:mt-28">
        <h2 className={`${h2} max-w-[760px] !text-3xl sm:!text-4xl`}>A small team combining different disciplines around one goal</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {team.map(([t, d]) => (
            <div key={t} className="rounded-2xl border border-black/10 bg-white p-6">
              <h3 className="font-bold">{t}</h3>
              <p className="mt-3 text-[13px] leading-relaxed text-ink/60">{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section
        id="contact"
        className="wrap mt-20 rounded-[28px] bg-orange p-7 text-white sm:p-10 lg:mt-28 lg:p-12"
      >
        <div className="relative z-10 flex flex-col justify-between gap-8 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-semibold text-white/80">
              Let&apos;s Work Together
            </p>

            <h2 className="mt-3 max-w-[640px] text-4xl font-extrabold leading-[0.95] tracking-tight sm:text-5xl lg:text-6xl">
              Have a project in mind? Let&apos;s create{" "}
              <span className="text-night">something bold</span>
            </h2>

            <p className="mt-5 max-w-[520px] text-sm leading-relaxed text-white/85">
              Whether you need a stronger brand, a better website or a clearer path
              to customers, let&apos;s talk about what you&apos;re trying to achieve.
            </p>
          </div>

          <div className="flex shrink-0 flex-col items-start gap-3 sm:items-end">
            <a
              href="mailto:creativehq@gmail.com"
              className="flex w-fit items-center gap-3 rounded-full bg-purple py-2 pl-6 pr-2 text-sm font-bold transition-all duration-300 hover:gap-4"
            >
              Let&apos;s Discuss Your Project
              <ArrowDot />
            </a>

            <span className="text-xs text-white/85">
              Typical response in less than 24 hours
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}
