import {request} from './request'

export function getLeftInfo(){
  return request({
    url: '后端路由'
  })
}

export function getRightInfo(maitKey){
  return request({
    url: '后端路由',
    params: {
      maitKey: maitKey
    }
  })
}
