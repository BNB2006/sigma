import {
  fontFamilyOptions,
  fontSizeOptions,
  fontWeightOptions,
} from "@/constants";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

const selectConfigs = [
  {
    property: "fontFamily",
    placeholder: "Choose a font",
    options: fontFamilyOptions,
    icon: "Aa",
  },
  { 
    property: "fontSize", 
    placeholder: "30", 
    options: fontSizeOptions,
    icon: "T",
  },
  {
    property: "fontWeight",
    placeholder: "Semibold",
    options: fontWeightOptions,
    icon: "B",
  },
];

type TextProps = {
  fontFamily: string;
  fontSize: string;
  fontWeight: string;
  handleInputChange: (property: string, value: string) => void;
};

const Text = ({
  fontFamily,
  fontSize,
  fontWeight,
  handleInputChange,
}: TextProps) => (
  <div className='space-y-4'>
    {selectConfigs.map((config) => (
      <div key={config.property} className="space-y-2">
        <div className="flex items-center gap-2">
          <span className="text-lg text-primary-accent font-bold">{config.icon}</span>
          <h3 className='text-sm font-medium text-primary-text capitalize'>
            {config.property === "fontFamily" ? "Font Family" : 
             config.property === "fontSize" ? "Font Size" : "Font Weight"}
          </h3>
        </div>
        <RenderSelect
          config={config}
          fontSize={fontSize}
          fontWeight={fontWeight}
          fontFamily={fontFamily}
          handleInputChange={handleInputChange}
        />
      </div>
    ))}
  </div>
);

type Props = {
  config: {
    property: string;
    placeholder: string;
    options: { label: string; value: string }[];
    icon: string;
  };
  fontSize: string;
  fontWeight: string;
  fontFamily: string;
  handleInputChange: (property: string, value: string) => void;
};

const RenderSelect = ({
  config,
  fontSize,
  fontWeight,
  fontFamily,
  handleInputChange,
}: Props) => (
  <Select
    onValueChange={(value) => handleInputChange(config.property, value)}
    value={
      config.property === "fontFamily"
        ? fontFamily
        : config.property === "fontSize"
          ? fontSize
          : fontWeight
    }
  >
    <SelectTrigger className='w-full'>
      <SelectValue
        placeholder={
          config.property === "fontFamily"
            ? "Choose a font"
            : config.property === "fontSize"
              ? "30"
              : "Semibold"
        }
      />
    </SelectTrigger>
    <SelectContent>
      {config.options.map((option) => (
        <SelectItem
          key={option.value}
          value={option.value}
        >
          {option.label}
        </SelectItem>
      ))}
    </SelectContent>
  </Select>
);

export default Text;
