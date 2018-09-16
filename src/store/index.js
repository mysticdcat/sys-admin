import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 此文件管理着全局的状态树


const store = new Vuex.Store({
    state: {
        
        currentMenu:'402880636463f4e3016463f4e3e60000'//当前打开的菜单index （id）
    },
    mutations: {
        
    }
})

export default store;