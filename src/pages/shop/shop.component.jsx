import CollectionsContainer from "../collection/collection.container";
import CollectionsOverviewContainer from "../../components/collections-overview/collections-overview.container";
import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { getCollectionsAsync } from "../../redux/shop/shop.actions";

class ShopPage extends React.Component {
  componentDidMount() {
    const { getCollectionsAsync } = this.props;
    getCollectionsAsync();
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
  getCollectionsAsync: () => dispatch(getCollectionsAsync())
});
export default connect(
  null,
  mapDispatchToProps
)(ShopPage);
