import React from 'react'

import DocImage from '../DocImage'

export default class DocumentPreview extends React.Component {
  render () {
    const { entry } = this.props
    const image = entry.getIn(['data', 'image'])
    const title = entry.getIn(['data', 'title'])
    const body = this.props.widgetFor('body')
    return (
      <div>
        <DocImage src={image} />
        <div span="12">
          <h1 style={{ textAlign: 'center' }} use="display2">{title}</h1>
          <div style={{ padding: '30px' }}>
            { body }
          </div>
        </div>
      </div>
    )
  }
}