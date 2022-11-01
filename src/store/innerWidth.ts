const useInnerWidth = defineStore('innerWidth', {
  state: () => (
    { innerWidth: 0 }
  ),
  actions: {
    setInnerWidth() {
      this.innerWidth = window.innerWidth
      window.onresize = () => this.innerWidth = window.innerWidth
    },
  },
})

export default useInnerWidth
