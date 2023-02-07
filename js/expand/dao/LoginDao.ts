import Constants from './Constants';
import {post} from './HiNet';

export default class LoginDao {
  private static instance: LoginDao;
  private constructor() {}
  public static getInstance(): LoginDao {
    if (!LoginDao.instance) {
      LoginDao.instance = new LoginDao();
    }
    return LoginDao.instance;
  }

  login(userName: string, password: string): Promise<any> {
    return new Promise((resolve, reject) => {
      const {
        login: {api},
      } = Constants;
      const formData = new FormData();
      formData.append('username', userName);
      formData.append('password', password);
      post(api)(formData)()
        .then((res: any) => {
          const {code, data, msg} = res;
          if (code === 0) {
            resolve(data || msg);
          } else {
            reject(res);
          }
        })
        .catch(e => {
          console.log(e);
        });
    });
  }
}
