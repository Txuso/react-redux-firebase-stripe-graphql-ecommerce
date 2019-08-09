import CollectionPreview from '../../components/collection-preview/collection-preview.component';
import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectShopCollections } from '../../redux/shop/shop.selectors';
class ShopPage extends React.Component {
	render() {
		const { collections } = this.props;
		return (
			<div className="shop-page">
				{collections.map(({ id, ...collectionProps }) => <CollectionPreview key={id} {...collectionProps} />)}
			</div>
		);
	}
}
const mapStateToProps = createStructuredSelector({
	collections: selectShopCollections
});
export default connect(mapStateToProps)(ShopPage);
