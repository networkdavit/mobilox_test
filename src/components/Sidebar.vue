<template>
  <div id="app" class="d-flex app">
    <button class="navbar-toggler d-lg-none" type="button" @click="toggleMenu">
      <span class="navbar-toggler-icon"></span>
    </button>
    <aside class="bg-dark p-3">
      <nav class="sidebar">
        <ul class="nav flex-column">
          <li v-for="menuItem in menuItems" :key="menuItem.name" @click="toggleSubItems(menuItem)">
            <a class="nav-link" :class="{ active: showSubItems[menuItem.name] }">
              <i :class="'fas fa-' + menuItem.icon"></i> {{ $t('menu.' + menuItem.name) }}
            </a>
            <ul v-if="showSubItems[menuItem.name]" class="nav flex-column pl-3">
              <li v-for="subItem in menuItem.subItems" :key="subItem.name" class="nav-item">
                <a class="nav-link" @click="toggleSubItems(menuItem, subItem)">
                  <i :class="'fas fa-' + subItem.icon"></i> {{ $t('menu.' + subItem.name) }}
                </a>
              </li>
            </ul> 
          </li>
        </ul>
      </nav>
    </aside>
  </div>
</template>


<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router'; 

interface SubItem {
  name: string;
  icon: string;
  route?: string;
}

interface MenuItem {
  name: string;
  icon: string;
  subItems: SubItem[];
  route?: string;
}

const showSubItems = ref<Record<string, boolean>>({});
const isMenuVisible = ref<boolean>(false); // For controlling menu visibility
const $router = useRouter(); 

const toggleSubItems = (menuItem: MenuItem, subItem?: SubItem): void => {
  if (menuItem.route) {
    $router.push(menuItem.route);
  } else if (subItem && subItem.route) {
    $router.push(subItem.route);
  } else {
    showSubItems.value[menuItem.name] = !showSubItems.value[menuItem.name];
  }
};

const toggleMenu = () => {
  isMenuVisible.value = !isMenuVisible.value;
};


const menuItems: MenuItem[] = [
  { name: 'Dashboard', icon: 'home', subItems: [], route: '/' },
  { name: 'RDW-diensten', icon: 'car', subItems: [] },
  { name: 'Voertuigen', icon: 'car', subItems: [{ name: 'Auto\'s', icon: 'car', route: '/autos' }] },
  { name: 'Schadevoertuigen', icon: 'car-crash', subItems: [] },
  { name: 'Demontagevoertuigen', icon: 'tools', subItems: [] },
  { name: 'Onderdelen', icon: 'cogs', subItems: [] },
  { name: 'Werktuigen', icon: 'toolbox', subItems: [] },
  { name: 'Vaartuigen', icon: 'ship', subItems: [] },
  { name: 'Diversen', icon: 'th', subItems: [] },
  { name: 'Veiling', icon: 'gavel', subItems: [] },
  { name: 'Administratie', icon: 'file-alt', subItems: [] },
  { name: 'Tools', icon: 'wrench', subItems: [] },
  { name: 'Mijn account', icon: 'user', subItems: [] },
  { name: 'Instellingen', icon: 'cog', subItems: [] },
  { name: 'Nieuws', icon: 'newspaper', subItems: [] },
  { name: 'Handleiding', icon: 'book', subItems: [] },
  { name: 'Support', icon: 'life-ring', subItems: [] },
];
</script>



<style scoped>
  aside {

    width: 30vh;
    transition: width 0.3s ease;
  }




  nav.sidebar {
    width: 100%;
    margin-bottom: 20px;
  }

  .nav-link {
    color: white;
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  .nav-link.active {
    background-color: #031222;
  }

  .nav.flex-column.pl-3 {
    margin-left: 20px;
  }

  .nav-link i {
    margin-right: 10px;
  }


  @media (max-width: 767px) {


    .app {
      display: none !important;
    }
  }
</style>
