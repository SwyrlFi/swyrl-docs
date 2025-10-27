'use client'

import { useEffect, useState } from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Label } from 'recharts'

// Generate data for 4 years (1460 days)
const generateData = () => {
  const data = []
  const totalDays = 1460 // 4 years
  const maxWeight = 100

  // Add start point
  data.push({
    day: 1,
    veTOKEN: maxWeight,
    weight: maxWeight,
  })

  // Add midpoint
  data.push({
    day: totalDays / 2,
    veTOKEN: maxWeight,
    weight: maxWeight / 2,
  })

  // Add end point
  data.push({
    day: totalDays,
    veTOKEN: maxWeight,
    weight: 0,
  })

  return data
}

const data = generateData()

export default function VoteEscrowChart() {
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
            left: 20,
            bottom: 40,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="day"
            type="number"
            domain={[1, 1460]}
            ticks={[1, 1460]}
            tickFormatter={(value) => value === 1 ? 'Day 1' : `Day ${value}`}
          >
            <Label value="Time since Lock" offset={-25} position="bottom" style={{ fill: '#808080' }} />
          </XAxis>
          <YAxis domain={[0, 100]} ticks={[]}>
            <Label value="Vote Weighting" angle={-90} offset={5} position="left" style={{ textAnchor: 'middle', fill: '#808080' }} />
          </YAxis>
          <Tooltip
            formatter={(value) => value.toFixed(1)}
            labelFormatter={(label) => `Day ${label}`}
          />
          <Legend />
          <Line
            type="linear"
            dataKey="veTOKEN"
            stroke="hsl(222, 100%, 50%)"
            strokeWidth={2}
            dot={{ fill: '#fff', stroke: 'hsl(222, 100%, 50%)', strokeWidth: 1, r: 3 }}
            name="veTOKEN"
          />
          <Line
            type="linear"
            dataKey="weight"
            stroke="hsl(280, 100%, 50%)"
            strokeWidth={2}
            dot={{ fill: '#fff', stroke: 'hsl(280, 100%, 50%)', strokeWidth: 1, r: 3 }}
            name="Weight"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
