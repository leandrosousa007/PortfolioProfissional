import type { DimensionValue } from "react-native";
import { useWindowDimensions } from "react-native";

export function useResponsiveLayout() {
  const { width } = useWindowDimensions();
  const isDesktop = width >= 980;
  const isTablet = width >= 680;
  const isMobile = width < 520;

  const horizontalPadding = isMobile ? 18 : width < 900 ? 28 : 48;
  const technologyCardWidth: DimensionValue = isDesktop ? "19.1%" : isTablet ? "31.7%" : width < 380 ? "100%" : "48%";
  const projectCardWidth: DimensionValue = isDesktop ? "48.8%" : "100%";
  const experienceCardWidth: DimensionValue = isDesktop ? "48.8%" : "100%";

  return {
    width,
    isDesktop,
    isTablet,
    isMobile,
    horizontalPadding,
    technologyCardWidth,
    projectCardWidth,
    experienceCardWidth,
  };
}
