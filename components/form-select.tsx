import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

type FormSelectProps = {
  field: {
    name: string;
    value: string;
    onChange: (value: string) => void;
  };
  placeholder: string;
  options: {
    value: string;
    label: string;
  }[];
};

function FormSelect({ field, placeholder, options }: FormSelectProps) {
  console.log(placeholder);
  return (
    <Select
      name={field.name}
      onValueChange={field.onChange}
      defaultValue={field.value}
    >
      <SelectTrigger className="bg-zinc-100 px-5 py-5">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>

      <SelectContent>
        {options.map((option) => (
          <SelectItem key={option.value} value={option.value}>
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

export default FormSelect;
