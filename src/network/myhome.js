import {request} from './myrequest';

export function getHomeMultidata(){
  return request({
    url: '后端路由'
  })
}


export function getHomeGoods(type,page){
  return request({
    url: '后端路由',
    params: {
      type,
      page
    }
  })
}


