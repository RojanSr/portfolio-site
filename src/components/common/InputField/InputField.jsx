import { Input, FormLabel, FormControl } from "@chakra-ui/react";

const InputField = ({ label, size, type = "text", name, ...props }) => {
  return (
    <FormControl variant={"floating"}>
      <Input
        placeholder=" "
        variant={"outline"}
        size={size}
        border={"1px solid #ced4da"}
        type={type}
        name={name}
        {...props}
      />
      <FormLabel color={"gray.500"} fontWeight={"400"} opacity={1}>
        {label}
      </FormLabel>
    </FormControl>
  );
};

export default InputField;
