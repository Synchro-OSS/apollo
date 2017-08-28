import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

class SvSegment extends Component {
  render() {
    const cssClasses = classNames('sv-segment', this.props.className);

    return (
			<div className={cssClasses}>
				{this.props.children ? this.props.children : <div />}
			</div>
    );
  }
}

SvSegment.displayName = 'SvSegment';

SvSegment.propTypes = {
  className: PropTypes.string
};

export default SvSegment;
