import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

class SvCardMain extends Component {
  render() {
    const cssClasses = classNames(this.props.className);

    return (
			<main className={cssClasses}>
				{this.props.children ? this.props.children : <div />}
			</main>
    );
  }
}

SvCardMain.displayName = 'SvCardMain';

SvCardMain.propTypes = {
  className: PropTypes.string
};

export default SvCardMain;
