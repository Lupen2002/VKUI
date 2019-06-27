import React from 'react';
import PropTypes from 'prop-types';
import getClassName from '../../helpers/getClassName';
import classNames from '../../lib/classNames';
import { HasStyleObject, HasChildren, HasRef } from '../../types/props';

const baseClassNames = getClassName('Header');

export interface HeaderProps extends HasStyleObject, HasChildren, HasRef {
  aside?: React.ReactNode;
  indicator?: React.ReactNode;
  level?: '1' | '2';
}

const Header = ({ className, level, children, indicator, aside, getRootRef, ...restProps }: HeaderProps) => {
  return (
    <div
      {...restProps}
      ref={getRootRef}
      className={classNames(baseClassNames, className, { [`Header--level-${level}`]: true })}
    >
      <div className="Header__in">
        <div className="Header__content">{children}</div>

        {indicator && <div className="Header__indicator">{indicator}</div>}
        {aside && <div className="Header__aside">{aside}</div>}
      </div>
    </div>
  );
};

Header.propTypes = {
  className: PropTypes.string,
  level: PropTypes.oneOf(['1', '2']),
  indicator: PropTypes.node,
  aside: PropTypes.node,
  children: PropTypes.node,
  style: PropTypes.object,
  getRootRef: PropTypes.func
};

Header.defaultProps = {
  level: '1'
};

export default Header;