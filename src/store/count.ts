const useCountStore = defineStore('count', {
  state: () => (
    { count: 0 }
  ),
  actions: {
    setCount() {
      this.count++
    },
    reduceCount() {
      this.count--
    },
  },
})

export default useCountStore
