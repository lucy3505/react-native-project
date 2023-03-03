import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  Animated,
  Easing,
} from 'react-native';
import Svg, {
  Circle,
  Defs,
  G,
  LinearGradient,
  Path,
  Rect,
  Stop,
} from 'react-native-svg';

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

export default class MyCirlceProgress extends React.Component {
  svgSize = 0;
  strokeWidth = 0;

  halfOfSvgSize = 0;
  circleRadius = 0;

  constructor(props) {
    super(props);
    this.svgSize = this.props.svgSize ?? 50; //圆的大小
    this.strokeWidth = this.props.strokeWidth ?? 5; //圆的边框大小

    this.halfOfSvgSize = this.svgSize / 2;
    this.circleRadius = this.halfOfSvgSize - this.strokeWidth; //圆的半径

    this.state = {
      progress: 0.5,
    };

    this.animatedValue = new Animated.Value(0);
  }

  componentDidMount() {
    Animated.timing(this.animatedValue, {
      toValue: 1,
      easing: Easing.linear,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  }

  /**
   * 极坐标转笛卡尔坐标
   * @param {number} radian - 弧度表示的极角
   */
  polarToCartesian(radian) {
    const baseSize = this.circleRadius + this.strokeWidth / 2; // 基础大小为半径加上线宽
    const x = baseSize + this.circleRadius * Math.sin(radian);
    const y = baseSize + this.circleRadius * Math.cos(radian);
    return {x, y};
  }

  render() {
    const openingRadian = Math.PI / 2;
    console.log('======= openingRadian =====' + openingRadian + '  ' + Math.PI);
    const startRadian = 2 * Math.PI - openingRadian;
    const startPoint = this.polarToCartesian(startRadian);
    const endPoint = this.polarToCartesian(openingRadian);

    const linearGradient = [
      {stop: '0%', color: '#1890ff'},
      {stop: '100%', color: '#f5222d'},
    ];
    return (
      <View style={{backgroundColor: 'black'}}>
        <Animated.View
          style={{
            width: this.svgSize,
            height: this.svgSize,
            // backgroundColor: 'green',
            margin: 10,
            overflow: 'visible',
            transform: [
              {
                rotate: this.animatedValue.interpolate({
                  inputRange: [0, 1],
                  outputRange: ['0deg', '360deg'],
                }),
              },
            ],
          }}>
          <Svg height={this.svgSize} width={this.svgSize}>
            <Defs>
              <LinearGradient x1="0%" y1="100%" x2="100%" y2="0%" id="gradient">
                {linearGradient.map((item, index) => (
                  <Stop key={index} offset={item.stop} stopColor={item.color} />
                ))}
              </LinearGradient>
            </Defs>
            <Path
              strokeWidth={this.strokeWidth}
              stroke={'url(#gradient)'}
              fill={'none'}
              strokeLinecap={'round'}
              d={`M${startPoint.x},${startPoint.y} A ${this.circleRadius},${
                this.circleRadius
              },0,${startRadian - openingRadian >= Math.PI ? '1' : '0'},1 ${
                endPoint.x
              },${endPoint.y}`}
            />
          </Svg>
        </Animated.View>
      </View>
    );
  }
}
