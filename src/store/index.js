
import { createStore } from 'vuex'

import coachesModule from './modules/coaches/index'

const store = createStore({
    modules:{
        coaches:coachesModule
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