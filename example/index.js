const waze = require('../')

waze.getTraffic({
  top: '-6.89206',
  right: '107.64529',
  bottom: '-6.89883',
  left: '107.63186'
}).then(result => {
  console.log('==============ALERTS================')
  result.alerts.forEach(alert => console.log(alert))
  console.log('==============JAMS================')
  result.jams.forEach(jam => console.log(jam))
})
