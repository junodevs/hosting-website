/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
*/

import Link from 'next/link';

const entries = [
  [
    { href: '/', label: 'Home', local: true },
    { href: '/sitemap.xml', label: 'Sitemap', local: false },
    { href: '/privacy', label: 'Privacy Policy', local: true },
  ],
  [
    { href: 'https://billing.junohosting.net', label: 'Client Area', local: false },
    { href: '/', label: 'Branding', local: false },
  ],
  [
    { href: 'https://junodevs.tech', label: 'Juno Devs', local: false },
    { href: '/terms', label: 'Terms Of Service', local: true },
    { href: 'https://junohosting.instatus.com', label: 'System Status', local: false },
  ],
];

export default function Footer(): JSX.Element {
  return (
    <footer className="bg-black text-white font-medium px-8 py-6">
      <section className="grid grid-cols-3 max-w-lg text-md">
        {entries.map((array) => array.map(({ label, href }) => (
          <div key={label} className="gap-2">
            <Link href={href} passHref>
              <a
                href="overwrite"
                className="
                      hover:text-rose-500
                      hover:underline
                      transition
                    "
                rel="noreferrer noopener"
              >
                {label}
              </a>
            </Link>
          </div>
        )))}
      </section>
      <section id="socials" className="flex py-4">
        <a
          href="https://twitter.com/junohosting"
          className="mr-2 transition hover:text-rose-500"
          aria-label="Twitter"
          rel="noreferrer noopener"
          target="_blank"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="feather feather-twitter"
            viewBox="0 0 24 24"
          >
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
          </svg>
        </a>
        <a
          href="https://github.com/junodevs"
          className="mr-2 transition hover:text-rose-500"
          aria-label="Github"
          rel="noreferrer noopener"
          target="_blank"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="feather feather-github"
            viewBox="0 0 24 24"
          >
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" />
          </svg>
        </a>
        <a
          href="https://discord.gg/we3KvqrQhB"
          className="mr-2 transition hover:text-rose-500"
          aria-label="Discord"
          rel="noreferrer noopener"
          target="_blank"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="feather feather-message-circle"
            viewBox="0 0 24 24"
          >
            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
          </svg>
        </a>
        <a
          href="mailto:hi@junohosting.net"
          className="mr-2 transition hover:text-rose-500"
          aria-label="E-Mail"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="feather feather-mail"
            viewBox="0 0 24 24"
          >
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
            <path d="M22 6L12 13 2 6" />
          </svg>
        </a>
      </section>
      <section className="pb-4 text-gray-500 text-sm">
        Built in the United States in Illinois, Wisconsin, and New Jersey.
        <p>
          Copyright ©
          {' '}
          {new Date().getFullYear()}
          {' '}
          Juno Devs. All Rights Reserved.
        </p>
      </section>
    </footer>
  );
}
