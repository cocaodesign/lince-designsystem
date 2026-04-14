import type { TokensByMode } from '@/types';

const c = (name: string, hex: string) => ({ name, hex });

export const TOKENS: TokensByMode = {
  light: {
    fgBase: [
      c('Foreground.Accent', '#F1E1D9'),
      c('Foreground.Default', '#FAF9F8'),
      c('Foreground.Accent Strong', '#FCF8F7'),
    ],
    fgAccent: [
      c('FG Accent.Accent', '#885945'),
      c('FG Accent.Default', '#F4F3F2'),
      c('FG Accent.Strong', '#694434'),
    ],
    fgNeutral: [
      c('Neutral.Enabled', '#FAF9F8'),
      c('Neutral.Hover', '#F4F3F2'),
      c('Neutral.Pressed', '#EFEDED'),
      c('Neutral.Disabled', '#E7E4E3'),
    ],
    surfAccent: [
      c('accent.Enabled', '#A87058'),
      c('accent.Hover', '#98644E'),
      c('accent.Pressed', '#885945'),
      c('accent.Disabled', '#C2BAB7'),
    ],
    surfDefault: [
      c('default.Enabled', '#FAF9F8'),
      c('default.Hover', '#F4F3F2'),
      c('default.Pressed', '#E7E4E3'),
      c('default.Disabled', '#DCD8D6'),
    ],
    surfOn: [c('On-accent', '#4D3C36'), c('On-default', '#F4F3F2')],
    feedback: {
      success: {
        label: 'Success',
        accent: '#899356',
        background: '#f0f3e6',
        states: [
          { name: 'Default', hex: '#899356' },
          { name: 'Hover', hex: '#7D854D' },
          { name: 'Pressed', hex: '#707845' },
          { name: 'Focus', hex: '#646B3D' },
        ],
      },
      danger: {
        label: 'Danger',
        accent: '#C2576E',
        background: '#f9ecee',
        states: [
          { name: 'Default', hex: '#C2576E' },
          { name: 'Hover', hex: '#AE4E6E' },
          { name: 'Pressed', hex: '#9B4562' },
          { name: 'Focus', hex: '#8A3C56' },
        ],
      },
      warning: {
        label: 'Warning',
        accent: '#9D774A',
        background: '#f5ede0',
        states: [
          { name: 'Default', hex: '#9D774A' },
          { name: 'Hover', hex: '#9D774A' },
          { name: 'Pressed', hex: '#8E6C41' },
          { name: 'Focus', hex: '#7F603A' },
        ],
      },
      info: {
        label: 'Info',
        accent: '#5184B1',
        background: '#e8eef7',
        states: [
          { name: 'Default', hex: '#5184B1' },
          { name: 'Hover', hex: '#4877A0' },
          { name: 'Pressed', hex: '#406A8F' },
          { name: 'Focus', hex: '#375E7F' },
        ],
      },
    },
    contAccent: [
      c('Content.Accent.Accent', '#F1E1D9'),
      c('Content.Accent.Default', '#98644E'),
    ],
    contOncolor: [
      c('Oncolor.Oncolor', '#FAF9F8'),
      c('Oncolor.Disabled', '#9E9490'),
      c('Oncolor.Accent', '#5B4A43'),
    ],
    contDefault: [
      c('Default.Accent', '#2F1D15'),
      c('Default.Secondary', '#44332C'),
      c('Default.Placeholder', '#665650'),
      c('Default.Muted', '#B8AFAB'),
    ],
    stroke: [
      c('stroke.accent.Accent', '#CF8C6E'),
      c('stroke.accent.Default', '#FAF9F8'),
    ],
    glow: [
      c('Focus Glow Primary', '#DCD8D6'),
      c('Focus Glow Accent', '#E3C0AD'),
      c('Focus Glow Feedback', '#FFFFFF'),
    ],
  },
  dark: {
    fgBase: [
      c('Foreground.Accent', '#CF8C6E'),
      c('Foreground.Default', '#0D111A'),
      c('Foreground.Accent Strong', '#98644E'),
    ],
    fgAccent: [
      c('FG Accent.Accent', '#C68468'),
      c('FG Accent.Default', '#190A1D'),
      c('FG Accent.Strong', '#98644E'),
    ],
    fgNeutral: [
      c('Neutral.Enabled', '#26140E'),
      c('Neutral.Hover', '#392720'),
      c('Neutral.Pressed', '#44332C'),
      c('Neutral.Disabled', '#5B4A43'),
    ],
    surfAccent: [
      c('accent.Enabled', '#F1E1D9'),
      c('accent.Hover', '#EBD3C7'),
      c('accent.Pressed', '#E3C0AD'),
      c('accent.Disabled', '#4D3C36'),
    ],
    surfDefault: [
      c('default.Enabled', '#26140E'),
      c('default.Hover', '#44332C'),
      c('default.Pressed', '#4D3C36'),
      c('default.Disabled', '#665650'),
    ],
    surfOn: [c('On-accent', '#F4F3F2'), c('On-default', '#57382A')],
    feedback: {
      success: {
        label: 'Success',
        accent: '#AEBA6E',
        background: '#2a3018',
        states: [
          { name: 'Default', hex: '#F0F0D6' },
          { name: 'Hover', hex: '#E7E9BC' },
          { name: 'Pressed', hex: '#DCDE9B' },
          { name: 'Focus', hex: '#AEBA6E' },
        ],
      },
      danger: {
        label: 'Danger',
        accent: '#D07E5A',
        background: '#3a1f1a',
        states: [
          { name: 'Default', hex: '#FAF1ED' },
          { name: 'Hover', hex: '#F4E0D6' },
          { name: 'Pressed', hex: '#EFD2C3' },
          { name: 'Focus', hex: '#D07E5A' },
        ],
      },
      warning: {
        label: 'Warning',
        accent: '#F9CBD1',
        background: '#3a1a20',
        states: [
          { name: 'Default', hex: '#F9CBD1' },
          { name: 'Hover', hex: '#FCE8EA' },
          { name: 'Pressed', hex: '#64122B' },
          { name: 'Focus', hex: '#520E22' },
        ],
      },
      info: {
        label: 'Info',
        accent: '#9AB2DF',
        background: '#1a2535',
        states: [
          { name: 'Default', hex: '#F0F3FA' },
          { name: 'Hover', hex: '#E9EEF8' },
          { name: 'Pressed', hex: '#CED9EF' },
          { name: 'Focus', hex: '#9AB2DF' },
        ],
      },
    },
    contAccent: [
      c('Content.Accent.Accent', '#57382A'),
      c('Content.Accent.Default', '#392720'),
    ],
    contOncolor: [
      c('Oncolor.Oncolor', '#5B4A43'),
      c('Oncolor.Disabled', '#A79C98'),
      c('Oncolor.Accent', '#E7E4E3'),
    ],
    contDefault: [
      c('Default.Accent', '#DCD8D6'),
      c('Default.Secondary', '#C2BAB7'),
      c('Default.Placeholder', '#9E9490'),
      c('Default.Muted', '#B8AFAB'),
    ],
    stroke: [
      c('stroke.accent.Accent', '#CF8C6E'),
      c('stroke.accent.Default', '#2F1D15'),
    ],
    glow: [
      c('Focus Glow Primary', '#44332C'),
      c('Focus Glow Accent', '#4A3024'),
      c('Focus Glow Feedback', '#FFFFFF'),
    ],
  },
};
