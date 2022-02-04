import React, { Component } from 'react';
import CollectionPreview from '../../components/collections/CollectionPreview.component';
import SHOP_DATA from './shop.data';

export class Shop extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         collections : SHOP_DATA
      }
    }
    
  render() {
    //   const {collections} = this.state
    return (
        <div>
            {this.state.collections.map(({id,...otherCollectionProps}) => <CollectionPreview key={id} {...otherCollectionProps}/>)}
        </div>
    );
  }
}

export default Shop;
