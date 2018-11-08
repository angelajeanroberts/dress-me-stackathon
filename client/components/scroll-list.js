import React from 'react'
import ScrollArea from 'react-scrollbar'
import {Link} from 'react-router-dom'

const ScrollList = props => {
  const {list, type} = props

  return (
    <div className="scroll-element">
      <div>{type}:</div>
      <ScrollArea
        speed={0.8}
        className="scroll-area"
        conentClassName="conent"
        horizontal={false}
      >
        <div className="scroll-list">
          {list.map(item => (
            <Link key={item.id} to={`/${type}/${item.id}`}>
            <div>
              <div>{item.title}</div>
              <div>{item.description}</div>
            </div>
            </Link>
          ))}
        </div>
      </ScrollArea>
    </div>
  )
}

export default ScrollList
