import axios from 'axios'

let host = 'http://101.132.46.146:3030';
let local_host = 'http://localhost:3030';
let api = host

function getLv1CateList(categoryId) {
  return new Promise((resolve, reject)=>{
    axios.get(api+'/mobile-goods/lv1-list',{params:{categoryId}}).then((res)=>{
      resolve(res)
    },(err)=>{
      console.log(err)
    })
  })
}

function getLv2CateList(categoryId,subCategoryId) {
  // this.$route.query.categoryId,this.$route.query.subCategoryId
  return new Promise((resolve, reject)=>{
    axios.get(api+'/mobile-goods/lv2-list',{params:{categoryId,subCategoryId}}).then((res)=>{
      resolve(res)
    },(err)=>{
      console.log(err)
    })
  })
}

function getGoodsDetail(id) {
  return new Promise((resolve, reject)=>{
    axios.get(api+'/mobile-goods/detail',{params:{id}}).then((res)=>{
      resolve(res)
    },(err)=>{
      console.log(err)
    })
  })
}

// detail

export default {
  getLv1CateList,
  getLv2CateList,
  getGoodsDetail
}