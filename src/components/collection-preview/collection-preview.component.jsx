import React from 'react';
import './collection-preview.styles.scss';
import CollectionItem from './../collection-item/collection-item.component';

const CollectionPreview = (props) => {
    const numberOfPreviews = 4;
    return (
        <div className="collection-preview">
            <h1 className="title">{props.title.toUpperCase()}</h1>
            <div className="preview-item">
                {props.items
                    .filter((item, index) => index < numberOfPreviews)
                    .map((item) => (
                        <CollectionItem key={item.id} item={item}></CollectionItem>
                    ))}
            </div>
        </div>
    );
}

export default CollectionPreview;