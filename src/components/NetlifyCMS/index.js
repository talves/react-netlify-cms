import React, { Component } from 'react';
import './setup';
import CMS, { init } from 'netlify-cms/dist/cms';
import 'netlify-cms/dist/cms.css';
import config from './config.json'


class NetlifyCMS extends Component {
  componentDidMount () {
    init({config});
  }
  render() {
    return (
      <div id="nc-root" />
    );
  }
}

export default NetlifyCMS;
