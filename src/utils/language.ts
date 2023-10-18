let language: "cn" | "en" = "cn";
let forceUpdate: () => void;

function setLanguage(_: "cn" | "en") {
  language = _;
  forceUpdate?.();
}

export function getLanguage() {
  return language;
}

export function setForceUpdateFunction(_: () => void) {
  forceUpdate = _;
}

export function toggleLanguage() {
  switch (language) {
    case "en":
      setLanguage("cn");
      break;
    default:
      setLanguage("en");
      break;
  }
}

export function applyLanguage(cn: string, en: string) {
  return language === "cn" ? cn : en;
}

// TODO this is a dirty hack
(globalThis as any).toggleLanguage = toggleLanguage;
