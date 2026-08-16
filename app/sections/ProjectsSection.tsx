import { LinearGradient } from "expo-linear-gradient";
import type { DimensionValue } from "react-native";
import { StyleSheet, View } from "react-native";
import { ProjectCard } from "../components/ProjectCard";
import { SectionHeader } from "../components/SectionHeader";
import { projects } from "../data/portfolio";
import { commonStyles } from "../styles/common";

type ProjectsSectionProps = {
  horizontalPadding: number;
  isMobile: boolean;
  cardWidth: DimensionValue;
};

export function ProjectsSection({ horizontalPadding, isMobile, cardWidth }: ProjectsSectionProps) {
  return (
    <LinearGradient colors={["#F4F7F4", "#E7F0E9", "#F2F6F2"]} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={[commonStyles.section, isMobile && commonStyles.sectionMobile, { paddingHorizontal: horizontalPadding }]}>
      <View style={commonStyles.shell}>
        <SectionHeader
          eyebrow="Projetos"
          title="Sites publicados e projetos acadêmicos."
          description="Uma seleção de trabalhos que reúne desenvolvimento web, aplicação mobile e integração com banco de dados."
        />
        <View style={styles.grid}>
          {projects.map((project) => <ProjectCard key={project.name} project={project} width={cardWidth} />)}
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 24,
    marginTop: 54,
  },
});

