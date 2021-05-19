import React from 'react'
import './collection-overview.styles.scss'
import PreviewCollection from '../previewCollection/PreviewCollection'

import { createStructuredSelector } from 'reselect'
import { connect } from 'react-redux'
import { selectCollectionsForPreview } from '../../redux/shop/shop.selector'


const CollectionOverview = ({ collections }) => (
    <div className='collections-overview'>
        {collections.map(({ id, ...otherCollectionProps }) => (
            <PreviewCollection key={id} {...otherCollectionProps} />
        ))}
    </div>
)

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
})

export default connect(mapStateToProps)(CollectionOverview)


