<template>
    <div class="display-board">
        <h4>Товары в корзине</h4>
        <div class="number">
        {{numberOfItemsInCart}}
        </div>
        <div class="btn">
            <b-button type="button" variant="success">Оформить</b-button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Cart',
        props: ['numberOfItemsInCart'],
        methods: {
        }
    }
</script>
