import { StyleSheet } from "react-native";
import { colors, layout } from "../constants/theme";

export const commonStyles = StyleSheet.create({
  shell: {
    width: "100%",
    maxWidth: layout.maxWidth,
    alignSelf: "center",
  },
  section: {
    paddingTop: layout.sectionPadding,
    paddingBottom: layout.sectionPadding,
  },
  sectionMobile: {
    paddingTop: layout.mobileSectionPadding,
    paddingBottom: layout.mobileSectionPadding,
  },
  row: {
    flexDirection: "row",
  },
  wrappedRow: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  stack: {
    flexDirection: "column",
  },
  mutedText: {
    color: colors.muted,
  },
});

