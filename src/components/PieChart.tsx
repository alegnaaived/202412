// src/components/PieChart.tsx
'use client'; // Client component tag

import { ResponsivePie } from '@nivo/pie';

export default function PieChart({ data }) {
    const parsedData = JSON.parse(data);
  return (
    <div style={{ height: 400 }}>
      <ResponsivePie
        data={parsedData}
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={3}
        activeOuterRadiusOffset={8}
        borderWidth={1}
        borderColor={{ from: 'color', modifiers: [['darker', 0.2]] }}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor="#333333"
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: 'color' }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{ from: 'color', modifiers: [['darker', 2]] }}
        colors={{scheme: 'category10'}}
      />
    </div>
  );
}
