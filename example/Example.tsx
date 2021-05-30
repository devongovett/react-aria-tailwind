import React from 'react';
import {ExampleButton} from './Button';
import {ExampleToggleButton} from './ToggleButton';

export function Example() {
  return (
    <div className="m-8 grid grid-cols-2 gap-2 max-w-sm">
      <h1 className="col-span-2">React Aria Tailwind</h1>
      <ExampleButton>Button</ExampleButton>
      <ExampleButton isDisabled>Button</ExampleButton>
      <ExampleToggleButton defaultSelected>Toggle Button</ExampleToggleButton>
    </div>
  );
}
