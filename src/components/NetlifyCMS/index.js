import React, { Component } from 'react';
import './setup'
import CMS, { init } from 'netlify-cms/dist/cms';
import 'netlify-cms/dist/cms.css';
import config from './data/config.json';
import DocumentPreview from './components/DocumentPreview';
import EditorYoutube from './components/EditorYoutube';

CMS.init = init;

class NetlifyCMS extends Component {
  componentDidMount () {
    console.log('CMS', CMS)
    CMS.init({config});
    CMS.registerPreviewStyle('static/css/site.css');
    CMS.registerPreviewTemplate('docs', DocumentPreview);
    CMS.registerEditorComponent(EditorYoutube);
  }
  render() {
    return (
      <div id="nc-root" />
    );
  }
}

export default NetlifyCMS;