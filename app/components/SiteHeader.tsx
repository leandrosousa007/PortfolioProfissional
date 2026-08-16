import { LinearGradient } from "expo-linear-gradient";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { colors } from "../constants/theme";
import { navigationItems } from "../data/portfolio";
import type { SectionId } from "../types/portfolio";

type SiteHeaderProps = {
  horizontalPadding: number;
  isMobile: boolean;
  onNavigate: (id: SectionId) => void;
};

export function SiteHeader({ horizontalPadding, isMobile, onNavigate }: SiteHeaderProps) {
  return (
    <View style={[styles.header, { paddingHorizontal: horizontalPadding }]}>
      <View style={styles.shell}>
        <Pressable accessibilityRole="button" accessibilityLabel="Voltar ao início" onPress={() => onNavigate("inicio")} style={styles.brand}>
          <LinearGradient colors={[colors.green600, colors.green950]} style={styles.brandMark}>
            <Text style={styles.brandMarkText}>LE</Text>
          </LinearGradient>
          <Text style={[styles.brandName, isMobile && styles.brandNameMobile]}>Leandro Evaristo</Text>
        </Pressable>

        <ScrollView horizontal style={styles.navigationScroll} showsHorizontalScrollIndicator={false} contentContainerStyle={styles.navigation}>
          {navigationItems.map((item) => (
            <Pressable
              key={item.id}
              accessibilityRole="button"
              onPress={() => onNavigate(item.id)}
              style={({ pressed }) => [styles.navigationButton, pressed && styles.navigationButtonPressed]}
            >
              <Text style={styles.navigationText}>{item.label}</Text>
            </Pressable>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    zIndex: 50,
    borderBottomWidth: 1,
    borderBottomColor: colors.line,
    backgroundColor: "rgba(255,255,255,0.96)",
  },
  shell: {
    width: "100%",
    maxWidth: 1180,
    minHeight: 70,
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 18,
  },
  brand: {
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    paddingVertical: 9,
  },
  brandMark: {
    width: 36,
    height: 36,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 11,
  },
  brandMarkText: {
    color: colors.surface,
    fontSize: 11,
    fontWeight: "800",
    letterSpacing: 1,
  },
  brandName: {
    color: colors.ink,
    fontSize: 15,
    fontWeight: "700",
  },
  brandNameMobile: {
    display: "none",
  },
  navigationScroll: {
    flex: 1,
    minWidth: 0,
    flexShrink: 1,
  },
  navigation: {
    alignItems: "center",
    gap: 2,
    paddingVertical: 8,
  },
  navigationButton: {
    paddingVertical: 10,
    paddingHorizontal: 11,
    borderRadius: 11,
  },
  navigationButtonPressed: {
    backgroundColor: colors.softGreen,
  },
  navigationText: {
    color: colors.muted,
    fontSize: 12,
    fontWeight: "600",
  },
});
