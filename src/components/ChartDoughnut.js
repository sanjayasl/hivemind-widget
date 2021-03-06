// import Chart from 'chart.js'

export default {
  render: function (createElement) {
    return createElement(
      'div', {
        style: this.styles,
        class: this.cssClasses
      },
      [
        createElement(
          'canvas', {
            attrs: {
              id: this.chartId,
              width: this.width,
              height: this.height
            },
            ref: 'canvas'
          }
        )
      ]
    )
  },

  props: {
    chartId: {
      default: 'doughnut-chart',
      type: String
    },
    width: {
      default: 400,
      type: Number
    },
    height: {
      default: 400,
      type: Number
    },
    cssClasses: {
      type: String,
      default: ''
    },
    styles: {
      type: Object
    }
  },

  data () {
    return {
      defaultOptions: {
      },
      plugins: []
    }
  },

  methods: {
    addPlugin (plugin) {
      this.plugins.push(plugin)
    },
    renderChart (data, options) {
      let chartOptions = Object.assign({}, this.defaultOptions, options)

      this._chart = new Chart(
        this.$refs.canvas.getContext('2d'), {
          type: 'doughnut',
          data: data,
          options: chartOptions,
          plugins: this.plugins
        }
      )
    }
  },

  beforeDestroy () {
    if (this._chart) {
      this._chart.destroy()
    }
  }
}