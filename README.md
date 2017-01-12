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

To contribute:

1. React out/file an issue if unsure changes are desired.
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
