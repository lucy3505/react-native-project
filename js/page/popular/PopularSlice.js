import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import request from '../../utils/request';
import {ACCOUNT_LOGIN, ACCOUNT_VALIDATEVCODE} from '../../utils/pathMap';
import {resolveModuleName} from 'typescript';
import axios from 'axios';
// import {GLOBAL_LOADING_FLAG} from 'src/constants/commonConstans';
// export const getLogin = createAsyncThunk(
//   `/get/login/`,
export const onRefreshPopular = createAsyncThunk(
  `pages/popular/refreshData`,
  async pageSize => {
    try {
      const res = await axios.get(
        'https://api.github.com/search/repositories?q=java&sort=stars',
      );
      console.log(res);
      return handleData(res.data, pageSize);
    } catch (err) {
      console.log(err);
    }
    // console.log('Res::', res);
  },
);

function handleData(data, pageSize) {
  let fixItems = [];
  if (data && data.items) {
    fixItems = data.items;
  }
  return {
    items: fixItems,
    projectModes:
      pageSize > fixItems.length ? fixItems : fixItems.slice(0, pageSize),
    pageIndex: 1,
  };
}

export const onLoadMorePopular = createAsyncThunk(
  `pages/popular/loadMore`,
  async ({pageIndex, pageSize, dataArray = [], cb}) => {
    try {
      //   const res = await request.get(
      //     'https://api.github.com/search/repositories?q=java&sort=stars',
      //   );
      //   console.log(res);
      let res = [];
      await new Promise((resolve, reject) => {
        setTimeout(() => {
          if ((pageIndex - 1) * pageSize >= dataArray.length) {
            if (typeof cb === 'function') {
              cb('no more');
            }
            res = {
              error: 'no more',
              pageIndex: --pageIndex,
              projectModes: dataArray,
            };
            resolve(res);
          } else {
            let max =
              pageSize * pageIndex > dataArray.length
                ? dataArray.length
                : pageIndex * pageSize;
            res = {
              pageIndex,
              projectModes: dataArray.slice(0, max),
            };
            resolve(res);
          }
        }, 500);
      });
      return res;
      //   await setTimeout(() => {
      //     if ((pageIndex - 1) * pageSize >= dataArray.length) {
      //       if (typeof cb === 'function') {
      //         cb('no more');
      //       }
      //       res = {
      //         error: 'no more',
      //         pageIndex: --pageIndex,
      //         projectModes: dataArray,
      //       };
      //     } else {
      //       debugger;
      //       let max =
      //         pageSize * pageIndex > dataArray.length
      //           ? dataArray.length
      //           : pageIndex * pageSize;
      //       res = {
      //         pageIndex,
      //         projectModes: dataArray.slice(0, max),
      //       };
      //     }
      //   }, 500);
      //   return res;
    } catch (err) {
      console.log(err);
    }
    // console.log('Res::', res);
  },
);

// export const getAddress = (lat, lng, callback) => {
//   fetch(`https://restapi.amap.com/v3/geocode/regeo?key=${web key}&location=${lng},${lat}`, {
//       method: 'GET',
//   })
//       .then(response => response.json())
//       .then(result => {
//           console.log('result', result);
//       })
//       .catch(error => {
//           console.log('error', error);
//       });
// };
const initialState = {
  poplarData: {},
  loading: false,
  hideLoadingMore: true,
  items: [], //原始数据
  projectModes: [], //此次要展示的数据，
  pageIndex: 1,
};

const PopularSlice = createSlice({
  name: 'popular',
  initialState,
  reducers: {
    // setSendVerifyCodeSuccess: (state, {payload}) => {
    //   state.poplarData = payload;
    // },
    setUserContent: (state, {payload}) => {
      //   state.userContent = payload;
    },
    resetData: (state, {payload}) => {
      //   state.sendVerifyCodeSuccess = initialState.sendVerifyCodeSuccess;
      state.poplarData = {};
    },
  },
  extraReducers: builder => {
    builder.addCase(onLoadMorePopular.pending, (state, {payload}) => {
      console.log('loading onLoadMorePopular');
      // state.v += payload;
      state.loading = true;
      state.hideLoadingMore = false;
    });
    builder.addCase(onLoadMorePopular.fulfilled, (state, {payload}) => {
      console.log('success onLoadMorePopular');
      console.log(payload);
      state.loading = false;
      state.hideLoadingMore = true;
      state.pageIndex = payload.pageIndex;

      state.projectModes = payload.projectModes;

      //   state.sendVerifyCodeSuccess = true;
    });
    builder.addCase(onRefreshPopular.pending, (state, {payload}) => {
      console.log('success onRefreshPopular');
      console.log(payload);
      state.loading = true;
      state.hideLoadingMore = true;

      //   state.sendVerifyCodeSuccess = true;
    });
    builder.addCase(onRefreshPopular.fulfilled, (state, {payload}) => {
      console.log('success onRefreshPopular');
      console.log(payload);
      //   state.loading = false;.
      //   state.poplarData = payload;
      state.projectModes = payload.projectModes;
      state.items = payload.items;
      state.loading = false;
      state.hideLoadingMore = true;
      state.pageIndex = payload.pageIndex;

      //   state.sendVerifyCodeSuccess = true;
    });

    // builder.addCase(onLoadPopularData.fulfilled, (state, {payload}) => {
    //   // state.v += payload;
    //   if (payload.code === '10001') {
    //     state.isNewUser = payload.msg;
    //     return;
    //   }
    //   state.userContent = payload;
    // });
    // builder.addCase(getAddress.fulfilled, (state, {payload}) => {
    //   state.loc = payload.regeocode?.addressComponent?.province;
    // });
  },
});

// export const {setSendVerifyCodeSuccess, resetData, setUserContent} =
//   PopularSlice.actions;
export default PopularSlice.reducer;
