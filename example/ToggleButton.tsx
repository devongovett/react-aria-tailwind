import React from 'react';
import {ToggleButton} from '../src/ToggleButton';
import {AriaToggleButtonProps} from '@react-types/button';

interface ExampleToggleButtonProps extends AriaToggleButtonProps {}

export function ExampleToggleButton(props: ExampleToggleButtonProps) {
  let {children, ...otherProps} = props;

  return (
    <ToggleButton
      {...otherProps}
      className="text-white font-bold py-2 px-4 rounded cursor-default focus:outline-none transition ease-in-out duration-150"
      defaultClassName="bg-blue-500"
      hoverClassName="bg-blue-600"
      activeClassName="bg-blue-700"
      focusVisibleClassName="ring ring-offset-2 ring-blue-400"
      disabledClassName="bg-gray-400"
      selectedClassName="bg-green-600"
      selectedHoverClassName="bg-green-700"
      selectedActiveClassName="bg-green-800">
      {children}
    </ToggleButton>
  );
}
