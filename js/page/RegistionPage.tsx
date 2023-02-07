import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {ConfirmButton, Input, Navbar, Tips} from '../common/LoginComponent';
import NavigationUtil from '../navigator/Navigationutil';
export default (props: any) => {
  const {navigation} = props;
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState('dd');
  const [helpUrl, setHelpUrl] = useState('https://baidu.com');
  const onLogin = () => {};

  return (
    <SafeAreaView style={styles.root}>
      <Navbar
        title="注册"
        rightTitle="登陆"
        onRightClick={() => {
          NavigationUtil.login({navigation});
        }}
      />
      <View style={styles.line}></View>
      <View style={styles.content}>
        <Input
          label="用户名"
          placeholder="请输入用户名"
          shortLine={true}
          onChangeText={(text: string) => setUserName(text)}
        />
        <Input
          label="密码"
          placeholder="请输入密码"
          secure={true}
          onChangeText={(text: string) => setPassword(text)}
        />
        <ConfirmButton title="注册" onClick={onLogin} />
        <Tips msg={msg} helpUrl={helpUrl}></Tips>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  content: {
    paddingTop: 20,
    backgroundColor: '#F1f5f6',
    flexGrow: 1,
  },
  line: {
    height: 0.5,
    backgroundColor: '#d0d4d4',
  },
});
