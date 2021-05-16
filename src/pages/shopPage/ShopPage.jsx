import React, { Component } from 'react'
import PreviewCollection from '../../components/previewCollection/PreviewCollection'
import  SHOP_DATA  from './ShopData'

export class ShopPage extends Component {

    constructor(props) {
        super(props)

        this.state = {
            collections: SHOP_DATA
        }
    }

    render() {

        const { collections } = this.state;

        return (
            <div className='shop-page'>
                {collections.map(({ id, ...otherCollectionProps }) => (
                    <PreviewCollection key={id} {...otherCollectionProps} />
                ))}

               shop page

            </div>
        )
    }
}

export default ShopPage
