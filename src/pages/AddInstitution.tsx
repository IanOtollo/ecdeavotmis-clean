import { useState } from "react";
import { addInstitution } from "@/integrations/institutions";

export default function AddInstitution() {
  const [form, setForm] = useState({
    name: "",
    type: "ECDE",
    level: "Vocational",
    county: "",
    ownership: "Public",
  });

  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const newInstitution = await addInstitution(form);
      setMessage(✅ Institution registered: ${newInstitution.name});
    } catch (err: any) {
      setMessage(❌ Error: ${err.message});
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold">Register Institution</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          placeholder="Institution Name"
          className="border p-2 w-full"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input
          placeholder="County"
          className="border p-2 w-full"
          value={form.county}
          onChange={(e) => setForm({ ...form, county: e.target.value })}
        />
        <select
          className="border p-2 w-full"
          value={form.ownership}
          onChange={(e) => setForm({ ...form, ownership: e.target.value })}
        >
          <option value="Public">Public</option>
          <option value="Private">Private</option>
        </select>

        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          Save Institution
        </button>
      </form>

      {message && <p className="mt-4">{message}</p>}
    </div>
  );
}