export default (img: string) => new URL(`../assets/images/${img}`, import.meta.url).href
