import HTTP from './HTTP'

class UserModel extends HTTP {
  constructor($http) {
    super($http)
    this.api = {
      getUserList: {
        route: 'users',
        methods: 'get'
      }
    }
  }

  async getUserList(queryInfo) {
    console.log(queryInfo)
    const { data: res } = await this.http.get(this.api.getUserList.route, {
      params: queryInfo
    })
    console.log(res)
    return res
  }
}

export default UserModel
