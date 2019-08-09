import './collection.component.scss';

import React from 'react';

const CollectionPage = ({ match }) => {
	console.log('ksasaassa', match.params);
	debugger;
	return (
		<div className="collection-page">
			<h2>COLLECTION PAGE</h2>
		</div>
	);
};

export default CollectionPage;
