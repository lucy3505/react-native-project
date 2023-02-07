import Constants from './Constants';
/**
 * 发送get请求
 * @param api 要请求的接口
 */
export function get(api: string) {
  return async (params?: {}) => {
    const {headers, url} = Constants;
    return handleData(
      fetch(buildParams(url + api, params), {
        headers: {
          ...headers,
        },
      }),
    );
  };
}

export function post(api: string) {
  /**
   * 第一个参数作为Body参数，第二个参数作为URL path或者查询参数
   */
  return (params: {}) => {
    return async (queryParams?: {} | string) => {
      const {headers, url} = Constants;
      var data = params instanceof FormData ? params : JSON.stringify(params);
      return handleData(
        fetch(buildParams(url + api, queryParams), {
          method: 'POST',
          body: data,
          headers: {
            'content-type': 'application/json',
            ...headers,
          },
        }),
      );
    };
  };
}

/**
 *
 * @param doAction
 * @returns
 */

function handleData(doAction: Promise<any>) {
  return new Promise((resolve, reject) => {
    doAction
      .then(res => {
        //解析Content-Type 防止将非Json数据进行json转换
        const type = res.headers.get('Content-Type');
        if ((type || '').indexOf('json') !== -1) {
          return res.json();
        }
        return res.text();
      })
      .then(res => {
        console.log(JSON.stringify(res));
        // resolve(res);
        if (typeof res === 'string') {
          throw new Error(res);
        }
        const {code, msg, data: {list = undefined} = {}} = res;
        if (code === 401) {
          //todo 跳转到登录页
          return;
        }
        resolve(list || res);
      })
      .catch(err => {
        console.log(err);
        reject(err);
      });
  });
}
/**
 * 构建url参数
 * @param url
 * @param params
 * @returns
 */

function buildParams(url: string, params?: {} | string): string {
  let newUrl = new URL(url),
    finalUrl;
  if (typeof params === 'object') {
    for (const [key, value] of Object.entries(params)) {
      newUrl.searchParams.append(key, value as string);
    }
    finalUrl = newUrl.toString();
  } else if (typeof params === 'string') {
    finalUrl = url.endsWith('/') ? url + params : url + '/' + params;
  } else {
    finalUrl = newUrl.toString();
  }
  console.log('---buildParams----:', finalUrl);
  return finalUrl;
}
