import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { LinearGradient } from "expo-linear-gradient";
import { Image, StyleSheet, Text, View } from "react-native";
import { ActionButton } from "../components/ActionButton";
import { links } from "../constants/links";
import { colors, radii } from "../constants/theme";
import { commonStyles } from "../styles/common";
import type { SectionId } from "../types/portfolio";
import { openExternalLink } from "../utils/links";

type HomeSectionProps = {
  horizontalPadding: number;
  isDesktop: boolean;
  isMobile: boolean;
  onNavigate: (id: SectionId) => void;
};

export function HomeSection({ horizontalPadding, isDesktop, isMobile, onNavigate }: HomeSectionProps) {
  return (
    <LinearGradient
      colors={["#FBFCFA", "#EEF5EF", "#DFECE2"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={[styles.section, { paddingHorizontal: horizontalPadding }]}
    >
      <View style={[commonStyles.shell, styles.content, !isDesktop && styles.contentStacked]}>
        <View style={[styles.copy, !isDesktop && styles.fullWidth]}>
          <View style={styles.academicBadge}>
            <MaterialCommunityIcons name="school-outline" size={17} color={colors.green700} />
            <Text style={styles.academicBadgeText}>Graduando em Ciência da Computação</Text>
          </View>

          <Text accessibilityRole="header" style={[styles.title, isMobile && styles.mobileTitle]}>Bem-vindo ao meu portfólio</Text>
          <Text style={styles.name}>Eu sou Leandro Evaristo de Sousa.</Text>
          <Text style={styles.description}>
            Estou no 5º semestre de Ciência da Computação na UFU e busco uma oportunidade de estágio em tecnologia. Minha trajetória reúne desenvolvimento web, monitoria, extensão, empresa júnior e trabalhos freelance.
          </Text>

          <View style={styles.actions}>
            <ActionButton label="LinkedIn" icon="linkedin" variant="primary" onPress={() => openExternalLink(links.linkedIn)} />
            <ActionButton label="GitHub" icon="github" onPress={() => openExternalLink(links.github)} />
            <ActionButton label="Contato" icon="email-outline" variant="quiet" onPress={() => onNavigate("contato")} />
          </View>
        </View>

        <View style={[styles.portraitArea, !isDesktop && styles.portraitAreaStacked]}>
          <LinearGradient colors={[colors.surface, "#CDE3D3"]} style={styles.portraitFrame}>
            <Image source={require("../assets/images/leandro-portrait.png")} style={styles.portrait} resizeMode="cover" accessibilityLabel="Foto de Leandro Evaristo" />
          </LinearGradient>
          <View style={styles.locationBadge}>
            <MaterialCommunityIcons name="map-marker-outline" size={18} color={colors.green700} />
            <Text style={styles.locationText}>Uberlândia, Minas Gerais</Text>
          </View>
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  section: {
    paddingTop: 78,
    paddingBottom: 88,
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    gap: 72,
  },
  contentStacked: {
    flexDirection: "column",
    gap: 52,
  },
  copy: {
    flex: 1.16,
  },
  fullWidth: {
    width: "100%",
  },
  academicBadge: {
    alignSelf: "flex-start",
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    paddingVertical: 9,
    paddingHorizontal: 13,
    borderWidth: 1,
    borderColor: "#D7E5DA",
    borderRadius: radii.pill,
    backgroundColor: "rgba(255,255,255,0.72)",
  },
  academicBadgeText: {
    color: colors.green700,
    fontSize: 12,
    fontWeight: "700",
  },
  title: {
    maxWidth: 720,
    marginTop: 25,
    color: colors.ink,
    fontSize: 68,
    lineHeight: 71,
    fontWeight: "700",
    letterSpacing: -3.4,
  },
  mobileTitle: {
    fontSize: 46,
    lineHeight: 49,
    letterSpacing: -2.1,
  },
  name: {
    marginTop: 20,
    color: colors.green700,
    fontSize: 20,
    fontWeight: "700",
  },
  description: {
    maxWidth: 680,
    marginTop: 17,
    color: colors.muted,
    fontSize: 17,
    lineHeight: 28,
  },
  actions: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    marginTop: 31,
  },
  portraitArea: {
    flex: 0.84,
    alignItems: "center",
  },
  portraitAreaStacked: {
    width: "100%",
    maxWidth: 500,
  },
  portraitFrame: {
    width: "100%",
    maxWidth: 430,
    aspectRatio: 0.87,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.82)",
    borderRadius: 48,
  },
  portrait: {
    width: "100%",
    height: "100%",
  },
  locationBadge: {
    marginTop: -22,
    flexDirection: "row",
    alignItems: "center",
    gap: 7,
    paddingVertical: 11,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: colors.line,
    borderRadius: radii.medium,
    backgroundColor: colors.surface,
  },
  locationText: {
    color: colors.green900,
    fontSize: 12,
    fontWeight: "700",
  },
});
