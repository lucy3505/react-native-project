import {View, Text, ActivityIndicator, StyleSheet} from 'react-native';
import Toast, {useToast} from 'react-native-toast-notifications';
export default customToastType = {
  renderType: {
    globalLoading: toast => (
      <View style={styles.loading}>
        <ActivityIndicator />
        <Text style={styles.loadingText}>{toast.message}</Text>
      </View>
    ),
  },
};

const styles = StyleSheet.create({
  loading: {
    display: 'flex',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  loadingText: {
    marginTop: 10,
    textAlign: 'center',
    fontSize: 40,
    color: 'green',
  },
});

export const useCuzToast = (message, props) => {
  const toast = useToast();
  return {
    ...toast,
    globalLoading: (message = 'loading...', props) =>
      toast.show(message, {
        type: 'globalLoading',
        placement: 'center',
        ...props,
      }),
  };
};

// export const GlobalLoading = message => {
//   const toast = useCuzToast();
//   return <ToastContainer></ToastContainer>;
// };
// GlobalLoading.showGlobal = () => {
//   toast.globalLoading();
// };
