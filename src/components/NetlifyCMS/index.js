import React, { Component } from 'react';
import CMS from 'netlify-cms/dist/cms';
import 'netlify-cms/dist/cms.css';
import config from './config.json'

class NetlifyCMS extends Component {
  componentDidMount () {
    CMS.init({config});
  }
  componentWillUnmount () {
    console.log('NetlifyCMS componentWillUnmount')
    CMS.reset();
  }
  render() {
    return (
      <div id="nc-root" />
    );
  }
}

export default NetlifyCMS;
