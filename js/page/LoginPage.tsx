import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {ConfirmButton, Input, Navbar, Tips} from '../common/LoginComponent';
import LoginDao from '../expand/dao/LoginDao';
import NavigationUtil from '../navigator/Navigationutil';

export default (props = {}) => {
  const {navigation} = props;
  console.log(navigation);
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState('dd');
  const [helpUrl, setHelpUrl] = useState('https://baidu.com');
  const onLogin = () => {
    if (userName === '' || password === '') {
      setMsg('用户名或密码不能为空');
      return;
    }
    setHelpUrl('');
    setMsg('');
    NavigationUtil.resetToHomePage({navigation});
    // LoginDao.getInstance()
    //   .login(userName, password)
    //   .then(res => {
    //     setMsg('登陆成功');
    //     NavigationUtil.resetToHomePage({});
    //   })
    //   .catch(err => console.log(err));
  };
  return (
    <SafeAreaView style={styles.root}>
      <Navbar
        title="登陆"
        rightTitle="注册"
        onRightClick={() => {
          NavigationUtil.registrstion({navigation});
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
        <ConfirmButton title="登陆" onClick={onLogin} />
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
