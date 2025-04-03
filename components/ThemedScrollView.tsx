import { ScrollView, useColorScheme, type ScrollViewProps } from "react-native";

import { useThemeColor } from "@/hooks/useThemeColor";

export type ThemedViewProps = ScrollViewProps & {
  lightColor?: string;
  darkColor?: string;
};

export function ThemedScrollView({
  style,
  lightColor,
  darkColor,
  ...otherProps
}: ThemedViewProps) {
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "background"
  );
  const theme = useColorScheme() ?? "light";

  return (
    <ScrollView
      indicatorStyle={theme === "light" ? "black" : "white"}
      style={[{ backgroundColor }, style]}
      {...otherProps}
    />
  );
}
