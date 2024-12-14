"use client"

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts"

const data = [
  { name: "Jan", Monthly: 400, Overtime: 240, Bonus: 100 },
  { name: "Feb", Monthly: 300, Overtime: 139, Bonus: 980 },
  { name: "Mar", Monthly: 200, Overtime: 980, Bonus: 200 },
  { name: "Apr", Monthly: 278, Overtime: 390, Bonus: 250 },
  { name: "May", Monthly: 189, Overtime: 480, Bonus: 380 },
]

export function PayrollChart() {
  return (
    <div className="h-[200px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <XAxis 
            dataKey="name" 
            stroke="#94a3b8"
            fontSize={12}
            tickLine={false}
            axisLine={false}
          />
          <YAxis 
            stroke="#94a3b8"
            fontSize={12}
            tickLine={false}
            axisLine={false}
            tickFormatter={(value) => `$${value}`}
          />
          <Bar dataKey="Monthly" fill="#38B2AC" stackId="stack" radius={[4, 4, 0, 0]} />
          <Bar dataKey="Overtime" fill="#9BE3DE" stackId="stack" radius={[4, 4, 0, 0]} />
          <Bar dataKey="Bonus" fill="#fdf6e4" stackId="stack" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

