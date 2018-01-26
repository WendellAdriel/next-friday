import React from 'react'
import { render } from 'react-dom'
import moment from 'moment'
import '../node_modules/bulma/css/bulma.css'

const getDifference = (targetDay, targetHour) => {
  const targetDate = moment()

  if (targetDate.isoWeekday() <= targetDay && targetDate.hour() < targetHour) {
    return moment.duration(
      targetDate
        .isoWeekday(targetDay)
        .set({
          hour: targetHour,
          minute: 0,
          second: 0,
          millisecond: 0
        })
        .diff(moment())
    )
  }
  return moment.duration(
    targetDate
      .add(1, 'weeks')
      .isoWeekday(targetDay)
      .set({
        hour: targetHour,
        minute: 0,
        second: 0,
        millisecond: 0
      })
      .diff(moment())
  )
}

const App = ({ targetDay, targetHour }) => {
  const diff = getDifference(targetDay, targetHour)
  return (
    <section className="hero is-dark is-fullheight">
      <div className="hero-body">
        {diff && (
          <div className="container has-text-centered">
            <h1 className="title is-size-1">{`${diff.days()} days, ${diff.hours()} hours, ${diff.minutes()} minutes and ${diff.seconds()} seconds`}</h1>
            <h2 className="subtitle is-size-3">
              Until{' '}
              {moment()
                .isoWeekday(targetDay)
                .format('dddd')}{' '}
              at{' '}
              {moment()
                .set({
                  hour: targetHour,
                  minute: 0,
                  second: 0,
                  millisecond: 0
                })
                .format('HH:mm:ss')}
            </h2>
          </div>
        )}
      </div>
    </section>
  )
}

const renderApp = () =>
  render(<App targetDay={5} targetHour={17} />, document.getElementById('app'))

setInterval(renderApp, 1000)
