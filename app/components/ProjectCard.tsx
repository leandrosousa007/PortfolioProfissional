import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import type { DimensionValue } from "react-native";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { colors, radii } from "../constants/theme";
import type { Project } from "../types/portfolio";
import { openProjectDetails } from "../utils/links";
import { ProjectCover } from "./ProjectCover";

type ProjectCardProps = {
  project: Project;
  width: DimensionValue;
};

export function ProjectCard({ project, width }: ProjectCardProps) {
  return (
    <Pressable
      accessibilityRole="link"
      accessibilityLabel={`Ver detalhes do projeto ${project.name}`}
      onPress={() => openProjectDetails(project.slug)}
      style={({ pressed }) => [styles.card, { width }, pressed && styles.pressedCard]}
    >
      <ProjectCover project={project} height={280} />
      <View style={styles.body}>
        <Text style={styles.category}>{project.category}</Text>
        <Text accessibilityRole="header" style={styles.name}>{project.name}</Text>
        <Text style={styles.description}>{project.description}</Text>
        <View style={styles.stack}>
          {project.stack.map((technology) => <Text key={technology} style={styles.stackItem}>{technology}</Text>)}
        </View>
        <View style={styles.link}>
          <Text style={styles.linkText}>Ver detalhes</Text>
          <MaterialCommunityIcons name="arrow-top-right" size={18} color={colors.green700} />
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    overflow: "hidden",
    borderWidth: 1,
    borderColor: colors.line,
    borderRadius: radii.large,
    backgroundColor: colors.surface,
  },
  body: {
    padding: 26,
  },
  category: {
    color: colors.green600,
    fontSize: 10,
    fontWeight: "800",
    letterSpacing: 1.2,
    textTransform: "uppercase",
  },
  name: {
    marginTop: 11,
    color: colors.ink,
    fontSize: 25,
    fontWeight: "700",
    letterSpacing: -0.8,
  },
  description: {
    minHeight: 70,
    marginTop: 11,
    color: colors.muted,
    fontSize: 14,
    lineHeight: 23,
  },
  stack: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 7,
    marginTop: 19,
  },
  stackItem: {
    paddingVertical: 6,
    paddingHorizontal: 9,
    borderRadius: radii.pill,
    backgroundColor: colors.softGreen,
    color: colors.green700,
    fontSize: 10,
    fontWeight: "700",
  },
  link: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 23,
    paddingTop: 18,
    borderTopWidth: 1,
    borderTopColor: colors.line,
  },
  linkText: {
    color: colors.green700,
    fontSize: 13,
    fontWeight: "800",
  },
  pressedCard: {
    opacity: 0.82,
    transform: [{ scale: 0.992 }],
  },
});
