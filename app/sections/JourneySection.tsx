import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { StyleSheet, Text, View } from "react-native";
import { SectionHeader } from "../components/SectionHeader";
import { TimelineItem } from "../components/TimelineItem";
import { colors, radii } from "../constants/theme";
import { certifications, education, experiences } from "../data/portfolio";
import { commonStyles } from "../styles/common";

type JourneySectionProps = {
  horizontalPadding: number;
  isMobile: boolean;
};

export function JourneySection({ horizontalPadding, isMobile }: JourneySectionProps) {
  return (
    <View style={[commonStyles.section, isMobile && commonStyles.sectionMobile, styles.section, { paddingHorizontal: horizontalPadding }]}>
      <View style={commonStyles.shell}>
        <SectionHeader
          eyebrow="Minha trajetória"
          title="Do ensino técnico à graduação e às experiências práticas."
          description="Esta linha do tempo reúne minha formação, atuação profissional e atividades acadêmicas mais relevantes."
        />

        <View style={styles.block}>
          <View style={styles.blockHeading}>
            <MaterialCommunityIcons name="school-outline" size={21} color={colors.green700} />
            <Text accessibilityRole="header" style={styles.blockTitle}>Formação acadêmica</Text>
          </View>
          <View style={styles.timeline}>
            {education.map((entry, index) => <TimelineItem key={entry.id} entry={entry} last={index === education.length - 1} />)}
          </View>
        </View>

        <View style={styles.block}>
          <View style={styles.blockHeading}>
            <MaterialCommunityIcons name="briefcase-outline" size={21} color={colors.green700} />
            <Text accessibilityRole="header" style={styles.blockTitle}>Experiências e atividades acadêmicas</Text>
          </View>
          <View style={styles.timeline}>
            {experiences.map((entry, index) => <TimelineItem key={entry.id} entry={entry} compact last={index === experiences.length - 1} />)}
          </View>
        </View>

        <View style={styles.certificationCard}>
          <View style={styles.blockHeading}>
            <MaterialCommunityIcons name="certificate-outline" size={21} color={colors.green700} />
            <Text accessibilityRole="header" style={styles.blockTitle}>Cursos, eventos e certificações</Text>
          </View>
          <View style={styles.certifications}>
            {certifications.map((certification) => (
              <View key={certification} style={[styles.certificationItem, isMobile && styles.certificationItemMobile]}>
                <MaterialCommunityIcons name="check-circle-outline" size={17} color={colors.green600} />
                <Text style={styles.certificationText}>{certification}</Text>
              </View>
            ))}
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    backgroundColor: colors.paper,
  },
  block: {
    maxWidth: 940,
    width: "100%",
    alignSelf: "center",
    marginTop: 68,
  },
  blockHeading: {
    flexDirection: "row",
    alignItems: "center",
    gap: 9,
  },
  blockTitle: {
    color: colors.ink,
    fontSize: 22,
    fontWeight: "700",
    letterSpacing: -0.5,
  },
  timeline: {
    marginTop: 24,
  },
  certificationCard: {
    maxWidth: 940,
    width: "100%",
    alignSelf: "center",
    marginTop: 60,
    padding: 30,
    borderWidth: 1,
    borderColor: colors.line,
    borderRadius: radii.large,
    backgroundColor: colors.softGreen,
  },
  certifications: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
    marginTop: 24,
  },
  certificationItem: {
    width: "48%",
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 8,
    padding: 13,
    borderRadius: radii.small,
    backgroundColor: "rgba(255,255,255,0.62)",
  },
  certificationItemMobile: {
    width: "100%",
  },
  certificationText: {
    flex: 1,
    color: colors.muted,
    fontSize: 12,
    lineHeight: 18,
    fontWeight: "600",
  },
});
