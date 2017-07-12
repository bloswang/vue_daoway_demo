/**
 * Created by Administrator on 2017/7/12 0012.
 */

import Mock from "mockjs"

Mock.mock('/api/seller',{
  code:0,
  data : data.seller
})

Mock.mock('/api/server',{
  code:0,
  data : data.server
})
