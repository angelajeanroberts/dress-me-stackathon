import React from 'react'
import ScrollArea from 'react-scrollbar'
import {Link} from 'react-router-dom'
import {Panel} from 'react-bootstrap'

const ScrollList = props => {
  const list = props.list
  const type = props.type

  return (
    <div className="scroll-element">
      <ScrollArea
        speed={0.8}
        className="scroll-area"
        conentClassName="conent"
        horizontal={false}
      >
        <div className="scroll-list">
          {list.map(item => (
            <Link key={item.id} to={`/${type}/${item.id}`}>
            <Panel>
              <Panel.Heading>
              <Panel.Title componentClass="h3">{item.title}</Panel.Title></Panel.Heading>
              <Panel.Body>{item.description}</Panel.Body>
            </Panel>
            </Link>
          ))}
        </div>
      </ScrollArea>
    </div>
  )
}

export default ScrollList
