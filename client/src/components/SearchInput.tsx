import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const SearchInput = ({ label, name, type, defaultValue }) => {
  return (
    <div className="mb-2 w-72">
      <Label className="capitalize" htmlFor={name}>
        {label || name}
      </Label>
      <Input id={name} name={name} type={type} defaultValue={defaultValue} />
    </div>
  );
};
export default SearchInput;
