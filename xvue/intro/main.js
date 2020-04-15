
var eventBus = new Vue();

Vue.component('product-details', {
  props: {
    details: {
      type: Array,
      required: true
    }
  },
  template: `
    <ul>
      <li v-for="detail in details">{{ detail }}</li>
    </ul>
  `
});

Vue.component('product', {
  props: {
    premium: {
      type: Boolean,
      required: true
    }
  },
  template: `
  <div class="product">

    <div class="product-image">
      <img v-bind:src="image" >
    </div>

    <div class="product-info">
      <h1>{{ title }}</h1>
      <p>{{ description }}</p>
      <p v-if="inStock > 10">In Stock</p>
      <p v-else-if="inStock <= 10 && inStock > 0">Almost sold out!</p>
      <p v-else :class="{ outOfStock: !inStock }">Out of Stock</p>
      <p>{{ sale }}</p>
      <p>Shipping: {{ shipping }}</p>

      <!-- ul>
        <li v-for="detail in details">{{ detail }}</li>
      </ul -->
      <product-details :details="details"></product-details>

      <div v-for="(variant, index) in variants"
        :key="variant.variantId"
        class="color-box"
        :style=" {backgroundColor: variant.variantColor }"
        @mouseover="updateProduct(index)">
      </div>

      <ul>
        <li v-for="size in sizes">{{ size }}</li>
      </ul>
      <span v-if="onSale"><p>On Sale!</p></span>
      <a v-bind:href="link" target="_blank">More products like this</a>
      <br><br>

      <button v-on:click="addToCart"
        :disabled="!inStock"
        :class="{ disabledButton: !inStock }">Add to Cart</button>

      <button @click="removeFromCart">Remove from Cart</button>
      
    </div>

    <!-- div>
      <p v-if="!reviews.length">There are no reviews yet.</p>
      <ul v-else>
          <li v-for="(review, index) in reviews" :key="index">
            <p>{{ review.name }}</p>
            <p>Rating:{{ review.rating }}</p>
            <p>{{ review.review }}</p>
            <p>Recommended: {{ review.recommend }}</p>
          </li>
      </ul>
    </div -->

    <!-- product-review @review-submitted="addReview"></product-review -->
    <product-tabs :reviews="reviews"></product-tabs>

  </div>
  `,
  data() {
    return {
      brand: 'Vue Mastery',
      product: 'Socks',
      description: 'A nice pair of socks...',
      onSale:true,
      details: ["80% cotton", "20% polyester", "Gender neutral"],
      variants: [
        {
          variantId: 2234,
          variantColor: "green",
          variantImage: './assets/green_socks.png',
          variantQuantity: 10
        },
        {
          variantId: 2235,
          variantColor: "blue",
          variantImage: './assets/blue_socks.png',
          variantQuantity: 0
        }
      ],
      reviews: [],
      sizes: [
        'S', 'M', 'L', 'XL'
      ],
      cart: 0,
      onSale: true,
      selectedVariant: 0,
      link:'https://www.amazon.com/s/ref=nb_sb_noss?url=search-alias%3Daps&field-keywords=socks'
    }
  },
  methods: {
    addToCart: function () {
    //  this.cart += 1;
    console.log('addToCart ' + this.variants[this.selectedVariant].variantId);
      this.$emit('add-to-cart',
      this.variants[this.selectedVariant].variantId);
    },
    removeFromCart() {
    //  this.cart -= 1;
      this.$emit('remove-from-cart',
      this.variants[this.selectedVariant].variantId);
    },
    updateProduct(index) {
      this.selectedVariant = index;
      console.log(this.selectedVariant);
    },
    addReview(productReview) {
      this.reviews.push(productReview);
    }
  },
  computed: {
    title: {
      get: function () {
        return this.brand + ' ' + this.product;
      }
    },
    image() {
      return this.variants[this.selectedVariant].variantImage;
    },
    inStock() {
      return this.variants[this.selectedVariant].variantQuantity;
    },
    shipping() {
      if (this.premium) {
        return "Free"
      }
        return 2.99
    },
    sale() {
      if (this.onSale) {
        return this.brand + ' ' + this.product + ' are on sale!'
      }
      return this.brand + ' ' + this.product + ' are not on sale!'
    }
  },
  mounted() {
    eventBus.$on('review-submitted', productReview => {
      console.log(JSON.stringify(productReview));
      this.reviews.push(productReview)
    })
  }
});

