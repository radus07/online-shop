import Home from '../components/web/home/Home'
import SignIn from '../components/web/signIn/SignIn'
import Products from '../components/web/products/Products'
import ProductsList from '../components/web/products/ProductsList'
import Product from '../components/web/products/Product'

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
    component: Products,
    routes: [
      {
        path: '/products/all',
        component: ProductsList
      },
      {
        path: '/products/category/:category',
        component: ProductsList
      },
      {
        path: '/products/brand/:brand',
        component: ProductsList
      },
      {
        path: '/products/:id',
        component: Product
      }
    ]
  }
]

export {webRoutes}
