<template>
    <div class="display-board">
        <h4>Всего товаров в магазе</h4>
        <div class="number">
        {{numberOfItems}}
        </div>
        <div class="btn">
            <b-button  @click='getAllItems()' type="button" variant="success">Все товары</b-button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'DisplayBoard',
        props: ['numberOfItems'],
        methods: {
            getAllItems() {
                this.$emit('getAllItems')
            }
        }
    }
</script>
