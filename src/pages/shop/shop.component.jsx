import CollectionPage from "../collection/collection.component";
import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import React from "react";
import { Route } from "react-router-dom";
import WithSpinner from "../../components/with-spinner/with-spinner";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { getCollectionsAsync } from "../../redux/shop/shop.actions";
import { selectIsCollectionLoading } from "../../redux/shop/shop.selectors";

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionsPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
  componentDidMount() {
    const { getCollectionsAsync } = this.props;
    getCollectionsAsync();
  }

  render() {
    const { match, isCollectionLoading } = this.props;

    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          render={props => (
            <CollectionsOverviewWithSpinner
              isLoading={isCollectionLoading}
              {...props}
            />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={props => (
            <CollectionsPageWithSpinner
              isLoading={isCollectionLoading}
              {...props}
            />
          )}
        />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  isCollectionLoading: selectIsCollectionLoading
});

const mapDispatchToProps = dispatch => ({
  getCollectionsAsync: () => dispatch(getCollectionsAsync())
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShopPage);
