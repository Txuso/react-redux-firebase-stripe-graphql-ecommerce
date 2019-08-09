import './collections-overview.component.scss';

import CollectionPreview from '../collection-preview/collection-preview.component';
import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectShopCollections } from '../../redux/shop/shop.selectors';

const CollectionsOverview = ({ collections }) => (
	<div className="collections-overview">
		{collections.map(({ id, ...collectionProps }) => <CollectionPreview key={id} {...collectionProps} />)}
	</div>
);
const mapStateToProps = createStructuredSelector({
	collections: selectShopCollections
});
export default connect(mapStateToProps)(CollectionsOverview);
