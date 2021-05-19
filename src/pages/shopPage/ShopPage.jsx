import React from 'react'
import PreviewCollection from '../../components/previewCollection/PreviewCollection'

import { createStructuredSelector } from 'reselect'
import { connect } from 'react-redux'
import { selectCollections } from '../../redux/shop/shop.selector'


const ShopPage = ({ collections }) => (
    <div className='shop-page'>
        {collections.map(({ id, ...otherCollectionProps }) => (
            <PreviewCollection key={id} {...otherCollectionProps} />
        ))}
    </div>
)

const mapStateToProps = createStructuredSelector({
    collections: selectCollections
})

export default connect(mapStateToProps)(ShopPage)
