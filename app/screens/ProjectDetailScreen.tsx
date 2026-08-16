import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { LinearGradient } from "expo-linear-gradient";
import { useEffect } from "react";
import { Platform, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { ActionButton } from "../components/ActionButton";
import { ProjectCover } from "../components/ProjectCover";
import { links } from "../constants/links";
import { colors, radii } from "../constants/theme";
import { useResponsiveLayout } from "../hooks/useResponsiveLayout";
import { commonStyles } from "../styles/common";
import type { Project } from "../types/portfolio";
import { openExternalLink, openWebDownload } from "../utils/links";

type ProjectDetailScreenProps = {
  project: Project;
};

export default function ProjectDetailScreen({ project }: ProjectDetailScreenProps) {
  const { isDesktop, isMobile, horizontalPadding } = useResponsiveLayout();

  useEffect(() => {
    if (Platform.OS !== "web" || typeof globalThis.document === "undefined") return;
    const previousTitle = globalThis.document.title;
    globalThis.document.title = `${project.name} — Leandro Evaristo`;
    return () => {
      globalThis.document.title = previousTitle;
    };
  }, [project.name]);

  function returnToPortfolio() {
    if (Platform.OS === "web" && typeof globalThis.close === "function") {
      globalThis.close();
      globalThis.setTimeout(() => {
        if (!globalThis.closed) globalThis.location.assign("/");
      }, 120);
      return;
    }
  }

  return (
    <ScrollView style={styles.page} showsVerticalScrollIndicator={false}>
      <LinearGradient
        colors={["#FBFCFA", "#E5F0E7", "#D5E7D9"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={[styles.hero, { paddingHorizontal: horizontalPadding }]}
      >
        <View style={commonStyles.shell}>
          <View style={styles.topBar}>
            <View style={styles.brand}>
              <LinearGradient colors={[colors.green600, colors.green950]} style={styles.brandMark}>
                <Text style={styles.brandLetter}>L</Text>
              </LinearGradient>
              <Text style={styles.brandName}>Leandro Evaristo</Text>
            </View>
            <Pressable accessibilityRole="button" onPress={returnToPortfolio} style={({ pressed }) => [styles.closeButton, pressed && styles.pressed]}>
              <MaterialCommunityIcons name="close" size={19} color={colors.green800} />
              {!isMobile ? <Text style={styles.closeText}>Fechar detalhes</Text> : null}
            </Pressable>
          </View>

          <View style={[styles.heroContent, !isDesktop && styles.heroContentStacked]}>
            <View style={styles.heroCopy}>
              <Text style={styles.category}>{project.category}</Text>
              <Text accessibilityRole="header" style={[styles.title, isMobile && styles.mobileTitle]}>{project.name}</Text>
              <Text style={styles.intro}>{project.description}</Text>
              <View style={styles.actions}>
                {project.liveUrl ? (
                  <ActionButton label="Acessar site" icon="open-in-new" variant="primary" onPress={() => openExternalLink(project.liveUrl!)} />
                ) : null}
                {project.repositoryUrl ? (
                  <ActionButton label="Ver código no GitHub" icon="github" variant={project.liveUrl ? "secondary" : "primary"} onPress={() => openExternalLink(project.repositoryUrl!)} />
                ) : null}
                {project.download ? (
                  <ActionButton label="Baixar APK" icon="download" variant="primary" onPress={() => openWebDownload(links.tartaMat, "Abra o portfólio no navegador para baixar o APK do TartaMat.")} />
                ) : null}
              </View>
            </View>

            <View style={[styles.coverFrame, !isDesktop && styles.coverFrameStacked]}>
              <ProjectCover project={project} height={isMobile ? 250 : 360} />
            </View>
          </View>
        </View>
      </LinearGradient>

      <View style={[styles.contentSection, { paddingHorizontal: horizontalPadding }]}>
        <View style={[commonStyles.shell, styles.contentGrid, !isDesktop && styles.contentGridStacked]}>
          <View style={[styles.aboutCard, !isDesktop && styles.fullWidth]}>
            <Text style={styles.eyebrow}>Sobre o projeto</Text>
            <Text accessibilityRole="header" style={styles.sectionTitle}>Problema, solução e desenvolvimento.</Text>
            <Text style={styles.details}>{project.details}</Text>

            <Text style={[styles.eyebrow, styles.technologiesEyebrow]}>Tecnologias</Text>
            <View style={styles.tags}>
              {project.stack.map((technology) => <Text key={technology} style={styles.technologyTag}>{technology}</Text>)}
            </View>
          </View>

          <View style={[styles.skillsCard, !isDesktop && styles.fullWidth]}>
            <View style={styles.skillsHeading}>
              <MaterialCommunityIcons name="check-decagram-outline" size={23} color={colors.green600} />
              <Text accessibilityRole="header" style={styles.skillsTitle}>Competências aplicadas</Text>
            </View>
            <View style={styles.skillsList}>
              {project.competencies.map((competency) => (
                <View key={competency} style={styles.skillItem}>
                  <View style={styles.skillDot} />
                  <Text style={styles.skillText}>{competency}</Text>
                </View>
              ))}
            </View>
          </View>
        </View>
      </View>

      <View style={[styles.footer, { paddingHorizontal: horizontalPadding }]}> 
        <View style={[commonStyles.shell, styles.footerRow]}>
          <Text style={styles.footerText}>Projeto de Leandro Evaristo de Sousa</Text>
          <Pressable accessibilityRole="button" onPress={returnToPortfolio} style={({ pressed }) => [styles.footerAction, pressed && styles.pressed]}>
            <MaterialCommunityIcons name="arrow-left" size={17} color={colors.green700} />
            <Text style={styles.footerActionText}>Voltar ao portfólio</Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.paper,
  },
  hero: {
    paddingBottom: 78,
  },
  topBar: {
    minHeight: 72,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 18,
  },
  brand: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  brandMark: {
    width: 36,
    height: 36,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 11,
  },
  brandLetter: {
    color: colors.surface,
    fontSize: 15,
    fontWeight: "800",
  },
  brandName: {
    color: colors.ink,
    fontSize: 14,
    fontWeight: "700",
  },
  closeButton: {
    minHeight: 42,
    flexDirection: "row",
    alignItems: "center",
    gap: 7,
    paddingHorizontal: 13,
    borderWidth: 1,
    borderColor: "rgba(36,86,62,0.14)",
    borderRadius: radii.small,
    backgroundColor: "rgba(255,255,255,0.62)",
  },
  closeText: {
    color: colors.green800,
    fontSize: 12,
    fontWeight: "700",
  },
  heroContent: {
    flexDirection: "row",
    alignItems: "center",
    gap: 64,
    paddingTop: 55,
  },
  heroContentStacked: {
    flexDirection: "column",
    alignItems: "stretch",
    gap: 42,
  },
  heroCopy: {
    flex: 1,
  },
  category: {
    color: colors.green600,
    fontSize: 11,
    fontWeight: "800",
    letterSpacing: 1.7,
    textTransform: "uppercase",
  },
  title: {
    maxWidth: 680,
    marginTop: 17,
    color: colors.ink,
    fontSize: 58,
    lineHeight: 62,
    fontWeight: "700",
    letterSpacing: -2.8,
  },
  mobileTitle: {
    fontSize: 40,
    lineHeight: 44,
    letterSpacing: -1.6,
  },
  intro: {
    maxWidth: 650,
    marginTop: 20,
    color: colors.muted,
    fontSize: 17,
    lineHeight: 27,
  },
  actions: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    marginTop: 29,
  },
  coverFrame: {
    width: "43%",
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.76)",
    borderRadius: 32,
    backgroundColor: colors.surface,
  },
  coverFrameStacked: {
    width: "100%",
  },
  contentSection: {
    paddingTop: 82,
    paddingBottom: 88,
  },
  contentGrid: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 28,
  },
  contentGridStacked: {
    flexDirection: "column",
  },
  aboutCard: {
    flex: 1.22,
    padding: 34,
    borderWidth: 1,
    borderColor: colors.line,
    borderRadius: radii.large,
    backgroundColor: colors.surface,
  },
  eyebrow: {
    color: colors.green600,
    fontSize: 10,
    fontWeight: "800",
    letterSpacing: 1.5,
    textTransform: "uppercase",
  },
  sectionTitle: {
    marginTop: 12,
    color: colors.ink,
    fontSize: 28,
    lineHeight: 34,
    fontWeight: "700",
    letterSpacing: -0.9,
  },
  details: {
    marginTop: 18,
    color: colors.muted,
    fontSize: 16,
    lineHeight: 27,
  },
  technologiesEyebrow: {
    marginTop: 34,
  },
  tags: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    marginTop: 13,
  },
  technologyTag: {
    paddingVertical: 8,
    paddingHorizontal: 11,
    overflow: "hidden",
    borderRadius: radii.pill,
    color: colors.green700,
    backgroundColor: colors.softGreen,
    fontSize: 11,
    fontWeight: "700",
  },
  skillsCard: {
    flex: 0.78,
    padding: 30,
    borderRadius: radii.large,
    backgroundColor: colors.green950,
  },
  fullWidth: {
    width: "100%",
  },
  skillsHeading: {
    flexDirection: "row",
    alignItems: "center",
    gap: 9,
  },
  skillsTitle: {
    flex: 1,
    color: colors.surface,
    fontSize: 21,
    fontWeight: "700",
  },
  skillsList: {
    gap: 10,
    marginTop: 23,
  },
  skillItem: {
    minHeight: 43,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    paddingVertical: 9,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.08)",
    borderRadius: radii.small,
    backgroundColor: "rgba(255,255,255,0.055)",
  },
  skillDot: {
    width: 7,
    height: 7,
    borderRadius: 99,
    backgroundColor: colors.mint,
  },
  skillText: {
    flex: 1,
    color: "rgba(255,255,255,0.78)",
    fontSize: 12,
    fontWeight: "600",
    lineHeight: 18,
  },
  footer: {
    paddingBottom: 32,
  },
  footerRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 14,
    paddingTop: 22,
    borderTopWidth: 1,
    borderTopColor: colors.line,
  },
  footerText: {
    color: colors.muted,
    fontSize: 11,
  },
  footerAction: {
    flexDirection: "row",
    alignItems: "center",
    gap: 7,
    paddingVertical: 9,
  },
  footerActionText: {
    color: colors.green700,
    fontSize: 12,
    fontWeight: "700",
  },
  pressed: {
    opacity: 0.68,
  },
});
