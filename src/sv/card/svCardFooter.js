import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

class SvCardFooter extends Component {
  render() {
    const cssClasses = classNames(this.props.className);

    return (
			<footer className={cssClasses}>
				{this.props.children ? this.props.children : <div />}
			</footer>
    );
  }
}

SvCardFooter.displayName = 'SvCardFooter';

SvCardFooter.propTypes = {
  className: PropTypes.string
};

export default SvCardFooter;
