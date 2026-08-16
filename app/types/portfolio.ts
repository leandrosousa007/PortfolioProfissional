import type MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import type { ComponentProps } from "react";
import type { ImageSourcePropType } from "react-native";

export type IconName = ComponentProps<typeof MaterialCommunityIcons>["name"];

export type SectionId = "inicio" | "trajetoria" | "tecnologias" | "projetos" | "contato";

export type NavigationItem = {
  id: SectionId;
  label: string;
};

export type TimelineEntry = {
  id: string;
  type: "education" | "experience";
  title: string;
  organization: string;
  period?: string;
  role?: string;
  description: string;
  focusAreas: string[];
};

export type Technology = {
  name: string;
  icon: IconName;
  color: string;
};

export type TechnologyGroup = {
  title: string;
  technologies: Technology[];
};

export type Project = {
  slug: string;
  name: string;
  category: string;
  description: string;
  details: string;
  stack: string[];
  competencies: string[];
  image?: ImageSourcePropType;
  cover?: {
    icon: IconName;
    colors: readonly [string, string];
  };
  liveUrl?: string;
  repositoryUrl?: string;
  download?: boolean;
};
