import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

class SvCard extends Component {
  render() {
    const cssClasses = classNames('sv-card', this.props.className);

    return (
			<div className={cssClasses}>
				{this.props.children ? this.props.children : <div />}
			</div>
    );
  }
}

SvCard.displayName = 'SvCard';

SvCard.propTypes = {
  className: PropTypes.string
};

export default SvCard;
