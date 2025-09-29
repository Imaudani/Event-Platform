export default function EventsPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Manage Events</h1>
      <ul className="space-y-4">
        <li className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-semibold">Tech Talk 2025</h2>
          <p>Date: October 12</p>
        </li>
        <li className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-semibold">Cultural Night</h2>
          <p>Date: November 5</p>
        </li>
      </ul>
    </div>
  );
}
