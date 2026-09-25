'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react';

const links = [['Home', '/'], ['Services', '/#services'], ['Work', '/#work'], ['About Us', '/#about'], ['Contact', '/#contact']];

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-2 text-[17px] font-extrabold">
      <span className="grid h-8 w-8 place-items-center rounded-full bg-orange text-sm text-white">C</span>
      <span className={light ? 'text-white' : 'text-purple'}>CreativeHQ.</span>
    </Link>
  );
}

export function Nav() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const [hash, setHash] = useState('');

  useEffect(() => {
    setHash(window.location.hash);
  }, [path]);

  const active =
  path.startsWith('/work')
    ? 'Work'
    : path !== '/'
      ? ''
      : hash === '#services'
        ? 'Services'
        : hash === '#work'
          ? 'Work'
          : hash === '#about'
            ? 'About Us'
            : hash === '#contact'
              ? 'Contact'
              : 'Home';

  const cls = (l: string) =>
    `rounded-full px-4 py-2 text-[13px] font-semibold ${
      active === l
        ? 'bg-orange text-white'
        : 'text-ink/70 hover:text-ink'
    }`;

  const handleNavClick = (label: string, href: string) => {
    setHash(href.includes('#') ? href.substring(href.indexOf('#')) : '');
    setOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 px-5 pt-4">
      <div className="mx-auto flex max-w-[1130px] items-center justify-between rounded-full border border-black/10 bg-white/90 py-2 pl-4 pr-2 shadow-sm backdrop-blur">
        <Logo />

        <nav className="hidden items-center gap-1 rounded-full bg-cream p-1 lg:flex">
          {links.map(([l, h]) => (
            <Link
              key={l}
              href={h}
              onClick={() => handleNavClick(l, h)}
              className={cls(l)}
            >
              {l}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/#contact"
            onClick={() => setHash('#contact')}
            className="flex items-center gap-2 rounded-full bg-purple py-2 pl-5 pr-2 text-[13px] font-bold text-white"
          >
            Let&apos;s Talk
            <span className="grid h-7 w-7 place-items-center rounded-full bg-orange">
              <ArrowUpRight size={14} />
            </span>
          </Link>

          <button
            aria-label="Menu"
            onClick={() => setOpen(!open)}
            className="grid h-10 w-10 place-items-center rounded-full bg-cream lg:hidden"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="mx-auto mt-2 flex max-w-[1130px] flex-col rounded-3xl border border-black/10 bg-white p-2 lg:hidden">
          {links.map(([l, h]) => (
            <Link
              key={l}
              href={h}
              onClick={() => handleNavClick(l, h)}
              className={cls(l) + ' py-3'}
            >
              {l}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}

const cols: [string, string[]][] = [
  ['Studio', ['Selected Work', 'Capabilities', 'Philosophy', 'Framework']],
  ['Intel', ['Leadership', 'Whitepapers', 'Case Archives', 'Disputes']],
];

export function Footer() {
  return (
    <footer className="mt-24 bg-night text-white">
      <div className="mx-auto grid max-w-[1186px] gap-10 px-5 pb-10 pt-14 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div>
          <Logo light />
          <p className="mt-4 max-w-[300px] text-sm leading-relaxed text-white/60">Executive-grade digital product architecture, structural brand engineering, and high-impact enterprise frameworks.</p>
        </div>
        {cols.map(([h, items]) => (
          <div key={h}>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white/50">{h}</h4>
            <ul className="mt-4 space-y-3 text-sm text-white/80">{items.map((i) => <li key={i}><Link href="/#work" className="hover:text-white">{i}</Link></li>)}</ul>
          </div>
        ))}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest text-white/50">Direct Contact</h4>
          <p className="mt-4 text-sm leading-relaxed text-white/80">Initiate an executive strategic review or RFP discussion.</p>
          <a href="mailto:creativehq@gmail.com" className="mt-3 inline-block text-sm font-semibold text-orange">creativehq@gmail.com</a>
        </div>
      </div>
      <div className="mx-auto flex max-w-[1186px] flex-col gap-3 border-t border-white/10 px-5 py-6 text-xs text-white/50 sm:flex-row sm:justify-between">
        <p>© 2026 CreativeHQ Studio. All Rights Reserved.</p>
        <div className="flex gap-6"><span>Privacy Policy</span><span>Terms of Service</span><span>Legal Notice</span></div>
      </div>
    </footer>
  );
}
