// SVGBackground.js
import React from 'react';
import { View, StyleSheet } from 'react-native';
import Svg, { Path } from 'react-native-svg';

const SVGBackground = () => {
  return (
    <View style={styles.container}>
      <Svg width="100%" height="100%" viewBox="0 0 305 377" fill="none" xmlns="http://www.w3.org/2000/svg">
        <Path d="M11.0553 21.7562C11.3025 14.1199 11.4262 10.3018 12.9927 7.40005C14.3712 4.84664 16.509 2.78464 19.1105 1.49925C22.0669 0.0385163 25.887 0.0527916 33.5272 0.0813421L282.287 1.01092C290.094 1.0401 293.997 1.05468 296.978 2.5825C299.601 3.92649 301.733 6.06397 303.07 8.69042C304.59 11.6761 304.595 15.5793 304.603 23.3857L304.962 344.367C304.975 356.082 304.982 361.939 302.67 366.327C300.637 370.183 297.4 373.27 293.45 375.118C288.958 377.219 283.107 376.934 271.406 376.365L31.4462 364.683C20.4218 364.146 14.9095 363.878 10.7757 361.538C7.13862 359.48 4.23773 356.334 2.48045 352.542C0.483127 348.233 0.661745 342.717 1.01898 331.685L11.0553 21.7562Z" fill="#FF0023"/>
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});

export default SVGBackground;
