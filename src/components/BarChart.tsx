// src/components/BarChart.tsx
'use client'; // Client component tag

import { ResponsiveBar } from '@nivo/bar';

export default function BarChart({ data }) {
  const parsedData = JSON.parse(data);

  // Data formatter to show properly the data
  const formattedData = parsedData.map(item => ({
    language: item.label,
    value: item.value,
  }));

  return (
    <div style={{ height: 400 }}>
      <ResponsiveBar
        data={formattedData}
        keys={['value']}
        indexBy="language"
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
        padding={0.3}
        valueScale={{ type: 'linear' }}
        indexScale={{ type: 'band', round: true }}
        colors={{ scheme: 'nivo' }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'Language',
          legendPosition: 'middle',
          legendOffset: 32,
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'Value',
          legendPosition: 'middle',
          legendOffset: -40,
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
        animate={true}
        motionStiffness={90}
        motionDamping={15}
      />
    </div>
  );
}
