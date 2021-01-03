import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
    message: 'Hello',
    username: 'selmanbaskaya',
};
const getters = {
    //Parametre olan state yukarıdaki state değişkenini temsil etmiyor. State yapısını temsil ediyor. state yerine x de yazarak state'in içeriğine ulaşabilirdik.
    welcomeMessage(state) {
        return `${state.message}, ${state.username}`;
    },
};
const mutations = {
    setUsername(state, name) {
        state.username = name;
    },
};
const actions = {
    updateUsername({ commit }, name) {
        /*
        //button'a tıklandıktan 3.5 saniye sonra set işlemi gerçekleştirilecek. setTimeout etc. işlemleri mutations içerisinde yapamayız, actions ile mutations'ın farkı budur.
        setTimeout(() => {
            commit('setUsername', name);
        }, 3500);
        */
        commit('setUsername', name);
    },
};

const store = new Vuex.Store({
    state,
    getters,
    mutations,
    actions,
    /*
    Modules kullanarak bir tane Store içerisinde birden fazla bibirinden farklı vuex store tanımlaması yapabiliriz. Yukarıdaki kullanımda böyle bir şey yapmamız mümkün değildir.
    modules: {
        user: {
            state,
            getters,
            mutations,
            actions,
        },
        cart: {
            state2,
            getters2,
            mutations2,
            actions2,
        }
    },
    */
})

export default store;