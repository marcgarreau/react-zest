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

A number of props can be passed to the `Zest` component to configure the animation. Where available, default settings are recommended.

### General Props

| Prop                           | Type              | Default            | Accepted Values                                 |
|--------------------------------|-------------------|--------------------|-------------------------------------------------|
| `animationName`                | string            | none               | `beacon`, `pulse`, `wiggle`                     |
| `animationTrigger`             | string or boolean | `click`            | `click`, `hover`, a boolean (see example below) |
| `animationDuration` (optional) | number            | animation-specific | # of milliseconds, i.e. `300`                   |
| `animationCount` (optional)    | string            | animation-specific | # of animation cycles, i.e. `'1'`               |
| `color` (optional)             | string            | animation-specific | hex, color name, or rgba, i.e. `'#C33917'`      |
| `borderColor` (optional)       | string            | animation-specific | hex, color name, or rgba, i.e. `'#C33917'`      |

### Animation-Specific Defaults

| Animation Name | Default Duration    | Additional Default Properties                                         |
|----------------|---------------------|-----------------------------------------------------------------------|
| `beacon`       | 300 (ms)  | animationCount: '1' |
| `pulse`        | 3000 (ms) | animationCount: 'infinite'<br>color: '#C33917'<br>borderColor: '#C33917' (dark red)<br>_(`borderColor` will default to `color` or '#C33917' if not specified)_ |
| `wiggle`       | 1000 (ms) | animationCount: '1' |


### Basic Example

```
import React from 'react';
import Zest from 'react-zest';

const SomeComponent = props => {
  return (
    <Zest
      animationName="wiggle"
      animationTrigger="hover"
      animationDuration={700}
    >
      <button>Click here!</button>
    </Zest>
  );
};

export default SomeComponent;
```

### Example - Animating an Input on Error

The `pulse` animation is ideal for animating an invalid input field. This example takes a boolean value as the `animationTrigger`.

```
import React from 'react';
import Zest from 'react-zest';

const SomeComponent = props => {
  constructor(props) {
    super(props);

    this.state = {
      input: '',
      valid: true
    };
  }

  checkValidity() {
    if (this.state.input.length < 3) { return this.setState({ valid: false }); }
    return this.setState({ valid: true });
  }

  return (
    <Zest
      animationName="pulse"
      animationTrigger={!this.state.valid}
    >
      <input
        type="text"
        value={this.state.input}
        onChange={e => this.setState({ input: e.target.value })}
        onBlur={this.checkValidity} />
    </Zest>
  );
};

export default SomeComponent;
```

### Notes

* The wrapped element must have a `display` value of `inline-block` or `block` to have all animations applied.

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
