import {useToggleButton, useHover, useFocusRing, mergeProps} from 'react-aria';
import {useToggleState} from 'react-stately';
import {AriaToggleButtonProps} from '@react-types/button';
import React, {useRef} from 'react';
import clsx from 'clsx';

interface ToggleButtonProps extends AriaToggleButtonProps {
  className?: string,
  defaultClassName?: string,
  hoverClassName?: string,
  activeClassName?: string,
  focusVisibleClassName?: string,
  disabledClassName?: string,
  selectedClassName?: string,
  selectedHoverClassName?: string,
  selectedActiveClassName?: string,
  selectedFocusVisibleClassName?: string
}

export function ToggleButton(props: ToggleButtonProps) {
  let {
    children,
    className,
    defaultClassName,
    hoverClassName,
    focusVisibleClassName,
    activeClassName,
    disabledClassName,
    selectedClassName,
    selectedHoverClassName,
    selectedActiveClassName,
    selectedFocusVisibleClassName,
    isDisabled
  } = props;
  let ref = useRef<HTMLButtonElement>(null);
  let state = useToggleState(props);
  let {buttonProps, isPressed} = useToggleButton(props, state, ref);
  let {hoverProps, isHovered} = useHover(props);
  let {focusProps, isFocusVisible} = useFocusRing();

  let hoverClass = selectedHoverClassName && state.isSelected ? selectedHoverClassName : hoverClassName;
  let activeClass = selectedActiveClassName && state.isSelected ? selectedActiveClassName : activeClassName;
  let focusVisibleClass = selectedFocusVisibleClassName && state.isSelected ? selectedFocusVisibleClassName : focusVisibleClassName;

  return (
    <button 
      ref={ref}
      {...mergeProps(buttonProps, hoverProps, focusProps)}
      className={
        clsx(
          className,
          {
            [defaultClassName]: !state.isSelected && !isHovered && !isPressed,
            [selectedClassName]: state.isSelected && !isHovered && !isPressed,
            [hoverClass]: isHovered && !isPressed,
            [activeClass]: isPressed,
            [focusVisibleClass]: isFocusVisible,
            [disabledClassName]: isDisabled,
          }
        )
      }>
      {children}
    </button>
  );
}
