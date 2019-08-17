import {
  convertCollectionsSnapshotToMap,
  firestore
} from "../../firebase/firebase.utils";

import CollectionPage from "../collection/collection.component";
import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import React from "react";
import { Route } from "react-router-dom";
import WithSpinner from "../../components/with-spinner/with-spinner";
import { connect } from "react-redux";
import { updateCollections } from "../../redux/shop/shop.actions";

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionsPageWithSpinner = WithSpinner(CollectionPage);
class ShopPage extends React.Component {
  state = {
    loading: true
  };
  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection("collections");

    collectionRef.get().then(snapShot => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapShot);
      updateCollections(collectionsMap);
      this.setState({ loading: false });
    });

    // REST API FORMAT: fetch('https://firestore.googleapis.com/v1/projects/ecommerce-react-dcb3f/databases/(default)/documents/collections').then(response => response.json())
  }

  render() {
    const { match } = this.props;
    const { loading } = this.state;
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          render={props => (
            <CollectionsOverviewWithSpinner isLoading={loading} {...props} />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={props => (
            <CollectionsPageWithSpinner isLoading={loading} {...props} />
          )}
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  updateCollections: collection => dispatch(updateCollections(collection))
});
export default connect(
  null,
  mapDispatchToProps
)(ShopPage);
