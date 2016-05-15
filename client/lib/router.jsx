import React from 'react';
import ReactDOM from 'react-dom';
import {mount} from 'react-mounter';


import {MainLayout} from '../layouts/MainLayout.jsx';
import HomeWrapper from '../audioExplorer/HomeWrapper.jsx';
import NowPlayingWrapper from '../audioExplorer/NowPlayingWrapper.jsx';


FlowRouter.route('/', {
  action(){
    mount(MainLayout, {content:(<HomeWrapper />)})
  }
});
FlowRouter.route('/nowplaying/:id/:name', {
  action(){
    mount(MainLayout, {content:(<NowPlayingWrapper />)})
  }
});
