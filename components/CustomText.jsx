import { Text } from "react-native";
import { cn } from "../utils/cn";
import { TEXTVARIANTS } from "../lib/styles";

const CustomText = ({ className, variant = "text-base", ...props }) => {
  return (
    <Text className={cn(TEXTVARIANTS({ variant }), className)} {...props}>
      {props.children}
    </Text>
  );
};

export default CustomText;
