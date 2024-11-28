// src/app/page.tsx (Componente del servidor)
import PieChart from '../components/PieChart';

async function fetchData() {
  return [
    { id: 'JavaScript', label: 'JavaScript', value: 55 },
    { id: 'Python', label: 'Python', value: 30 },
    { id: 'Java', label: 'Java', value: 15 },
  ];
}

export default async function Home() {
  const data = await fetchData(); // Los datos se obtienen del servidor

  // Convertir a string JSON y pasar como prop para evitar discrepancia
  const serializedData = JSON.stringify(data);

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Nivo Pie Chart with App Router</h1>
      <PieChart data={serializedData} />
    </div>
  );
}
