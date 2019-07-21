const waze = require('../')

waze.getTraffic({
  top: '-6.875856',
  bottom: '-6.950494',
  left: '107.564822',
  right: '107.674711'
}).then(result => {
  console.log('==============ALERTS================')
  result.alerts.forEach(alert => console.log(alert))
  console.log('==============JAMS================')
  result.jams.forEach(jam => console.log(jam))
})
