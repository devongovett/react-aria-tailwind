import {useButton, useHover, useFocusRing, mergeProps} from 'react-aria';
import {AriaButtonProps} from '@react-types/button';
import React, {useRef} from 'react';
import clsx from 'clsx';

interface ButtonProps extends AriaButtonProps {
  className?: string,
  defaultClassName?: string,
  hoverClassName?: string,
  activeClassName?: string,
  focusVisibleClassName?: string,
  disabledClassName?: string
}

export function Button(props: ButtonProps) {
  let {children, className, defaultClassName, hoverClassName, focusVisibleClassName, activeClassName, disabledClassName, isDisabled} = props;
  let ref = useRef<HTMLButtonElement>(null);
  let {buttonProps, isPressed} = useButton(props, ref);
  let {hoverProps, isHovered} = useHover(props);
  let {focusProps, isFocusVisible} = useFocusRing();

  return (
    <button 
      ref={ref}
      {...mergeProps(buttonProps, hoverProps, focusProps)}
      className={
        clsx(
          className,
          {
            [defaultClassName]: !isHovered && !isPressed,
            [hoverClassName]: isHovered && !isPressed,
            [activeClassName]: isPressed,
            [focusVisibleClassName]: isFocusVisible,
            [disabledClassName]: isDisabled
          }
        )
      }>
      {children}
    </button>
  );
}
