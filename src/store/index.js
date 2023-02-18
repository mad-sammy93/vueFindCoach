
import { createStore } from 'vuex'

import coachesModule from './modules/coaches/index'

const store = createStore({
    modules:{
        coaches:coachesModule
    },
    state() {
        return{
            userId: 'c3'
        }
    },
    getters: {
       userId(state) {
        return state.userId;
       } 
    }
});

export default store


// import { defineStore } from 'pinia'

// import coachesModule from './modules/coaches/index'
// const useAlertsStore = defineStore({
//     modules:{
//         coaches:coachesModule
//     }
// });

// export default store