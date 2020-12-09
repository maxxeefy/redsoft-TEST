<template>
  <div id="catalog">
      <h1>Картины эпохи Возрождения</h1>
      <div class="pucturesContainer">
        <Picture 
            :key="picture.id"
            v-for="picture of pictures"
            v-bind:picture="picture"
            v-bind:pictures="pictures"
        />
      </div>
  </div>
</template>

<script>
import Picture from '../Picture/Picture.vue'
import Botichelli from '../../img/Botichelli.png'
import Leonardo from "../../img/Leonardo.png"
import Michelangelo from "../../img/Michelangelo.png"
import Rembrandt from "../../img/Rembrandt.png"


export default {
  data() {
    return {
      pictures : [
        {id: 1, img: Botichelli, title: "«Рождение Венеры» Сандро Боттичелли", previousCost: "2 000 000 $", currentCost: "1 000 000 $", cart: false},
        {id: 2, img: Leonardo, title: "«Тайная вечеря» Леонардо да Винчи", currentCost: "3 000 000 $", cart: false},
        {id: 3, img: Michelangelo, title: "«Сотворение Адама» Микеланджело", previousCost: "6 000 000 $", currentCost: "5 000 000 $", cart: true},
        {id: 4, img: Rembrandt, title: "«Урок анатомии» Рембрандт"},
      ]
    }
  },
  components: {
      Picture
  },
  beforeCreate() {
    console.log(localStorage)
  },
  mounted() {
    if (localStorage.getItem('pictures')) {
      try {
        this.pictures = JSON.parse(localStorage.getItem('pictures'));
      } catch(e) {
        localStorage.removeItem('pictures');
      }
    }
  }
}
</script>

<style lang="scss">
    @import "../../styles/Catalog.scss";
</style>