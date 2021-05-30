# React Aria Tailwind

A set of components using [React Aria](https://react-spectrum.adobe.com/react-aria/) and [Tailwind](https://tailwindcss.com).

Very early WIP.

## Why?

React Aria is a low level library of React Hooks that helps you implement components with accessibility, internationalization, and adaptive cross-device behavior. It does not provide any rendering or even a DOM structure, so it can be used with any styling methodology and is completely customizable. This is powerful, but sometimes you just want something that works a bit more easily out of the box with a specific styling framework. Tailwind CSS is a very popular utility library that makes it easier to build consistent UIs, and works great with React Aria.

This library combines React Aria and Tailwind CSS to give you the best of both worlds – full styling customizability with an API designed specifically to work well with Tailwind. It provides component wrappers around React Aria hooks with props designed for applying Tailwind classes in different states (e.g. hover, active, disabled, selected, etc.). The example library shows how to use this to build specific design system components on top using Tailwind classes.
