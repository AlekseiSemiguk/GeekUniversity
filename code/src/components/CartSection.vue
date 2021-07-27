<template>
    <div class="flex-box center">
        <form action="#" class="incart">
            <div class="incart__items">

                <CartItem v-bind:item="item" v-for="item of cartlist" />
               
            </div>
            <div class="incart__buttons">
                <button class="cart-button cart-button-left">CLEAR SHOPPING CART</button>
                <button class="cart-button">CONTINUE SHOPPING</button>
            </div>
        </form>
        <form action="#" class="cart-form">
            <div class="adress">
                <h3 class="adress__heading">SHIPPING ADRESS</h3>
                <input type="text" class="adress__input" placeholder="Bangladesh">
                <input type="text" class="adress__input" placeholder="State">
                <input type="text" class="adress__input" placeholder="Postcode / Zip">
                <button class="adress__button">GET A QUOTE</button>
            </div>
            <div class="summ">
                <h4 class="summ__sub">SUB TOTAL <span class="summ__price-sub">$ {{totalprice}}</span></h4>
                <h3 class="summ__total">GRAND TOTAL <span class="summ__price-total">$ {{totalprice}}</span></h3>
                <hr class="summ__line">
                <button class="summ__button">PROCEED TO CHECKOUT</button>
            </div>
        </form>
    </div>
</template>


<script>
import CartItem from './CartItem.vue'

export default {
    name: 'CartSection',
    components: {
        CartItem
    },
    computed: {
        cartlist() {
            return this.$store.getters.getCart
        },
        totalprice() {
            return this.$store.getters.getTotalPrice
        },
    }
    
}
</script>