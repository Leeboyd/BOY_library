import moment from 'moment'
export default {
  template:
  `
    <p>Offer ends in {{ month }} months {{ day }} days {{ hour }}:{{ minute }}:{{ second }}</p>
  `,
  props: {
    duedate: {
      type: String,
      default: '13-04-2017 00:00:00',
    }
  },
  data () {
    return {
      month: 0,
      day: 0,
      hour: 0,
      minute: 0,
      second: 0,
      timeCount: null,
      dueTime: moment(this.duedate, 'DD-MM-YYYY HH:mm:ss').utcOffset(8).unix(),
      currentTime: moment().utcOffset(8).unix(),
    }
  },

  mounted() {
    if (this.dueTime - this.currentTime <= 0) {
      // TimesUp handler
    } else {
      // initial a counter
      this.timeCount = setInterval(this.timer, 1000)
    }
  },

  methods: {
    timer() {
      // refresh currentTime
      this.currentTime = moment().utcOffset(8).unix()
      if (this.dueTime - this.currentTime <= 0) {
        clearInterval(this.timeCount);
      } else {
        let duration = moment.duration((this.dueTime - this.currentTime) * 1000, 'milliseconds')
        duration = moment.duration(duration.asMilliseconds() - 1000, 'milliseconds')
        this.month = moment.duration(duration).months()
        let d = moment.duration(duration).days()
        let h = moment.duration(duration).hours()
        let m = moment.duration(duration).minutes()
        let s = moment.duration(duration).seconds()
        this.day = $.trim(d).length === 1 ? '0' + d : d
        this.hour = $.trim(h).length === 1 ? '0' + h : h
        this.minute = $.trim(m).length === 1 ? '0' + m : m
        this.second = $.trim(s).length === 1 ? '0' + s : s
      }
    },
  }
}
