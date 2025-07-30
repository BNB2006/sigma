import { Label } from "../ui/label";
import { Input } from "../ui/input";

const dimensionsOptions = [
  { label: "Width", property: "width", icon: "↔" },
  { label: "Height", property: "height", icon: "↕" },
];

type Props = {
  width: string;
  height: string;
  isEditingRef: React.MutableRefObject<boolean>;
  handleInputChange: (property: string, value: string) => void;
};

const Dimensions = ({ width, height, isEditingRef, handleInputChange }: Props) => (
  <div className='space-y-4'>
    {dimensionsOptions.map((item) => (
      <div
        key={item.label}
        className='flex flex-col gap-2'
      >
        <div className="flex items-center gap-2">
          <span className="text-lg text-primary-accent">{item.icon}</span>
          <Label htmlFor={item.property} className='text-sm font-medium text-primary-text'>
            {item.label}
          </Label>
        </div>
        <Input
          type='number'
          id={item.property}
          placeholder='100'
          value={item.property === "width" ? width : height}
          className='input-modern'
          min={10}
          onChange={(e) => handleInputChange(item.property, e.target.value)}
          onBlur={(e) => {
            isEditingRef.current = false
          }}
        />
      </div>
    ))}
  </div>
);

export default Dimensions;
