export default {
    fetchBun() {
        return [
            { title: 'bigsize', price: 100, calories: 40 },
            { title: 'smallsize', price: 50, calories: 20 },
        ]
    },

    fetchTopping() {
        return [
            { title: 'spice', price: 15, calories: 0 },
            { title: 'mayonnaise', price: 20, calories: 5 },
        ]
    },

    fetchStuffing() {
        return [
            { title: 'cheese', price: 10, calories: 20 },
            { title: 'salad', price: 20, calories: 5 },
            { title: 'potato', price: 15, calories: 10 },
        ]
    }
}