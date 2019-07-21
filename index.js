const axios = require('axios')

const createAlert = require('./src/alert')
const createJam = require('./src/jam')

const SERVER_LIST = ['row-rtserver']

function notificationUrl (server, left, right, top, bottom) {
  return axios.get(`https://www.waze.com/${server}/web/TGeoRSS`, {
    params: {
      left,
      right,
      top,
      bottom,
      tk: 'community',
      format: 'JSON'
    }
  })
}

function getTraffic (segment) {
  if (!segment.top ||
      !segment.right ||
      !segment.bottom ||
      !segment.left) {
    return Promise.reject('Please provide top, right, bottom, left')
  }
  return Promise.all(SERVER_LIST.map(server => notificationUrl(server, segment.left, segment.right, segment.top, segment.bottom)))
    .then(responses => responses
      .reduce((prev, curr) => {
        const data = curr.data
        const newObj = {}
        if (data.alerts) {
          newObj.alerts = prev.alerts.concat(data.alerts.map(alert => createAlert(alert)))
        }
        if (data.jams) {
          newObj.jams = prev.jams.concat(data.jams.map(jam => createJam(jam)))
        }
        return Object.assign({}, prev, newObj)
      }, { alerts: [], jams: [] }))
}

module.exports = {
  getTraffic
}
