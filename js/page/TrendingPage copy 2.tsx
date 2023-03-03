import Svg, {
  Circle,
  Ellipse,
  G,
  Text,
  TSpan,
  TextPath,
  Path,
  Polygon,
  Polyline,
  Line,
  Rect,
  Use,
  Image,
  Symbol,
  Defs,
  LinearGradient,
  RadialGradient,
  Stop,
  ClipPath,
  Pattern,
  Mask,
} from 'react-native-svg';

import React, {useEffect, useRef} from 'react';
import {View, StyleSheet, Animated, Easing} from 'react-native';
const SvgExample = () => {
  const rotateInner = useRef(new Animated.Value(0)).current;
  const rotateMid = useRef(new Animated.Value(0)).current;
  const rotateOuter = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    [rotateInner, rotateMid, rotateOuter].forEach((item, index) => {
      return Animated.loop(
        Animated.timing(item, {
          toValue: 1,
          duration: 300 * (index + 1),
          easing: Easing.linear,
          useNativeDriver: false,
        }),
      ).start();
    });
  }, []);

  return (
    <Animated.View
      style={[
        StyleSheet.absoluteFill,
        {alignItems: 'center', justifyContent: 'center'},
        {
          transform: [
            {
              rotate: rotateOuter.interpolate({
                inputRange: [0, 1],
                outputRange: ['0deg', '360deg'],
              }),
            },
          ],
        },
      ]}>
      <Svg height="50%" width="50%" viewBox="0 0 100 100">
        <Circle
          cx="50"
          cy="50"
          r="45"
          stroke="blue"
          strokeWidth="2.5"
          fill="green"
        />
        <Rect
          x="0"
          y="50"
          width="170"
          height="70"
          stroke="red"
          strokeWidth="2"
          fill="transparent"
        />
      </Svg>
    </Animated.View>
  );
};
export default SvgExample;
