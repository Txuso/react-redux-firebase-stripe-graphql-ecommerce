import './directory.component.scss';

import MenuItem from '../menu-item/menu-item.component';
import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../redux/directory/directory.selectors';

class Directory extends React.Component {
	render() {
		return (
			<div className="directory-menu">
				{this.props.sections.map(({ id, ...otherSectionProps }) => (
					<MenuItem key={id} {...otherSectionProps} />
				))}
			</div>
		);
	}
}
const mapStateToProps = createStructuredSelector({
	sections: selectCurrentUser
});
export default connect(mapStateToProps)(Directory);
