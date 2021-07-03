const express = require('express')
const cors = require('cors')

const app = express()
const port = 3000
app.use(cors())

app.get('/', (req, res) => {
  res.send({
    data: [
      {
        name: 'Fresh vibes. Sporty soul.',
        color: 'black',
        number: 821,
        displacement: '821',
        horse_power: 109,
        torque: 86,
        dry_weight: 180.5,
        seat_height: 805,
        safety: 'ABS'
      },
      {
        name: 'Fresh vibes. Sporty soul.',
        color: 'white',
        number: 797,
        displacement: '803',
        horse_power: 73,
        torque: 67,
        dry_weight: 175,
        seat_height: 805,
        safety: 'ABS'
      },
      {
        name: 'Fresh vibes. Sporty soul.',
        color: 'red',
        number: 797,
        displacement: '803',
        horse_power: 73,
        torque: 67,
        dry_weight: 175,
        seat_height: 805,
        safety: 'ABS'
      }
    ]
  })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
