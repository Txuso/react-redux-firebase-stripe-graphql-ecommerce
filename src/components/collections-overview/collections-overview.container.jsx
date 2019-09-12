import WithSpinner from "../with-spinner/with-spinner";
import collectionsOverview from "./collections-overview.component";
import { compose } from "redux";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectIsCollectionLoading } from "../../redux/shop/shop.selectors";
const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionLoading
});

const CollectionsOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(collectionsOverview);

export default CollectionsOverviewContainer;
