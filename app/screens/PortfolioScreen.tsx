import { useRef } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SiteHeader } from "../components/SiteHeader";
import { colors } from "../constants/theme";
import { useResponsiveLayout } from "../hooks/useResponsiveLayout";
import { ContactSection } from "../sections/ContactSection";
import { HomeSection } from "../sections/HomeSection";
import { JourneySection } from "../sections/JourneySection";
import { ProjectsSection } from "../sections/ProjectsSection";
import { TechnologiesSection } from "../sections/TechnologiesSection";
import { commonStyles } from "../styles/common";
import type { SectionId } from "../types/portfolio";

export default function PortfolioScreen() {
  const scrollRef = useRef<ScrollView>(null);
  const positions = useRef<Partial<Record<SectionId, number>>>({ inicio: 0 });
  const { isDesktop, isMobile, isTablet, horizontalPadding, projectCardWidth, technologyCardWidth } = useResponsiveLayout();

  function registerSection(id: SectionId, y: number) {
    positions.current[id] = y;
  }

  function navigateTo(id: SectionId) {
    const y = positions.current[id];
    if (typeof y === "number") {
      scrollRef.current?.scrollTo({ y: Math.max(0, y - 68), animated: true });
    }
  }

  return (
    <View style={styles.app}>
      <ScrollView
        ref={scrollRef}
        stickyHeaderIndices={[0]}
        contentContainerStyle={styles.page}
        showsVerticalScrollIndicator={false}
      >
        <SiteHeader horizontalPadding={horizontalPadding} isMobile={isMobile} onNavigate={navigateTo} />

        <View onLayout={({ nativeEvent }) => registerSection("inicio", nativeEvent.layout.y)}>
          <HomeSection
            horizontalPadding={horizontalPadding}
            isDesktop={isDesktop}
            isMobile={isMobile}
            onNavigate={navigateTo}
          />
        </View>

        <View onLayout={({ nativeEvent }) => registerSection("trajetoria", nativeEvent.layout.y)}>
          <JourneySection horizontalPadding={horizontalPadding} isMobile={isMobile} />
        </View>

        <View onLayout={({ nativeEvent }) => registerSection("tecnologias", nativeEvent.layout.y)}>
          <TechnologiesSection horizontalPadding={horizontalPadding} cardWidth={technologyCardWidth} isMobile={isMobile} />
        </View>

        <View onLayout={({ nativeEvent }) => registerSection("projetos", nativeEvent.layout.y)}>
          <ProjectsSection horizontalPadding={horizontalPadding} cardWidth={projectCardWidth} isMobile={isMobile} />
        </View>

        <View onLayout={({ nativeEvent }) => registerSection("contato", nativeEvent.layout.y)}>
          <ContactSection horizontalPadding={horizontalPadding} isMobile={isMobile} isTablet={isTablet} />
        </View>

        <View style={[styles.footer, { paddingHorizontal: horizontalPadding }]}>
          <View style={[commonStyles.shell, styles.footerRow]}>
            <Text style={styles.footerText}>Leandro Evaristo de Sousa · Portfólio profissional</Text>
            <Text style={styles.footerText}>2026</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: colors.paper,
  },
  page: {
    backgroundColor: colors.paper,
  },
  footer: {
    paddingBottom: 34,
    backgroundColor: colors.paper,
  },
  footerRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: 10,
    paddingTop: 23,
    borderTopWidth: 1,
    borderTopColor: colors.line,
  },
  footerText: {
    color: colors.muted,
    fontSize: 11,
  },
});
