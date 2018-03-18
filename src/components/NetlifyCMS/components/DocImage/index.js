import React from 'react'

export default ({ src }) => {
  let returnContainer = ('')
  if (src) {
    returnContainer = (
      <div style={{
        backgroundImage: `url(${src})`,
        height: '20rem',
      }}
      />
    )
  }
  return returnContainer
}
