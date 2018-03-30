import Home from '@/components/web/home/Home'
import SignIn from '@/components/web/signIn/SignIn'
import ProductsView from '@/views/web/Products'
import Products from '@/components/web/products/Products'
import Product from '@/components/web/products/Product'

const webRoutes = [
  {
    path: '/home',
    component: Home
  },
  {
    path: '/sign_in',
    component: SignIn
  },
  {
    path: '/products',
    component: ProductsView,
    routes: [
      {
        path: '/products/all',
        component: Products
      },
      {
        path: '/products/:type/:name',
        component: Products
      },
      {
        path: '/products/:id',
        component: Product
      }
    ]
  }
]

export {webRoutes}
