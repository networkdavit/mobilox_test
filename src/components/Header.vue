<template>
    <header class="main-header">
      <router-link to="/" class="logo-link">
        <div class="d-flex align-items-center">
          <div class="logo">
            <img class="logo__img" src="https://members.mobilox.nl/mox/logo.png" alt="Mobilox Logo">
          </div>
          <div class="company-name">Mobilox</div>
        </div>
      </router-link>
  
      <div class="actions actions--right">
        <a href="#" class="actions__btn">
          <i class="far fa-envelope fa-lg"></i>
        </a>
        <a href="#" class="actions__btn">
          <i class="fas fa-tag fa-lg"></i>
        </a>
        <a href="#" class="actions__btn">
          <i class="fas fa-sign-out-alt fa-lg"></i>
        </a>
      </div>
    </header>
  </template>
  
  <style scoped>
    .main-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 10px 20px;
      background-color: #f8f9fa; 
    }
    
    .logo__img {
      height: 40px;
    }
    
    .company-name {
      margin-left: 10px; 
      font-size: 2rem; 
    }
  
    .logo-link {
      text-decoration: none; 
      color: inherit;
    }
  
    .actions {
      display: flex;
      gap: 10px;
    }
    
    .actions--right {
      margin-left: auto; 
    }
    
    .actions__btn {
      text-decoration: none;
      color: #495057; 
    }
  
    .fa-lg {
      font-size: 1.5em; 
    }
  </style>