import React, { Component } from 'react';
import { init, registry } from 'netlify-cms/dist/init';
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
