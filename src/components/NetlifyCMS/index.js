import React, { Component } from 'react';

import CMS from 'netlify-cms/dist/cms';
import 'netlify-cms/dist/cms.css';
import config from './data/config.json'

class NetlifyCMS extends Component {
  componentDidMount () {
    CMS.init({config});
  }
  render() {
    return (
      <div id="nc-root" />
    );
  }
}

export default NetlifyCMS;