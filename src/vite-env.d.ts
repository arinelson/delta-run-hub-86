
/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_GROK_DELTAHUB: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
