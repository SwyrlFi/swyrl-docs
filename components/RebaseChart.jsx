'use client'

import { useEffect, useState } from 'react'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const data = [
  {
    epoch: 'Epoch 1',
    usersHeld: 1000,
    totalSupply: 2000,
  },
  {
    epoch: 'Epoch 2',
    usersHeld: 1200,
    totalSupply: 2400,
  },
  {
    epoch: 'Epoch 3',
    usersHeld: 1500,
    totalSupply: 3000,
  },
]

export default function RebaseChart() {
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
        <AreaChart
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 10,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="epoch" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Area
            type="monotone"
            dataKey="usersHeld"
            stroke="hsl(222, 100%, 50%)"
            fill="hsl(222, 100%, 50%)"
            fillOpacity={0.4}
            name="Users Held veTOKEN"
          />
          <Area
            type="monotone"
            dataKey="totalSupply"
            stroke="hsl(280, 100%, 50%)"
            fill="hsl(280, 100%, 50%)"
            fillOpacity={0.3}
            name="Total TOKEN Supply"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}
