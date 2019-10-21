import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios'
Vue.use(Vuex);

export let store=new Vuex.Store({
    state:{
        arr:[]
    },
    getters:{

    },
    mutations:{
        upa(state,payload){
            state.arr=payload;
            // console.log(state.arr);
        }
    },
    actions:{
        acta(connect){
            axios({
                url:"/aa",
                method:"get"
            }).then((ok)=>{
                // console.log(ok.data)
                connect.commit("upa",ok.data)
            })
            
        }
    }
})