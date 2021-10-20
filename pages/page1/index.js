
import React from 'react'
import Link from 'next/link'

export default class Index extends React.Component {
  render () {
    return (
      <div>
        <Link
          href={`/page2`}
          as={`/page2?orderId=20`}
        >
          <a> {'Go to /page2#foo'} </a>
        </Link>
      </div>
    )
  }
}