import {request} from './request'

export function getLeftInfo(){
  return request({
    url: '/category'
  })
}

export function getRightInfo(maitKey){
  return request({
    url: '/subcategory',
    params: {
      maitKey: maitKey
    }
  })
}
