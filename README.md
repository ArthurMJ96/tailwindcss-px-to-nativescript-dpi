# tailwindcss-px-to-nativescript-dpi

A Tailwind CSS plugin that automatically converts all `px` units to unit-less integers in your Tailwind styles. This is especially useful for NativeScript projects, which interpret unit-less values as DPI units.  
This allows using base tailwindcss classes in NativeScript with deterministic effect on different devices. (Such as avoiding `border-b` resulting in a thin hard-to-see line on high-end devices and a thick line on low-end devices)

## Installation

To install the plugin, run the following command in your project directory:

```bash
npm install @amj7/tailwindcss-px-to-nativescript-dpi
```

## Usage

The plugin works by intercepting all Tailwind utility classes and custom styles that use PX units, converting them. This conversion happens at build time, ensuring that your final CSS output contains only unit-less values.

Add the plugin to your Tailwind configuration:

```js
const pxToDpi = require("@amj7/tailwindcss-px-to-nativescript-dpi");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // ...
  ],
  theme: {
    // ...
  },
  plugins: [remToPx()],
};
```
