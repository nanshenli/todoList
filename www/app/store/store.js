// import actions from "../actions/actions.js"
// import mutations from  "../mutations/mutations.js"
// import getters from "../getters/getters.js"
//
// export const storeObj = {
//     state:{
//         todos:[]
//     },
//     mutations:{
//         ...mutations
//     },
//     actions:{
//         ...actions
//     },
//     getters:{
//         ...getters
//     }
// }

import actions from "../actions/actions.js"
import mutations from "../mutations/mutations.js"
import getters from "../getters/getters.js"

export const storeObj = {
    state:{
        todos:[]
    },
    actions:{
        ...actions
    },
    mutations:{
        ...mutations
    },
    getters:{
        ...getters
    }
}