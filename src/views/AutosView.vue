<template>
  <div class="autos-view">
    <input v-model="searchTerm" placeholder="Search by name" class="form-control mb-4" />

    <div v-for="product in filteredProducts" :key="product.id" class="product-item card">
      <div class="product-info">
        <div class="product-left">
          <div class="product-image">
            <img :src="product.picture !== false ? product.picture : 'https://members.mobilox.nl/mox/no-image-VOERTUIGEN_AUTO.png'" :alt="product.title" class="img-fluid zoom-effect" />
          </div>
          <div class="product-details">
            <p class="product-title card-title">{{ product.title }}</p>
            <p class="product-description card-text">{{ product.description }}</p>
            <div class="product-icons">
              <div v-for="(iconUrl, index) in iconUrls" :key="index" class="icon-container">
                <img :src="iconUrl" class="icon-small" />
                <div 
                  v-if="product.advertisement && product.advertisement.koppelingen && product.advertisement.koppelingen[index] && product.advertisement.koppelingen[index].advertisement && product.advertisement.koppelingen[index].advertisement.status === 'adv_active'" 
                  class="bar active"
                ></div>
                <div 
                  v-else 
                  class="bar"
                ></div>
              </div>
            </div>
          </div>
        </div>
        <div class="product-right">
          <div class="product-price-options">
            <div class="product-price">
              <div class="price-tag" v-if="product.price !== null">
                <strong>€ {{ product.price.toFixed(2) }}</strong>
              </div>
              <div class="price-tag" v-else>
                <strong>€ </strong>
              </div>
            </div>
            <div class="options">
              <i class="fas fa-bullhorn mx-2"></i>
              <i class="fas fa-bars"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import productsData from '/data/data.json';

const products = productsData.products;
const searchTerm = ref('');

const filteredProducts = computed(() => {
  const term = searchTerm.value.toLowerCase();
  return products.filter((product: { title: string; }) => product.title.toLowerCase().includes(term));
});

// Icon URLs
const iconUrls = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5m5Di3tklR2LfAAiE3tFAdwzCHrVyIn1WGGYgjOSjiA&s",
  "https://cdn1.iconfinder.com/data/icons/transportation-28/100/16_Car_side-512.png",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAUWQaqIBS-rgQnEMsj3bgaKl_CucXhpcZdg&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvVvYCurkinsKEmnz90EjiUtTp3EG_GQ5hcg&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgoMgvLP0nXHBcskHeQIr1W2xyniGJDZ8Lgw&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-M_XWmObl8t54ZRrKVTgaLr7Wu_jAOGoBBA&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2oU0ELrOU7O0RbO-RL7CEjuQPmId8IB3zZA&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkVYpzI3vCe4QU2aKRY7jmOSJXaoVaGL67IA&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSroGhv6P3g9g6DqxcRzhGxg8TBqdoF4vuDcw&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQY75ZrDDbpjQevwpPlVk3S8_ej407QHpGNQ&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7vAajNwNm9qFes1EnR3BzuqGUIJExGtvOwg&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST4AmYPas2wa-G3KfwAiKL4DEMBYG9H-p1dQ&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIZtT45w5wwQqh4NuPJF2lj4Kk0tAUW0t_nA&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC42T5iF5uFXg-NU7Vo6uwRTBRcEvTUE9LGA&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOUvnUtyIlYwo3vuC3-QhniIYLzzixjFKFmA&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyf-zRB5J1cp0Dc4Qwp9nchQZk-Rk0mx2WWA&s"
];
</script>

<style scoped>
.autos-view {
  padding: 20px;
}

.product-item {
  cursor: pointer;
  margin-bottom: 20px;
}

.product-info {
  display: flex;
  justify-content: space-between;
}

.product-left {
  display: flex;
  align-items: flex-start;
}

.product-right {
  display: flex;
  align-items: center;
}

.product-title {
  font-size: 1.5rem;
  margin-bottom: 10px;
  color: #333333;
}

.product-description {
  color: #666666;
}

.price-tag {
  margin-right: 30px;
  padding: 5px 10px;
  min-width: 14vh;
  background-color: #f8f9fa;
  border: 1px solid #ced4da;
  border-radius: 5px;
  font-size: 12px;
}


.zoom-effect {
  transition: transform 0.9s ease;
}

.zoom-effect:hover {
  transform: scale(1.5);
}

.product-image {
  max-width: 15vh;
  height: auto;
}

.product-details {
  margin-left: 10px;
}

.options i {
  margin-right: 5px;
}

.icon-small {
  width: 5vh;
  height: 5vh;
  margin-right: 5px;
}

.bar {
  height: 4px;
  background-color: #cacaca;
  width: 5vh;
  margin-top: 3px;
}

.bar.active {
  background-color: green;
}

.product-icons {
  display: flex;
  flex-wrap: wrap;
  margin-bottom:5px;
}

@media (max-width: 767px) {
  .product-info {
    flex-direction: column;
    align-items: flex-start; 
  }

  .product-left {
    order: 1; 
    margin-bottom: 10px; 
  }

  .product-right {
    order: 2; 
    margin-top: 10px; 
    align-self: flex-start;
  }

  .product-title {
    margin-bottom: 5px;
  }

  .product-description {
    margin-bottom: 5px;
  }
}

</style>
