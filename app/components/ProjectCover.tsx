import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { LinearGradient } from "expo-linear-gradient";
import { Image, StyleSheet, Text, View } from "react-native";
import { colors } from "../constants/theme";
import type { Project } from "../types/portfolio";

type ProjectCoverProps = {
  project: Project;
  height: number;
};

export function ProjectCover({ project, height }: ProjectCoverProps) {
  if (project.image) {
    return (
      <Image
        source={project.image}
        style={[styles.image, { height }]}
        resizeMode="cover"
        accessibilityLabel={`Imagem do projeto ${project.name}`}
      />
    );
  }

  const cover = project.cover ?? {
    icon: "code-tags" as const,
    colors: [colors.green600, colors.green950] as const,
  };

  return (
    <LinearGradient colors={cover.colors} style={[styles.generatedCover, { height }]}> 
      <View style={styles.glowLarge} />
      <View style={styles.glowSmall} />
      <View style={styles.iconFrame}>
        <MaterialCommunityIcons name={cover.icon} size={58} color={colors.surface} />
      </View>
      <Text style={styles.coverCategory}>{project.category}</Text>
      <Text style={styles.coverName}>{project.name}</Text>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    backgroundColor: colors.softGreen,
  },
  generatedCover: {
    width: "100%",
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },
  glowLarge: {
    position: "absolute",
    top: -95,
    right: -70,
    width: 260,
    height: 260,
    borderRadius: 999,
    backgroundColor: "rgba(255,255,255,0.09)",
  },
  glowSmall: {
    position: "absolute",
    bottom: -75,
    left: -40,
    width: 190,
    height: 190,
    borderRadius: 999,
    backgroundColor: "rgba(255,255,255,0.06)",
  },
  iconFrame: {
    width: 90,
    height: 90,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.22)",
    borderRadius: 27,
    backgroundColor: "rgba(255,255,255,0.12)",
  },
  coverCategory: {
    marginTop: 18,
    color: "rgba(255,255,255,0.68)",
    fontSize: 9,
    fontWeight: "800",
    letterSpacing: 1.5,
    textTransform: "uppercase",
  },
  coverName: {
    maxWidth: 380,
    marginTop: 7,
    color: colors.surface,
    fontSize: 20,
    fontWeight: "800",
    textAlign: "center",
  },
});
