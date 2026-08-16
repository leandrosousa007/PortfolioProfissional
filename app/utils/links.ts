import { Alert, Linking, Platform } from "react-native";

export function openExternalLink(url: string) {
  Linking.openURL(url).catch(() => Alert.alert("Não foi possível abrir este link."));
}

export function openWebDownload(path: string, unavailableMessage: string) {
  if (Platform.OS === "web" && typeof globalThis.location !== "undefined") {
    globalThis.location.assign(path);
    return;
  }

  Alert.alert("Disponível na versão web", unavailableMessage);
}

export function openProjectDetails(slug: string) {
  if (Platform.OS === "web" && typeof globalThis.open === "function") {
    globalThis.open(`/#/projeto/${encodeURIComponent(slug)}`, "_blank", "noopener,noreferrer");
    return;
  }

  Alert.alert("Disponível na versão web", "Abra o portfólio no navegador para visualizar os detalhes deste projeto.");
}
