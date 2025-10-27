'use client'

import { useEffect, useState } from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Label } from 'recharts'

// Generate vesting penalty data
const data = [
  { day: 1, penalty: 50 },
  { day: 14, penalty: 50 },
  { day: 60, penalty: 36.67 },
  { day: 90, penalty: 25 },
  { day: 135, penalty: 12.5 },
  { day: 180, penalty: 0 },
]

export default function VestingPenaltyChart() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div style={{ width: '100%', height: '340px', backgroundColor: '#f5f5f5', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Loading chart...</div>
  }

  return (
    <div style={{ width: '100%', height: '340px' }}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 50,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="day"
            type="number"
            domain={[1, 180]}
            ticks={[1, 14, 135, 180]}
            tickFormatter={(value) => `Day ${value}`}
          >
            <Label value="Time since Vest" offset={-5} position="bottom" style={{ fill: '#808080' }} />
          </XAxis>
          <YAxis
            domain={[0, 60]}
            ticks={[10, 20, 30, 40, 50]}
            tickFormatter={(value) => `${value}%`}
          >
            <Label value="Penalty" angle={-90} offset={-5} position="left" style={{ textAnchor: 'middle', fill: '#808080' }} />
          </YAxis>
          <Tooltip
            formatter={(value) => `${value.toFixed(2)}%`}
            labelFormatter={(label) => `Day ${label}`}
          />
          <Legend verticalAlign="bottom" wrapperStyle={{ paddingTop: '15px' }} />
          <Line
            type="monotone"
            dataKey="penalty"
            stroke="hsl(222, 100%, 50%)"
            strokeWidth={2}
            dot={{ fill: '#fff', stroke: 'hsl(222, 100%, 50%)', strokeWidth: 1, r: 3 }}
            name="Penalty"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
