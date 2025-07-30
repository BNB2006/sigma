import { Label } from "../ui/label";

type Props = {
  inputRef: any;
  attribute: string;
  placeholder: string;
  attributeType: string;
  handleInputChange: (property: string, value: string) => void;
};

const Color = ({
  inputRef,
  attribute,
  placeholder,
  attributeType,
  handleInputChange,
}: Props) => (
  <div className='flex flex-col gap-3'>
    <div className="flex items-center gap-2">
      <h3 className='text-sm font-medium text-primary-text capitalize'>{placeholder}</h3>
      <div className="flex-1 h-px bg-primary-border"></div>
    </div>
    <div
      className='flex items-center gap-3 p-3 bg-primary-surfaceHover rounded-lg border border-primary-border hover:border-primary-accent/50 transition-all duration-200 cursor-pointer group'
      onClick={() => inputRef.current.click()}
    >
      <div className="relative">
        <input
          type='color'
          value={attribute}
          ref={inputRef}
          onChange={(e) => handleInputChange(attributeType, e.target.value)}
          className="w-8 h-8 rounded-lg border border-primary-border cursor-pointer opacity-0 absolute inset-0"
        />
        <div 
          className="w-8 h-8 rounded-lg border border-primary-border shadow-sm"
          style={{ backgroundColor: attribute }}
        ></div>
      </div>
      <Label className='flex-1 text-sm text-primary-text font-medium'>{attribute}</Label>
      <div className='flex h-6 w-8 items-center justify-center bg-primary-surface rounded text-xs text-primary-textSecondary font-medium border border-primary-border'>
        90%
      </div>
    </div>
  </div>
);

export default Color;
