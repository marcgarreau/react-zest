# React Zest
![zest-logo](https://s3.amazonaws.com/react-zest/zest.png)

_a lightweight wrapper for adding micro-animations to React components_

## View the Demo
A small demo is [here](https://zest-demo.herokuapp.com).

## Installation

```
npm install --save react-zest
```

or

```
yarn add react-zest
```

## Usage

Import the `Zest` component and wrap the element you'd like to animate.

A couple props can be passed to the `Zest` component to configure the animation:

### General Props

| Prop                           | Values                                                   |
|--------------------------------|----------------------------------------------------------|
| `animationName`                | `beacon`, `error`, `wiggle`                              |
| `animationTrigger`             | `click` (default), `hover`                               |
| `animationDuration` (optional) | # of milliseconds, i.e. `300`. Defaults are recommended. |

### Animation-Specific Defaults

| Animation Name | Default Duration    | Custom Default Properties                                             |
|----------------|---------------------|-----------------------------------------------------------------------|
| `beacon`       | 300 (ms)  | n/a                                                                             |
| `error`        | 300 (ms)  | `color: '#C33917'`<br>`borderColor: '#C33917'` (dark red)</br>_(`borderColor` will default to `color` or '#C33917' if not specified)_ |
| `wiggle`       | 1000 (ms) | n/a                                                                             |


### Example

```
import React from 'react';
import Zest from 'react-zest';

const SomeComponent = props => {
  return (
    <Zest
      animationDuration={700}
      animationName="wiggle"
      animationTrigger="hover"
    >
      <button>Click here!</button>
    </Zest>
  );
};

export default SomeComponent;
```

### Notes

* The wrapped element must have a `display` value of `inline-block` or `block` to have all animations applied.

* The 'error' animation is intended for input fields and alters the `border-color` and text color to red. To best view this effect, you'll want to add the prop `outline: none` to your input field.

## Contributing

To contribute:

1. Reach out/file an issue if unsure changes are desired.
1. Fork it.
1. Create your feature branch (`git checkout -b my-new-feature`).
1. Add your changes to the `lib` or `css` directories, along with associated tests.
1. Run tests (`npm test`) and the linter (`npm run lint`).
1. Commit your changes (`git commit -am 'Added some feature'`).
1. Push to the branch (`git push origin my-new-feature`).
1. Create new Pull Request.

### Testing

To run the test suite: `npm test`

To run the linter: `npm run lint`
