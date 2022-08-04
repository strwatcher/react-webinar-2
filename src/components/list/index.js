import { cn as bem } from '@bem-react/classname'
import propTypes from 'prop-types'
import React from 'react'
import Item from '../item'
import './style.css'

function List(props) {
  const cn = bem('List')

  return (
    <div className={cn()}>
      {props.items.map(item => (
        <div key={item.code} className={cn('item')}>
          <Item
            item={item}
            onDelete={props.onDeleteItem}
            onAddInCart={props.onItemAddInCart}
          />
        </div>
      ))}
    </div>
  )
}

List.propTypes = {
  items: propTypes.arrayOf(propTypes.object).isRequired,
  onDeleteItem: propTypes.func,
  onItemAddInCart: propTypes.func
}

export default React.memo(List)
