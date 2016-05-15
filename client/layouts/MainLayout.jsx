import React from 'react';
import ReactDOM from 'react-dom';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

import SideNav from '../audioExplorer/SideNav.jsx';


export const MainLayout = ({content}) => (


  <div className="main-layout">
    <SideNav />
      <main>
        {content}
      </main>
  </div>
)