Vue.component('product-review', {
  template: `
    <form class="review-form" @submit.prevent="onSubmit">
    
      <p class="error" v-if="errors.length">
        <b>Please correct the following error(s):</b>
        <ul>
          <li v-for="error in errors">{{ error }}</li>
        </ul>
      </p>

      <p>
        <label for="name">Name:</label>
        <input id="name" v-model="name">
      </p>
      
      <p>
        <label for="review">Review:</label>      
        <textarea id="review" v-model="review"></textarea>
      </p>
      
      <p>
        <label for="rating">Rating:</label>
        <select id="rating" v-model.number="rating">
          <option>5</option>
          <option>4</option>
          <option>3</option>
          <option>2</option>
          <option>1</option>
        </select>
      </p>

      <p>Would you recommend this product?</p>
      <label>
        Yes
        <input type="radio" value="Yes" v-model="recommend"/>
      </label>
      <label>
        No
        <input type="radio" value="No" v-model="recommend"/>
      </label>

      <p>
        <input type="submit" value="Submit">  
      </p>    
    
  </form>
  `,
  data() {
    return {
      name: null,
      review: null,
      rating: null,
      recommend: null,
      errors: []
    }
  },
  methods: {
    onSubmit() {
      this.errors = []
      if (this.name && this.review && this.rating && this.recommend) {
        let productReview = {
          name: this.name,
          review: this.review,
          rating: this.rating,
          recommend: this.recommend
        }
        eventBus.$emit('review-submitted', productReview)
        console.log('onsubmit ' + productReview.name)
        this.name = null
        this.review = null
        this.rating = null
        this.recommend = null
      } else {
        if (!this.name) this.errors.push("Name required.")
        if (!this.review) this.errors.push("Review required.")
        if (!this.rating) this.errors.push("Rating required.")
        if (!this.recommend) this.errors.push("Recommendation required.")
      }
    }
  }
})

Vue.component('product-tabs', {
  props: {
    reviews: {
      type: Array,
      required: false
    }
  },
  template: `
    <div>
    
      <div>
        <span class="tabs" 
              :class="{ activeTab: selectedTab === tab }"
              v-for="(tab, index) in tabs"
              :key="index"
              @click="selectedTab = tab"
        >{{ tab }}</span>
      </div>

      <div v-show="selectedTab === 'Reviews'">
          <p v-if="!reviews.length">There are no reviews yet.</p>
          <ul v-else>
              <li v-for="review in reviews">
                <p>{{ review.name }}</p>
                <p>Rating: {{ review.rating }}</p>
                <p>{{ review.review }}</p>
                <p>Recommended: {{ review.recommend }}
              </li>
          </ul>
      </div>

      <div v-show="selectedTab === 'Make a Review'">
        <product-review></product-review>
      </div>
  
    </div>
  `,
  data() {
    return {
      tabs: ['Reviews', 'Make a Review'],
      selectedTab: 'Reviews'
    }
  }
})

var app = new Vue({
  el: '#app',
  data: {
    premium: true,
    cart: []

  },
  methods: {
    updateCart(id) {
      this.cart.push(id);
    },
    removeItem(id) {
      console.log(JSON.stringify(this.cart));
      for (var i = this.cart.length - 1; i >= 0; i--) {
        if (this.cart[i] === id) {
           this.cart.splice(i, 1);
           break;
        }
      }
    }
  }
});
