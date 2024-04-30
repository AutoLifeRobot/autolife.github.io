import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <main style={{ flex: '1 0 auto' }} className="p-4">
        <header>
          <h1 className="text-4xl font-bold mb-4">Autolife Workflow</h1>
        </header>

        <section>
          <h2 className="text-2xl font-bold mb-2">Introduction</h2>
          <p className="mb-4">
            Welcome to our Autolife! This site will guide you through our workflow and how we use Git and GitHub for collaboration.
          </p>
          <br />

          <Link href="/branch-naming">
            <h2 className="text-2xl font-bold mb-2">
              <span style={{ display: 'inline-block', width: '30px', textAlign: 'right' }}>1.&nbsp;</span>
              Git Branch Naming Convention
            </h2>
          </Link>
          <br />

          <Link href="/collaboration-sop">
            <h2 className="text-2xl font-bold mb-2">
              <span style={{ display: 'inline-block', width: '30px', textAlign: 'right' }}>2.&nbsp;</span>
              Git Collaboration SOP
            </h2>
          </Link>
          <br />

          <Link href="/coding-convention">
            <h2 className="text-2xl font-bold mb-2">
              <span style={{ display: 'inline-block', width: '30px', textAlign: 'right' }}>3.&nbsp;</span>
              Coding Convention
            </h2>
          </Link>
          <br />

        </section>
      </main>

      <footer style={{ flexShrink: '0' }}>
        <p>© 2024 Autolife</p>
      </footer>
    </div>
  );
}