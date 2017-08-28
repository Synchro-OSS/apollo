import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

class SvCardHeader extends Component {
  render() {
    const cssClasses = classNames(this.props.className);

    return (
			<header className={cssClasses}>
				{this.props.children ? this.props.children : <div />}
			</header>
    );
  }
}

SvCardHeader.displayName = 'SvCardHeader';

SvCardHeader.propTypes = {
  className: PropTypes.string
};

export default SvCardHeader;
