interface InputProps {
  label: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}

const Input = ({ label, value, onChange, onKeyDown }: InputProps) => {
  return (
    <div className="mb-8">
      <label
        htmlFor={label}
        className="block text-sm font-bold text-gray-700 mb-2"
      >
        {label}
      </label>
      <input
        type="text"
        id={label}
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
        className="shadow-sm border py-2 px-3 border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm rounded-md"
      />
    </div>
  );
};

export default Input;
