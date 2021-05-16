import React from 'react'
import CustomButton from '../customButton/CustomButton'
import './collectionItem.styles.scss'

import { connect } from 'react-redux'
import { addItem } from '../../redux/cart/cart.action'

const CollectionItem = ({ item, addItem }) => {


    return (
        <div className='collection-item'>
            <div className="image"
                style={{ backgroundImage: `url(${item.imageUrl})` }} />
            <div className="collection-footer">
                <span className="name">{item.name}</span>
                <span className="price">{item.price}</span>
            </div>
            <CustomButton onClick={() => addItem(item)} inverted>add to cart</CustomButton>
        </div>
    )
}


const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem)
