import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { LinearGradient } from "expo-linear-gradient";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { links } from "../constants/links";
import { colors, radii } from "../constants/theme";
import { commonStyles } from "../styles/common";
import { openExternalLink } from "../utils/links";

type ContactSectionProps = {
  horizontalPadding: number;
  isMobile: boolean;
  isTablet: boolean;
};

const contactLinks = [
  { label: "E-mail", icon: "email-outline" as const, color: colors.green700, onPress: () => openExternalLink(links.email) },
  { label: "LinkedIn", icon: "linkedin" as const, color: "#0A66C2", onPress: () => openExternalLink(links.linkedIn) },
  { label: "GitHub", icon: "github" as const, color: colors.ink, onPress: () => openExternalLink(links.github) },
];

export function ContactSection({ horizontalPadding, isMobile, isTablet }: ContactSectionProps) {
  return (
    <View style={[styles.section, { paddingHorizontal: horizontalPadding }]}>
      <LinearGradient colors={[colors.green800, colors.green950]} style={[commonStyles.shell, styles.card, isMobile && styles.mobileCard]}>
        <Text style={styles.eyebrow}>Contato</Text>
        <Text accessibilityRole="header" style={[styles.title, isMobile && styles.mobileTitle]}>Estou buscando uma oportunidade de estágio em tecnologia.</Text>
        <Text style={styles.description}>
          Para conversar sobre desenvolvimento, projetos ou oportunidades, entre em contato por e-mail ou pelas minhas redes profissionais.
        </Text>
        <View style={[styles.links, !isTablet && styles.linksStacked]}>
          {contactLinks.map((item) => (
            <Pressable key={item.label} accessibilityRole="link" onPress={item.onPress} style={({ pressed }) => [styles.link, pressed && styles.pressed]}>
              <MaterialCommunityIcons name={item.icon} size={23} color={item.color} />
              <Text style={styles.linkText}>{item.label}</Text>
              <MaterialCommunityIcons name="arrow-top-right" size={17} color={colors.green600} />
            </Pressable>
          ))}
        </View>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    paddingTop: 96,
    paddingBottom: 86,
    backgroundColor: colors.paper,
  },
  card: {
    padding: 60,
    borderRadius: 34,
  },
  mobileCard: {
    padding: 28,
    borderRadius: 26,
  },
  eyebrow: {
    color: colors.mint,
    fontSize: 11,
    fontWeight: "800",
    letterSpacing: 1.8,
    textTransform: "uppercase",
  },
  title: {
    maxWidth: 850,
    marginTop: 16,
    color: colors.surface,
    fontSize: 54,
    lineHeight: 58,
    fontWeight: "700",
    letterSpacing: -2.5,
  },
  mobileTitle: {
    fontSize: 38,
    lineHeight: 43,
    letterSpacing: -1.5,
  },
  description: {
    maxWidth: 680,
    marginTop: 19,
    color: "rgba(255,255,255,0.64)",
    fontSize: 16,
    lineHeight: 26,
  },
  links: {
    flexDirection: "row",
    gap: 10,
    marginTop: 38,
  },
  linksStacked: {
    flexDirection: "column",
  },
  link: {
    flex: 1,
    minHeight: 60,
    flexDirection: "row",
    alignItems: "center",
    gap: 9,
    paddingHorizontal: 16,
    borderRadius: radii.medium,
    backgroundColor: colors.surface,
  },
  linkText: {
    flex: 1,
    color: colors.ink,
    fontSize: 13,
    fontWeight: "700",
  },
  pressed: {
    opacity: 0.74,
  },
});
