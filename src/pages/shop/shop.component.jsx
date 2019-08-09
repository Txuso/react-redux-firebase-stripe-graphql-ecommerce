import CollectionPage from '../collection/collection.component';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import React from 'react';
import { Route } from 'react-router-dom';

const ShopPage = ({ match }) => {
	console.log('aasdasdasd', match);

	return (
		<div className="shop-page">
			<Route exact path={`${match.path}`} component={CollectionsOverview} />
			<Route path={`${match.path}/:collectionId`} component={CollectionPage} />
		</div>
	);
};

export default ShopPage;
