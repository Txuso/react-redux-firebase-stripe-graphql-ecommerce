import CollectionsContainer from "../collection/collection.container";
import CollectionsOverviewContainer from "../../components/collections-overview/collections-overview.container";
import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { getCollectionsStart } from "../../redux/shop/shop.actions";

class ShopPage extends React.Component {
  componentDidMount() {
    const { getCollectionsStart } = this.props;
    getCollectionsStart();
  }

  render() {
    const { match } = this.props;

    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          component={CollectionsOverviewContainer}
        />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionsContainer}
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getCollectionsStart: () => dispatch(getCollectionsStart())
});
export default connect(
  null,
  mapDispatchToProps
)(ShopPage);
