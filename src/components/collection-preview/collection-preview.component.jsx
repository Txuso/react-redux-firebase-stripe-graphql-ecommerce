import "./collection-preview.component.scss";

import CollectionItem from "../collection-item/collection-item.component";
import React from "react";

const CollectionPreview = ({ title, items }) => (
  <div className="collection-preview">
    <h1 className="title">{title.toUpperCase()}</h1>
    <div className="preview">
      {items
        .filter((item, index) => index < 4)
        .map(({ id, ...otherItemProps }) => (
          <CollectionItem key={id} {...otherItemProps} />
        ))}
    </div>
    <div />
  </div>
);

export default CollectionPreview;
