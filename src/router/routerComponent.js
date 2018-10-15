//tab
export const Home = () => require.ensure([], () => require('../components/tabbar/home'), 'home')
export const Member = () => require.ensure([], () => require('../components/tabbar/member'), 'home')
export const Cart = () => require.ensure([], () => require('../components/tabbar/cart'), 'home')
export const Search = () => require.ensure([], () => require('../components/tabbar/search'), 'home')