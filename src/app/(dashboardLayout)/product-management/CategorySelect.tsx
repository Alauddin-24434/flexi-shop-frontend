const categories = [
    { id: "electronics", name: "Electronics" },
    { id: "fashion", name: "Fashion" },
    { id: "home", name: "Home & Kitchen" },
  ];
  
  export const CategorySelect = ({ value, onChange }: { value: string, onChange: (val: string) => void }) => {
    return (
      <select value={value} onChange={(e) => onChange(e.target.value)} className="border rounded p-2">
        <option value="">Select Category</option>
        {categories.map((cat) => (
          <option key={cat.id} value={cat.id}>{cat.name}</option>
        ))}
      </select>
    );
  };
  