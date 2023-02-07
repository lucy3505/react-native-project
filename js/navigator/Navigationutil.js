import {StackActions} from '@react-navigation/native';
/**
 * 全局导航跳转工具类
 */

export default class NavigationUtil {
  /**
   * 跳转到指定页面
   * @param {*} params 要传递的参数
   * @param {*} page 要跳转的页面名
   */
  static goPage(params, page) {
    console.log(22);
    const navigation = NavigationUtil.navigation || (params || {}).navigation;
    console.log(navigation);
    if (!navigation) {
      console.log('NavigationUtil.navidation can not be null');
      return;
    }
    navigation.navigate(page, {
      ...params,
      navigation: undefined, //fix Non-serializable values were found in the navigation state,
    });
  }
  /**
   *
   * @param {*} navigation
   */
  static goBack(navigation) {
    navigation.goBack();
  }
  /**
   * 重置到首页
   */
  static resetToHomePage(params) {
    const {navigation} = params;
    navigation.dispatch(StackActions.replace('HomePage', {})); //首页之前的都清空并且跳到首页
  }

  /**
   * 重置到登陆
   */
  static login(params) {
    let {navigation} = params;
    if (!navigation) {
      navigation = NavigationUtil.navigation;
    }
    navigation.dispatch(StackActions.replace('LoginPage', {})); //首页之前的都清空并且跳到首页
  }
  /**
   * 重置到注册
   */
  static registrstion(params) {
    let {navigation} = params;
    if (!navigation) {
      navigation = NavigationUtil.navigation;
    }
    navigation.dispatch(StackActions.replace('RegistionPage', {})); //首页之前的都清空并且跳到首页
  }
}
