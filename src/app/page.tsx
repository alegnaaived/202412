// src/app/page.tsx (Server component)
import PieChart from '../components/PieChart';
import BarChart from '../components/BarChart';

async function fetchData() {
  return [
    { id: 'JavaScript', label: 'JavaScript', value: 55 },
    { id: 'Python', label: 'Python', value: 30 },
    { id: 'Java', label: 'Java', value: 15 },
  ];
}

export default async function Home() {
  const data = await fetchData(); // Data retrieval

  // Convert to JSON string and set as prop to avoid conflicts
  const serializedData = JSON.stringify(data);

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Nivo Pie Chart with App Router</h1>
      
      {/* Pie Chart */}
      <h2 style={{ textAlign: 'center' }}>Pie Chart</h2>
      <PieChart data={serializedData} />

      {/* Bar Chart */}
      <h2 style={{ textAlign: 'center' }}>Bar Chart</h2>
      <BarChart data={serializedData} />
    </div>
  );
}
