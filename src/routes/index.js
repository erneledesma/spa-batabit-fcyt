
import Header from '../templates/Header'
import Footer from '../templates/Footer'
import Home from '../page/Home'

const routes = {
    '/': Home,
    '/:id': Home
}

const router = async () => {
    const header = null || document.getElementById('header')
    const content = null || document.getElementById('content')
    const footer = null || document.getElementById('footer')

    header.innerHTML = await Header()
    // let render = routes[route] ? routes[route] : Error404
    content.innerHTML = await Home()
    footer.innerHTML = await Footer()

}

export default router
