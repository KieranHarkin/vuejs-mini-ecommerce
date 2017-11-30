import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/pages/Home';
import Cart from '@/pages/Cart';

import Index from '@/pages/Admin/Index';
import New from '@/pages/Admin/New';
import Products from '@/pages/Admin/Products';
import Edit from '@/pages/Admin/Edit';



Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart,
    },
    {
      path: '/admin',
      name: 'Admin',
      // Parent routes still has a component
      component: Index,

      // Child routes
      children: [
        {
          path: 'new',
          name: 'New',
          component: New
        },
        {
          path: '',
          name: 'Products',
          component: Products
        },
        {
          path: 'edit/:id',
          name: 'Edit',
          component: Edit
        }
      ]

    },
  ],
});
