import axios from 'axios';
import {BASE_URI} from './pathMap';
import {customToastType} from 'utils/renderToastType';
import {GlobalLoading} from './renderToastType';

const instance = axios.create({
  baseURL: BASE_URI,
});

let globalLoadingId;
export default {
  get: instance.get,
  post: instance.post,
};
// Add a request interceptor
instance.interceptors.request.use(
  function (config) {
    // const toast = useCuzToast();
    // Do something before request is sent
    // debugger;
    // <GlobalLoading />;
    // GlobalLoading();
    // <GlobalLoading isLoading={true} />;
    // console.log(toast);
    // globalLoadingId = globalLoading.show('loading', {
    //   type: 'globalLoading',
    // });
    // GlobalLoading.show('success', {
    //   type: 'globalLoading',
    // });
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  },
);

// Add a response interceptor
instance.interceptors.response.use(
  function (response) {
    // const toast = useCuzToast();
    // toast.hide(globalLoadingId);
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    // globalLoading.hide(globalLoadingId);
    return response.data;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  },
);
