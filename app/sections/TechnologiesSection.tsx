import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, Text, View } from "react-native";
import { SectionHeader } from "../components/SectionHeader";
import { TechnologyCard } from "../components/TechnologyCard";
import { colors } from "../constants/theme";
import { technologyGroups } from "../data/portfolio";
import { commonStyles } from "../styles/common";

type TechnologiesSectionProps = {
  horizontalPadding: number;
  isMobile: boolean;
  cardWidth: import("react-native").DimensionValue;
};

export function TechnologiesSection({ horizontalPadding, isMobile, cardWidth }: TechnologiesSectionProps) {
  return (
    <LinearGradient
      colors={["#EFF6F0", "#D9EADC", "#E6F1E8"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={[commonStyles.section, isMobile && commonStyles.sectionMobile, styles.section, { paddingHorizontal: horizontalPadding }]}
    >
      <View style={commonStyles.shell}>
        <SectionHeader
          eyebrow="Tecnologias"
          title="Ferramentas técnicas da minha formação e dos meus projetos."
          description="Tecnologias que utilizo na graduação e no desenvolvimento de projetos web, mobile e sistemas com banco de dados."
        />

        <View style={styles.groups}>
          {technologyGroups.map((group) => (
            <View key={group.title} style={styles.group}>
              <View style={styles.groupHeading}>
                <View style={styles.groupAccent} />
                <Text accessibilityRole="header" style={styles.groupTitle}>{group.title}</Text>
              </View>
              <View style={styles.grid}>
                {group.technologies.map((technology) => <TechnologyCard key={technology.name} technology={technology} width={cardWidth} />)}
              </View>
            </View>
          ))}
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  section: {
    overflow: "hidden",
  },
  groups: {
    marginTop: 42,
    gap: 25,
  },
  group: {
    gap: 11,
  },
  groupHeading: {
    minHeight: 27,
    flexDirection: "row",
    alignItems: "center",
    gap: 9,
  },
  groupAccent: {
    width: 4,
    height: 18,
    borderRadius: 99,
    backgroundColor: colors.green600,
  },
  groupTitle: {
    flex: 1,
    color: colors.ink,
    fontSize: 16,
    fontWeight: "700",
    letterSpacing: -0.3,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },
});
