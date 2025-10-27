'use client'

import { useEffect, useState } from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Label, ReferenceLine } from 'recharts'

// Generate s33:xSWYRL ratio growth data
const data = [
  { epoch: 1, ratio: 1.00 },
  { epoch: 2, ratio: 1.05 },
  { epoch: 3, ratio: 1.12 },
  { epoch: 4, ratio: 1.18 },
  { epoch: 5, ratio: 1.26 },
  { epoch: 6, ratio: 1.34 },
  { epoch: 7, ratio: 1.42 },
  { epoch: 8, ratio: 1.49 },
  { epoch: 9, ratio: 1.55 },
  { epoch: 10, ratio: 1.62 },
]

export default function s33RatioChart() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div style={{ width: '100%', height: '384px', backgroundColor: '#f5f5f5', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Loading chart...</div>
  }

  return (
    <div style={{ width: '100%', height: '384px' }}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 30,
            bottom: 50,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="epoch"
            type="number"
            domain={[1, 10]}
            ticks={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
          >
            <Label value="Epoch #" offset={-5} position="bottom" style={{ fill: '#808080' }} />
          </XAxis>
          <YAxis
            domain={[1.0, 1.7]}
            ticks={[1.0, 1.2, 1.4, 1.6]}
            tickFormatter={(value) => value.toFixed(2)}
          >
            <Label value="s33:xSWYRL" angle={-90} offset={5} position="left" style={{ textAnchor: 'middle', fill: '#808080' }} />
          </YAxis>
          <Tooltip
            formatter={(value) => value.toFixed(2)}
            labelFormatter={(label) => `Epoch ${label}`}
          />
          <ReferenceLine
            y={1.0}
            stroke="hsl(280, 100%, 50%)"
            strokeDasharray="5 5"
            label={{ value: '1 s33 = 1.00 xSWYRL', position: 'top', fill: '#808080' }}
          />
          <Legend verticalAlign="bottom" wrapperStyle={{ paddingTop: '15px' }} />
          <Line
            type="monotone"
            dataKey="ratio"
            stroke="hsl(222, 100%, 50%)"
            strokeWidth={2}
            dot={false}
            name="s33:xSWYRL Ratio"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
