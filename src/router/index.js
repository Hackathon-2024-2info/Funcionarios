import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/components/editarInfos.vue')
    },
    {
      path: '/estoque',
      name: 'estoque',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/EstoqueView.vue')
    },
    {
      path: '/servicos/:id',
      name: 'servicos',
      component: () => import('../views/ServicosFuncionariosView.vue'),
      props: true
    },
    // {
    //   path: '/servicos',
    //   name: 'servicos',
    //   component: () => import('../views/ServicosAdminView.vue'),
    //   props: true
    // },
    {
      path: '/servicosadmin',
      name: 'servicosadmin',
      component: () => import('../views/ServicosAdminView.vue')
    },
    {
      path: '/relatoriosadmin',
      name: 'relatoriosadmin',
      component: () => import('../views/RelatoriosView.vue')
    },
    {
      path: '/relatorios',
      name: 'relatorios',
      component: () => import('../views/RelatoriosFuncionariosView.vue')
    },
    {
      path: '/estoqueadmin',
      name: 'estoqueadmin',
      component: () => import('@/views/EstoqueAdminView.vue')
    },
    {
      path: '/curriculo',
      name: 'curriculo',
      component: () => import('@/views/PagCurriculoView.vue')
    },
    {
      path: '/perfil',
      name: 'perfil',
      component: () => import('../components/pagPerfil.vue')
    },
    {
      path: '/chamadosadmin',
      name: 'chamadosadmin',
      component: () => import('@/views/ChamadosAdminView.vue')
    },
   {
      path: '/removeracesso',
      name: 'removeracesso',
      component: () => import('@/views/RemoverAcessoView.vue')
    },
    {
      path: '/menu',
      name: 'menu',
      component: () => import('@/views/MenuFuncView.vue')
    },
    {
      path: '/detalheservico/:id',
      name: 'detalheservico',
      component: () => import('@/views/DetalhesServicoAdminView.vue'),
      props: true,
    },
  ],
  linkActiveClass: 'active',
  linkExactActiveClass: 'exact-active'
})

export default router
