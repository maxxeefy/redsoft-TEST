<template>
    <div>
    <div class="picture" v-if="picture.currentCost">
        <img :src="picture.img"/>
        <div class="description">
            <h2>{{picture.title}}</h2>
            <div v-if="picture.currentCost" class="pictureBottom">
                <div class="cost">
                    <p v-if="picture.previousCost" class="previousCost">{{picture.previousCost}}</p>
                    <p>{{picture.currentCost}}</p>
                </div>
                <Loader v-if="loading"/>
                <button v-else-if="picture.cart" v-on:click="toCart">
                    <img src ="../../img/check.png">
                    В корзине
                </button>
                <button v-else-if="!picture.cart" v-on:click="toCart">
                    Купить
                </button>
            </div>
        </div> 
    </div>
        <div v-if="!picture.currentCost" class="picture pictureSoldOut">
        <img :src="picture.img"/>
        <div class="description">
            <h2>{{picture.title}}</h2>
            <div v-if="!picture.currentCost" class="soldOut">
                <p>Продана на аукционе</p>
            </div>
        </div> 
    </div>
    </div>

    
</template>

<script>
import Loader from '../Loader/Loader.vue'

export default {
    props: {
        picture: {
            type: Object,
            required: true
        },
        pictures: {
            type: Array,
            required: true
        }
    },
    data() {
        return {
            loading: false
        }
    },
    components: {
        Loader
    },
    methods: {
        toCart: function() {
            this.loading = true
            fetch('https://jsonplaceholder.typicode.com/posts/1')
                .then((response) => response.json())
                .then(json => {
                    setTimeout(() => {
                        console.log(json)
                        this.loading = false
                    }, 1000)
                    this.picture.cart = !this.picture.cart
                    console.log(this.pictures)
                    this.saveState()
                })
        },
        saveState() {
            const parsed = JSON.stringify(this.pictures);
            localStorage.setItem('pictures', parsed);
        }
    }
}
</script>

<style lang="scss">
    @import "../../styles/Picture.scss";
</style>