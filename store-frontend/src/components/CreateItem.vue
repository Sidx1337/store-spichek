<template>
  <div class="container">
    <div class="row">
        <div class="col-md-7 mrgnbtm">
        <h2>Добавить продукт</h2>
            <form>
                <div class="row">
                    <div class="form-group col-md-6">
                        <label for="title">Название</label>
                        <input type="text" class="form-control" v-model="title" name="title" id="title" aria-describedby="emailHelp" placeholder="Название" />
                    </div>
                    <div class="form-group col-md-6">
                        <label for="description">Описание</label>
                        <input type="text" class="form-control" v-model="description" name="description" id="description" placeholder="Описание" />
                    </div>
                </div>
                <div class="row">
                    <div class="form-group col-md-12">
                        <label for="price">Цена</label>
                        <input type="text" class="form-control" v-model="price" name="price" id="price" aria-describedby="emailHelp" placeholder="0.0" />
                    </div>
                </div>
                <button type="button" @click='createItem()' class="btn btn-danger">Создать</button>
            </form>
        </div>
    </div>
    </div>
</template>

<script>
export default {
  name: 'CreateItem',
  data() {
    return {
      title: '',
      description: '',
      price: 0
    }
  },
  methods: {
      createItem() {
          console.log(this.title)
          const payload = {
              title: this.title,
              description: this.description,
              price: this.price
          }
          this.$emit('createItem', payload)
          this.clearForm();
      },
      clearForm() {
          this.title = "";
          this.description = "";
          this.price = 0;
      }
  }
}
</script>