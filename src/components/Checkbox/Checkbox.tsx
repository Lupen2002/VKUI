import React from 'react';
import PropTypes from 'prop-types';
import Icon16Done from '@vkontakte/icons/dist/16/done';
import Tappable, { ACTIVE_EFFECT_DELAY } from '../Tappable/Tappable';
import getClassName from '../../helpers/getClassName';
import classNames from '../../lib/classNames';
import { IS_PLATFORM_IOS } from '../../lib/platform';
import { StyleObject, HasChildren, HasRef } from '../../types/props';

const baseClassName = getClassName('Checkbox');

export interface CheckBoxProps extends StyleObject, HasChildren, HasRef {
  disabled: boolean;
}

const Checkbox = ({ children, className, style, getRootRef, ...restProps }: CheckBoxProps) => {
  return (
    <Tappable
      component="label"
      className={classNames(baseClassName, className)}
      style={style}
      disabled={restProps.disabled}
      activeEffectDelay={IS_PLATFORM_IOS ? 100 : ACTIVE_EFFECT_DELAY}
      getRootRef={getRootRef}
    >
      <input {...restProps} type="checkbox" className="Checkbox__input" />
      <div className="Checkbox__container">
        <div className="Checkbox__icon">
          <Icon16Done />
        </div>
        <div className="Checkbox__content">{children}</div>
      </div>
    </Tappable>
  );
};

Checkbox.propTypes = {
  children: PropTypes.node,
  style: PropTypes.object,
  className: PropTypes.string,
  getRootRef: PropTypes.func
};

export default Checkbox;