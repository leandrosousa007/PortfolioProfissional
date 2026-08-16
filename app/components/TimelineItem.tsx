import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { StyleSheet, Text, View } from "react-native";
import { colors, radii } from "../constants/theme";
import type { TimelineEntry } from "../types/portfolio";

type TimelineItemProps = {
  entry: TimelineEntry;
  last?: boolean;
  compact?: boolean;
};

export function TimelineItem({ entry, last = false, compact = false }: TimelineItemProps) {
  return (
    <View style={[styles.row, last && styles.lastRow]}>
      <View style={styles.rail}>
        <View style={[styles.marker, compact && styles.compactMarker]}>
          <MaterialCommunityIcons name={entry.type === "education" ? "school-outline" : "briefcase-outline"} size={compact ? 14 : 17} color={colors.surface} />
        </View>
        {!last ? <View style={styles.line} /> : null}
      </View>

      <View style={[styles.card, compact && styles.compactCard]}>
        <View style={styles.metaRow}>
          <Text style={styles.organization}>{entry.organization}</Text>
          {entry.period ? <Text style={styles.period}>{entry.period}</Text> : null}
        </View>
        <Text accessibilityRole="header" style={[styles.title, compact && styles.compactTitle]}>{entry.title}</Text>
        {entry.role ? <Text style={styles.role}>{entry.role}</Text> : null}
        <Text style={styles.description}>{entry.description}</Text>
        <Text style={styles.focusLabel}>Áreas de enfoque</Text>
        <View style={styles.tags}>
          {entry.focusAreas.map((area) => <Text key={area} style={styles.tag}>{area}</Text>)}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    gap: 18,
  },
  lastRow: {
    paddingBottom: 0,
  },
  rail: {
    width: 38,
    alignItems: "center",
  },
  marker: {
    zIndex: 1,
    width: 36,
    height: 36,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: radii.pill,
    backgroundColor: colors.green700,
  },
  compactMarker: {
    width: 31,
    height: 31,
    backgroundColor: colors.green600,
  },
  line: {
    flex: 1,
    width: 1,
    backgroundColor: "#C7D8CB",
  },
  card: {
    flex: 1,
    marginBottom: 30,
    padding: 28,
    borderWidth: 1,
    borderColor: colors.line,
    borderRadius: radii.large,
    backgroundColor: colors.surface,
  },
  compactCard: {
    padding: 24,
  },
  metaRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 8,
  },
  organization: {
    flexShrink: 1,
    color: colors.green600,
    fontSize: 11,
    fontWeight: "800",
    letterSpacing: 0.8,
    textTransform: "uppercase",
  },
  period: {
    color: colors.muted,
    fontSize: 11,
    fontWeight: "600",
  },
  title: {
    marginTop: 13,
    color: colors.ink,
    fontSize: 25,
    lineHeight: 31,
    fontWeight: "700",
    letterSpacing: -0.8,
  },
  compactTitle: {
    fontSize: 21,
    lineHeight: 27,
  },
  role: {
    marginTop: 7,
    color: colors.green700,
    fontSize: 13,
    fontWeight: "700",
  },
  description: {
    marginTop: 15,
    color: colors.muted,
    fontSize: 14,
    lineHeight: 23,
  },
  focusLabel: {
    marginTop: 20,
    color: colors.ink,
    fontSize: 10,
    fontWeight: "800",
    letterSpacing: 1.1,
    textTransform: "uppercase",
  },
  tags: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 7,
    marginTop: 10,
  },
  tag: {
    paddingVertical: 6,
    paddingHorizontal: 9,
    borderRadius: radii.pill,
    backgroundColor: colors.softGreen,
    color: colors.green700,
    fontSize: 10,
    fontWeight: "700",
  },
});

