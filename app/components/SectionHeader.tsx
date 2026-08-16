import { StyleSheet, Text, View } from "react-native";
import { colors } from "../constants/theme";

type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
  compact?: boolean;
};

export function SectionHeader({ eyebrow, title, description, compact = false }: SectionHeaderProps) {
  return (
    <View style={[styles.container, compact && styles.compact]}>
      <Text style={styles.eyebrow}>{eyebrow}</Text>
      <Text accessibilityRole="header" style={[styles.title, compact && styles.compactTitle]}>{title}</Text>
      {description ? <Text style={styles.description}>{description}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    maxWidth: 760,
  },
  compact: {
    maxWidth: 620,
  },
  eyebrow: {
    marginBottom: 16,
    color: colors.green600,
    fontSize: 11,
    fontWeight: "800",
    letterSpacing: 1.9,
    textTransform: "uppercase",
  },
  title: {
    color: colors.ink,
    fontSize: 50,
    lineHeight: 54,
    fontWeight: "700",
    letterSpacing: -2.3,
  },
  compactTitle: {
    fontSize: 38,
    lineHeight: 43,
    letterSpacing: -1.6,
  },
  description: {
    maxWidth: 650,
    marginTop: 20,
    color: colors.muted,
    fontSize: 16,
    lineHeight: 26,
  },
});

