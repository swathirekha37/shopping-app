import React from 'react';
import SHOP_DATA from '../../pages/shop/shop.data';
import CollectionItem from '../collection-item/CollectionItem.component';
import './collectionPreview.styles.scss'

function CollectionPreview({title,items}) {
  return (
    <div className='collection-preview'>
        <h1 className='title'>{title}</h1>
        <div className='preview'>
            {items.filter((item,idx)=> idx < 4).map((item) => <CollectionItem key={item.id} item={item}/>)}
        </div>
    </div>);
}

export default CollectionPreview;
