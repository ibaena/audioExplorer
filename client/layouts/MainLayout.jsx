import React from 'react';


export const MainLayout = ({content}) => (
  <div className="main-layout">
    <header>
      <h2>audioRover</h2>
      <nav>
        <a href="/">Menu</a>
        <a href="/about">Menu</a>

      </nav>
    </header>
    <main>
      {content}
    </main>
  </div>
)
