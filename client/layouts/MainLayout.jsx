import React from 'react';

import SideNav from '../audioExplorer/SideNav.jsx'
export const MainLayout = ({content}) => (


  <div className="main-layout">
    <SideNav />
    <div className="container">
      <main>
        {content}
      </main>
    </div>

  </div>
)
