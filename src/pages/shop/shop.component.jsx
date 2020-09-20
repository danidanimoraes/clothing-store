import React from 'react';
import { SHOP_DATA } from './shopdata';
import './shop.styles.scss'
import CollectionPreview from '../../components/collection-preview/collection-preview.component';

class ShopPage extends React.Component {
    constructor() {
        super();
        this.state = {
            collections: SHOP_DATA
        }
    }

    render() {
        const { collections } = this.state;
        return (
            <div>
                <div>SHOP PAGE</div>
                {collections.map((collection) =>
                    <CollectionPreview key={collection.id} {...collection}></CollectionPreview>
                )}
            </div>
        );
    }
}

export default ShopPage;