import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Pressable, StyleSheet, Text } from "react-native";
import { colors, radii } from "../constants/theme";
import type { IconName } from "../types/portfolio";

type ActionButtonProps = {
  label: string;
  icon: IconName;
  onPress: () => void;
  variant?: "primary" | "secondary" | "quiet";
  accessibilityLabel?: string;
};

export function ActionButton({ label, icon, onPress, variant = "secondary", accessibilityLabel }: ActionButtonProps) {
  const primary = variant === "primary";
  const quiet = variant === "quiet";

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={accessibilityLabel ?? label}
      onPress={onPress}
      style={({ pressed }) => [
        styles.button,
        primary && styles.primary,
        quiet && styles.quiet,
        pressed && styles.pressed,
      ]}
    >
      <MaterialCommunityIcons name={icon} size={18} color={primary ? colors.surface : colors.green700} />
      <Text style={[styles.label, primary && styles.primaryLabel]}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    minHeight: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 9,
    paddingHorizontal: 19,
    borderWidth: 1,
    borderColor: colors.line,
    borderRadius: radii.medium,
    backgroundColor: colors.surface,
  },
  primary: {
    borderColor: colors.green900,
    backgroundColor: colors.green900,
  },
  quiet: {
    backgroundColor: "rgba(255,255,255,0.62)",
  },
  label: {
    color: colors.green800,
    fontSize: 14,
    fontWeight: "700",
  },
  primaryLabel: {
    color: colors.surface,
  },
  pressed: {
    opacity: 0.72,
    transform: [{ scale: 0.985 }],
  },
});

