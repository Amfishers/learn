export default {
  // 3: 配置store中的数据/存/取
  state:{
    num:80
  },
  //取数据
  getters:{
    getNum(state) {
      return state.num;
    }
  },
  // 操作数据
  mutations:{ // 只能是同步代码
    addNum(state,payload) {
      // =====丢失快照记录======
      // setTimeout(function () {
      //   state.num += payload.num 
      //   // 可能接受的值需要与后台请求进行运算再赋值
      // },1000);
      state.num += payload.num;
    }
  },
  // 行为，在行为中，可以存在异步操作，但是最终还是通知mutations
  actions:{
    addNumByServerRate(store,payload) {
      // 这里有异步没有关系，可以记录快照
      setTimeout(function() {
        // 后台比例是 1
        let rate = 1;
        store.commit('addNum',{ num: payload.num * rate});
      },1000)
    }  
  }
};