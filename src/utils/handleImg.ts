export default (img: string) => {
  if (!import.meta.env.DEV && img.includes('/')) { // 處理非開發環境路徑
    const tempImg = img.split('/')
    img = tempImg[tempImg.length - 1]
  }

  return new URL(`../assets/images/${img}`, import.meta.url).href
}
