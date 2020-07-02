/*
 * @Author: Simons
 * @Date: 2019-06-19 15:02:12
 * @Last Modified by: Simons
 * @Last Modified time: 2019-06-19 15:08:35
 */
import React, { Component } from 'react';
import { Empty } from 'antd';
import PropTypes from 'prop-types';
import styles from './index.less';

export default class NormalEmpty extends Component {
  constructor() {
    super();
    this.state = {
      contentHeight: document.body.clientHeight,
    };
    this.timeout = null;
  }

  componentDidMount = () => {
    const { height } = this.props;
    if (!height) {
      // height不存在或者为0
      window.addEventListener('resize', this.setContentHeight);
    }
  };

  componentWillUnmount = () => {
    const { height } = this.props;
    if (!height) {
      window.removeEventListener('resize', this.setContentHeight);
    }
  };

  setContentHeight = () => {
    this.thro(() => {
      this.setState({
        contentHeight: document.body.clientHeight,
      });
    }, 400);
  };

  thro = (func, ms) => {
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
    this.timeout = setTimeout(func, ms);
  };

  render() {
    const { DelWidth, height, transition = 'all .5s', ...restProps } = this.props;
    const { contentHeight } = this.state;
    const innerHeight = height || `${contentHeight - 64 - DelWidth}px`;

    return (
      <div style={{ height: `${innerHeight}`, width: '100%', position: 'relative', transition }}>
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
          className={styles.innerEmpty}
        >
          <Empty {...restProps} />
        </div>
      </div>
    );
  }
}

NormalEmpty.defaultProps = {
  height: undefined,
  DelWidth: 0,
};

NormalEmpty.propTypes = {
  height: PropTypes.string,
  DelWidth: PropTypes.number,
};
