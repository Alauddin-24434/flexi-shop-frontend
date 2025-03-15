import { Input } from "@/components/ui/input";

const ImageUploader = ({ value, onChange, multiple = false }: { value: string | string[], onChange: (val: string | string[]) => void, multiple?: boolean }) => {
  return (
    <div>
      <Input type="file" accept="image/*" multiple={multiple} onChange={(e) => {
        const files = Array.from(e.target.files || []).map(file => URL.createObjectURL(file));
        onChange(multiple ? files : files[0]);
      }} />
    </div>
  );
};

export default ImageUploader;
