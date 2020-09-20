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
                    .map(({ id, ...itemProps }) => (
                        <CollectionItem key={id} {...itemProps}></CollectionItem>
                    ))}
            </div>
        </div>
    );
}

export default CollectionPreview;