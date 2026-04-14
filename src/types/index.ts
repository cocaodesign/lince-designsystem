export type ThemeMode = 'light' | 'dark';

export type Breakpoint = 'desktop' | 'tablet' | 'mobile';

export interface ColorToken {
  name: string;
  hex: string;
}

export interface FeedbackState {
  name: string;
  hex: string;
}

export interface FeedbackToken {
  label: string;
  accent: string;
  background: string;
  states: FeedbackState[];
}

export interface FeedbackTokens {
  success: FeedbackToken;
  danger: FeedbackToken;
  warning: FeedbackToken;
  info: FeedbackToken;
}

export interface ThemeTokens {
  fgBase: ColorToken[];
  fgAccent: ColorToken[];
  fgNeutral: ColorToken[];
  surfAccent: ColorToken[];
  surfDefault: ColorToken[];
  surfOn: ColorToken[];
  feedback: FeedbackTokens;
  contAccent: ColorToken[];
  contOncolor: ColorToken[];
  contDefault: ColorToken[];
  stroke: ColorToken[];
  glow: ColorToken[];
}

export type TokensByMode = Record<ThemeMode, ThemeTokens>;

export type ScaleMap = Record<string, number>;
export type SpacingMap = Record<string, number>;
