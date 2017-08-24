import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

class SvButton extends Component {
  render() {
    const cssClasses = classNames(
			'sv-button',
			this.props.className,
			this.props.small ? 'small' : '',
			this.props.fill
		);

    return (
			<div className={cssClasses}>
				{this.props.children}
			</div>
    );
  }
}

SvButton.displayName = 'SvButton';

SvButton.defaultProps = {
  fill: 'default',
  small: false
};

SvButton.propTypes = {
  className: PropTypes.string,
  fill: PropTypes.oneOf(['primary', 'info', 'danger', 'warning', 'default']),
  small: PropTypes.bool
};

export default SvButton;
