import React, {Component, useEffect, useRef, useState} from 'react';
import {StyleSheet, Text, View, Animated, Easing} from 'react-native';
import {withAnchorPoint} from 'react-native-anchor-point';
export const Index = () => {
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

    // Animated.loop(
    //   Animated.timing(rotation1, {
    //     toValue: 1,
    //     duration: 500,
    //     easing: Easing.linear,
    //     useNativeDriver: false,
    //   }),
    // ).start();
    // Animated.loop(
    //   Animated.timing(rotation2, {
    //     toValue: 1,
    //     duration: 800,
    //     easing: Easing.linear,
    //     useNativeDriver: false,
    //   }),
    // ).start();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.center}>
        <Animated.View
          style={[
            styles._round,
            styles.outer_round,
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
          <View style={[styles.Circle]}>
            <View style={[styles._circle, styles.outerCircle]}></View>
          </View>
          <View style={[styles.per, styles.outerPer]}></View>
        </Animated.View>
        <Animated.View
          style={[
            styles._round,
            styles.mid_round,
            {
              transform: [
                {
                  rotate: rotateMid.interpolate({
                    inputRange: [0, 1],
                    outputRange: ['0deg', '360deg'],
                  }),
                },
              ],
            },
          ]}>
          <View style={[styles.Circle]}>
            <View style={[styles._circle, styles.midCircle]}></View>
          </View>
          <View style={[styles.per, styles.midPer]}></View>
        </Animated.View>
        <Animated.View
          style={[
            styles._round,
            styles.inner_round,
            {
              transform: [
                {
                  rotate: rotateInner.interpolate({
                    inputRange: [0, 1],
                    outputRange: ['0deg', '360deg'],
                  }),
                },
              ],
            },
          ]}>
          <View style={[styles.Circle]}>
            <View style={[styles._circle, styles.innerCircle]}></View>
          </View>
          <View style={[styles.per, styles.innerPer]}></View>
        </Animated.View>
      </View>
    </View>
  );
};
// const CIRCLESIZE = [60, 40, 20];
const CIRCLESIZE = [40, 30, 18];
const rounds = [
  {
    styleName: 'outerCircle',
    style: {
      height: CIRCLESIZE[0] - 3,
      backgroundColor: '#fc5912',
      borderTopRightRadius: CIRCLESIZE[0] + 100,
      borderBottomRightRadius: CIRCLESIZE[0] + 100,
    },
  },
  {
    styleName: 'outerPer',
    style: {
      width: CIRCLESIZE[0] - 4,
      height: CIRCLESIZE[0] - 4,
      // backgroundColor: '#fff',
    },
  },
  {
    styleName: 'outer_round',
    style: {
      width: CIRCLESIZE[0],
      height: CIRCLESIZE[0],
      zIndex: -99,
    },
  },
  {
    styleName: 'midCircle',
    style: {
      height: CIRCLESIZE[1] - 3,
      backgroundColor: '#fc9b75',
      borderTopRightRadius: CIRCLESIZE[1],
      borderBottomRightRadius: CIRCLESIZE[1],
    },
  },
  {
    styleName: 'midPer',
    style: {
      width: CIRCLESIZE[1] - 4,
      height: CIRCLESIZE[1] - 4,
      // backgroundColor: '#fff',
    },
  },
  {
    styleName: 'mid_round',
    style: {
      width: CIRCLESIZE[1],
      height: CIRCLESIZE[1],
      zIndex: -99,
    },
  },
  {
    styleName: 'innerCircle',
    style: {
      height: CIRCLESIZE[2] - 3,
      backgroundColor: '#968c6d',
      borderTopRightRadius: CIRCLESIZE[2],
      borderBottomRightRadius: CIRCLESIZE[2],
    },
  },
  {
    styleName: 'innerPer',
    style: {
      width: CIRCLESIZE[2] - 4,
      height: CIRCLESIZE[2] - 4,
      // backgroundColor: '#fff',
    },
  },
  {
    styleName: 'inner_round',
    style: {
      width: CIRCLESIZE[2],
      height: CIRCLESIZE[2],
      zIndex: 99,
    },
  },
];

const roundsStyle = rounds.reduce((prev, item) => {
  return {...prev, [`${item.styleName}`]: {...item.style}};
}, {});

// const roundsStyle = {
//   Circle: {
//     width: '50%',
//     // height: 112,
//     position: 'absolute',
//     right: 0,
//     overflow: 'hidden',
//     // backgroundColor: 'black',
//   },
// };
console.log(roundsStyle);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
  center: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    // borderWidth: 2,
    borderColor: 'red',
  },
  Circle: {
    width: '50%',
    // height: 112,
    position: 'absolute',
    right: 0,
    overflow: 'hidden',
    // backgroundColor: 'black',
  },
  ...roundsStyle,

  per: {
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  _round: {
    position: 'absolute',
    borderRadius: 100,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  _circle: {
    width: '100%',
    overflow: 'hidden',
  },
});
export default Index;
