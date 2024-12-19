To reliably handle screen orientation changes and get accurate dimensions, avoid relying solely on `Dimensions.addEventListener`.  Instead, use the `useEffect` hook with the `Dimensions.get` method.  The useEffect hook will automatically update the component when dependencies change.   This approach ensures that the dimensions are always up-to-date, even if `addEventListener` misses an event.

```javascript
import React, { useEffect, useState } from 'react';
import { Dimensions, View, Text } from 'react-native';

const DimensionsSolution = () => {
  const [dimensions, setDimensions] = useState(Dimensions.get('window'));

  useEffect(() => {
    const subscription = Dimensions.addEventListener('change', ({ window }) => {
      setDimensions(window);
    });

    return () => subscription?.remove();
  }, []);

  return (
    <View>
      <Text>Width: {dimensions.width}</Text>
      <Text>Height: {dimensions.height}</Text>
    </View>
  );
};

export default DimensionsSolution;
```