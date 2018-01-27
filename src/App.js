import React from 'react'
import moment from 'moment'
import Push from 'push.js'

export default class extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      diff: null,
      targetDay: props.targetDay,
      targetHour: props.targetHour,
      targetMinute: props.targetMinute,
      targetDate: this.getTargetDate(this.props)
    }
  }

  getTargetDate ({ targetDay, targetHour, targetMinute }) {
    const formattedDay = moment()
      .isoWeekday(targetDay)
      .format('dddd')

    const formattedHour = moment()
      .set({
        hour: targetHour,
        minute: targetMinute,
        second: 0,
        millisecond: 0
      })
      .format('HH:mm:ss')

    return `Until next ${formattedDay} at ${formattedHour}`
  }

  getDifference () {
    if (moment().isoWeekday() < this.state.targetDay) {
      const targetDate = this.setTargetTime(
        moment().isoWeekday(this.state.targetDay)
      )
      return this.setState({ diff: moment.duration(targetDate.diff(moment())) })
    }

    if (moment().isoWeekday() === this.state.targetDay) {
      const targetDate = this.setTargetTime(moment())

      if (moment().isSame(targetDate, 'second')) {
        Push.create(`IT'S TIME TO GO HOME!!! xD`)
        return
      }
      if (moment().isBefore(targetDate, 'second')) {
        return this.setState({
          diff: moment.duration(targetDate.diff(moment()))
        })
      }
    }

    const targetDate = this.setTargetTime(
      moment()
        .add(1, 'weeks')
        .isoWeekday(this.state.targetDay)
    )
    return this.setState({ diff: moment.duration(targetDate.diff(moment())) })
  }

  setTargetTime (day) {
    return day.set({
      hour: this.state.targetHour,
      minute: this.state.targetMinute,
      second: 0,
      millisecond: 0
    })
  }

  buildCountdown () {
    if (this.state.diff) {
      return `${this.state.diff.days()} days, ${this.state.diff.hours()} hours, ${this.state.diff.minutes()} minutes and ${this.state.diff.seconds()} seconds`
    }
    return 'Loading...'
  }

  componentDidMount () {
    this.timer = setInterval(() => this.getDifference(), 1000)
  }

  componentWillUnmount () {
    clearInterval(this.timer)
  }

  render () {
    return (
      <section className="hero is-dark is-fullheight">
        <div className="hero-body">
          {this.state.diff && (
            <div className="container has-text-centered">
              <h1 className="title is-size-1">{this.buildCountdown()}</h1>
              <h2 className="subtitle is-size-3">{this.state.targetDate}</h2>
            </div>
          )}
        </div>
      </section>
    )
  }
}
