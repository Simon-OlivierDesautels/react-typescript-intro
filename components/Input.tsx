type InputProps = {
  value: string;
  handleChange: (event: React.SyntheticEvent<HTMLInputElement>) => void;
};

export const Input = ({value,handleChange}: InputProps) => {
  return (
    <input type="text" value={value} onChange={handleChange} />
  );
};
