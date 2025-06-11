import { Text, TextStyle } from "react-native";

export const CustomLabel = ({
  label,
  focused,
  style,
}: {
  label: string;
  focused: boolean;
  style?: TextStyle;
}) => (
  <Text
    style={[
      {
        fontFamily: focused ? "ClashDisplayBold" : "ClashDisplayMedium",
        fontSize: 12,
        color: "#000",
      },
      style,
    ]}
  >
    {label}
  </Text>
);
