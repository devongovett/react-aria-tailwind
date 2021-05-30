import React from 'react';
import {Button} from '../src/Button';
import {AriaButtonProps} from '@react-types/button';

interface ExampleButtonProps extends AriaButtonProps {}

export function ExampleButton(props: ExampleButtonProps) {
  let {children, ...otherProps} = props;

  return (
    <Button
      {...otherProps}
      className="text-white font-bold py-2 px-4 rounded cursor-default focus:outline-none transition ease-in-out duration-150"
      defaultClassName="bg-blue-500"
      hoverClassName="bg-blue-600"
      activeClassName="bg-blue-700"
      focusVisibleClassName="ring-4 ring-blue-400 ring-opacity-50"
      disabledClassName="bg-gray-400">
      {children}
    </Button>
  );
}
