import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { LinearGradient } from "expo-linear-gradient";
import type { DimensionValue } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import { colors, radii } from "../constants/theme";
import type { Technology } from "../types/portfolio";

type TechnologyCardProps = {
  technology: Technology;
  width: DimensionValue;
};

export function TechnologyCard({ technology, width }: TechnologyCardProps) {
  return (
    <View style={[styles.card, { width }]}> 
      <LinearGradient
        colors={[`${technology.color}22`, `${technology.color}0A`]}
        style={[styles.iconContainer, { borderColor: `${technology.color}24` }]}
      >
        <MaterialCommunityIcons name={technology.icon} size={25} color={technology.color} accessibilityLabel={`Ícone ${technology.name}`} />
      </LinearGradient>
      <Text style={styles.name}>{technology.name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    minHeight: 68,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 9,
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: "rgba(36,86,62,0.10)",
    borderRadius: radii.small,
    backgroundColor: "rgba(255,255,255,0.74)",
  },
  iconContainer: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderRadius: 12,
  },
  name: {
    flexShrink: 1,
    color: colors.ink,
    fontSize: 12.5,
    fontWeight: "700",
    textAlign: "left",
  },
});
