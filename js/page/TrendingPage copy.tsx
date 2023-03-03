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
          duration: 30000 * (index + 1),
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
            styles.round,
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
          <View style={[styles.leftCircle, styles.Circle]}>
            <View style={[styles.leftHalfCircle]}></View>
          </View>
          <View style={[styles.rightCircle, styles.Circle]}>
            <View style={[styles.rightHalfCircle]}></View>
          </View>
          <View style={[styles.percentage]}></View>
        </Animated.View>
        <Animated.View
          style={[
            styles.round1,
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
          <View style={[styles.leftCircle, styles.Circle]}>
            <View style={[styles.leftHalfCircle]}></View>
          </View>
          <View style={[styles.rightCircle, styles.Circle]}>
            <View style={[styles.rightHalfCircle1]}></View>
          </View>
          <View style={[styles.percentage1]}></View>
        </Animated.View>
        <Animated.View
          style={[
            styles.round2,
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
          <View style={[styles.leftCircle, styles.Circle]}>
            <View style={[styles.leftHalfCircle]}></View>
          </View>
          <View style={[styles.rightCircle, styles.Circle]}>
            <View style={[styles.rightHalfCircle2]}></View>
          </View>
          <View style={[styles.percentage2]}></View>
        </Animated.View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
  center: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: 'red',
  },
  Circle: {
    width: '50%',
    // height: 112,
    position: 'absolute',
  },
  leftCircle: {
    left: 0,
    overflow: 'hidden',
  },
  rightCircle: {
    right: 0,
    overflow: 'hidden',
  },
  leftHalfCircle: {
    width: '100%',
    height: 80,
    borderTopLeftRadius: 50,
    borderBottomLeftRadius: 50,
    // backgroundColor: 'red',
  },
  rightHalfCircle: {
    width: '100%',
    height: 56,
    borderTopRightRadius: 50,
    borderBottomRightRadius: 50,
    backgroundColor: '#fc5912',
  },
  percentage: {
    width: 50,
    height: 53,
    backgroundColor: '#fff',
    borderTopRadius: 50,
    borderBottomRadius: 50,
    // borderBottomRightRadius: 50,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'green',
  },
  round: {
    position: 'absolute',
    left: -28,
    right: 0,

    width: 56,
    height: 56,

    borderRadius: 100,

    justifyContent: 'center',
    alignItems: 'center',
    zIndex: -99,
  },
  round1: {
    position: 'absolute',
    width: 28,
    height: 28,
    zIndex: 99,
    borderRadius: 100,

    justifyContent: 'center',
    alignItems: 'center',
  },
  rightHalfCircle1: {
    width: '100%',
    height: 28,
    borderTopRightRadius: 25,
    borderBottomRightRadius: 25,
    backgroundColor: '#968c6d',
  },
  percentage1: {
    width: 23,
    height: 26,
    backgroundColor: '#fff',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  round2: {
    position: 'absolute',
    width: 40,
    height: 44,
    borderRadius: 100,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
  },
  rightHalfCircle2: {
    width: '100%',
    height: 40,
    borderTopRightRadius: 35,
    borderBottomRightRadius: 35,
    backgroundColor: '#fc9b75',
    overflow: 'hidden',
  },
  percentage2: {
    width: 35,
    height: 38,
    backgroundColor: '#fff',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  // percentage2: {
  //   width: 100,
  //   height: 100,
  //   backgroundColor: '#fff',
  //   borderRadius: 100,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  // },
});
export default Index;
