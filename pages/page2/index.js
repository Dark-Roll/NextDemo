import React from 'react'
import Link from 'next/link'

export default class Page2 extends React.Component {
  static getInitialProps(props) {
    console.log('Page2: getInitialProps')
    console.log('asPath:', props.asPath)
    return {}
  }

  componentDidUpdate() {
    console.log('Page2: componentDidUpdate')
  }

  render () {
    return (
      <div>
        <div>
          <Link
            href={`/page2`}
            as={`/page2?orderId=20`}
            shallow
          >
            <a> This link keeps calling getInitialProps </a>
          </Link>
        </div>
        <div>
          <Link
            href={`/page2`}
            as={`/page2?pageId=20`}
            shallow
          >
            <a> This links has a different asPath and works </a>
          </Link>
        </div>
      </div>
    )
  }
}