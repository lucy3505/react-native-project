import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {get, post} from './expand/dao/HiNet';
import Constants from './expand/dao/Constants';
export default (props: any) => {
  const [msg, setMsg] = useState('');
  //   const doFetch = () => {
  console.log(111);
  //     fetch('https://api.devio.org/uapi/test/test?requestPrams=aa')
  //       .then(res => res.json())
  //       .then(res => {
  //         setMsg(JSON.stringify(res));
  //       })
  //       .catch(e => {
  //         console.log(e);
  //         setMsg(JSON.stringify(e));
  //       });
  //   };
  const doFetch = () => {
    // get(Constants.test.api)({requestPrams: 'RN'})
    //   .then(res => {
    //     console.log(res);
    //     setMsg(JSON.stringify(res));
    //   })
    //   .catch(e => {
    //     console.log(e);
    //     setMsg(JSON.stringify(e));
    //   });

    const formData = new FormData();
    formData.append('requestPrams', 'RN');
    post(Constants.test.api)({requestPrams: 'rn'})({requestPrams: 'rn'})
      .then(res => {
        setMsg(JSON.stringify(res));
      })
      .catch(e => {
        console.log(e);
        setMsg(JSON.stringify(e));
      });
  };
  return (
    <SafeAreaView style={styles.root}>
      <TouchableOpacity onPress={doFetch}>
        <Text>加载</Text>
      </TouchableOpacity>
      <Text>{msg}</Text>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});
