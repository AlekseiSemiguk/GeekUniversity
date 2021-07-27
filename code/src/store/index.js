import { createStore } from 'vuex'

export default createStore({
  state: {
    catalog: [],
    cart: []
  },
  getters: {
    getCatalog(state) {
      return state.catalog
    },
    getCart(state) {
      return state.cart
    },
    getTotalPrice(state) {
      return state.cart.reduce((acc, good) => acc + good.price * good.quantity, 0);
    }
  },
  mutations: {
    setCatalog(state, payload) { state.catalog = [...state.catalog, ...payload] },
    addToCart(state, goodId) {
      const goodInCart = state.cart.find((good) => good.id === goodId)
      if (goodInCart) {
        goodInCart.quantity++
      } else {
        const good = state.catalog.find((good) => good.id === goodId)
        state.cart.push({ ...good, quantity: 1 })
      }
    },
    deleteFromCart(state, goodId) {
      const index = state.cart.findIndex(g => g.id === goodId);
      state.cart.splice(index, 1);
    },
    changeQuantity(state, data) {
      const good = state.cart.find(g => g.id === data.id);
      good.quantity = +data.quantity;
    }
  },
  actions: {
    loadCatalog({ commit }) {
      return fetch('api/good')
        .then((response) => {
          return response.json()
        })
        .then((goodList) => {
          commit('setCatalog', goodList)
        })
    },

    loadToCart({ commit }, good) {
      return fetch('api/cart', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(good)
      })
        .then((response) => {
          commit('addToCart', good.id)
          console.log(good)
        })

    }
  }
})




