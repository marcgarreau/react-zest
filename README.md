# React Zest
![zest-logo](https://s3.amazonaws.com/react-zest/zest.png)

 _a lightweight wrapper for adding micro-animations to React components_

## Up & Running
```
npm install react-zest
```

### Example Usage
```
import React from 'react';
import Zest from 'react-zest';

const SomeComponent = (props) => {
	return (
		<Zest>
			<button>Click here!</button>
		</Zest>
	);
};

export default SomeComponent;
```

Note that the wrapped element must have a `display` value of `inline-block` or `block` to have all animations applied.

## Contributing

#### Testing
To run the test suite: `npm test`
