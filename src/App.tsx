import { useMemo } from 'react';
import { ThemeProvider } from '@/context/ThemeContext';
import { ToastProvider } from '@/context/ToastContext';
import { TOKENS } from '@/data/tokens';
import { useTheme } from '@/context/ThemeContext';
import { useSearch } from '@/hooks/useSearch';
import { useActiveSection } from '@/hooks/useActiveSection';
import { Header } from '@/components/Header/Header';
import { Sidebar, type NavGroup } from '@/components/Sidebar/Sidebar';
import { Hero } from '@/components/Hero/Hero';
import { Section } from '@/components/Section/Section';
import { ColorSwatches } from '@/components/ColorSwatches/ColorSwatches';
import { FeedbackGrid } from '@/components/FeedbackGrid/FeedbackGrid';
import { TypeFamilies } from '@/components/Typography/TypeFamilies';
import { TypeScale } from '@/components/Typography/TypeScale';
import { FontWeights } from '@/components/Typography/FontWeights';
import { Spacing } from '@/components/Spacing/Spacing';
import { Breakpoints } from '@/components/Breakpoints/Breakpoints';
import { Toast } from '@/components/Toast/Toast';

const SECTION_IDS = [
  'hero',
  'foreground',
  'surface',
  'feedback',
  'content',
  'stroke',
  'typography',
  'scale',
  'weights',
  'spacing',
  'screens',
] as const;

const NAV_GROUPS: NavGroup[] = [
  {
    label: 'Início',
    items: [{ id: 'hero', label: 'Visão geral', dotColor: 'var(--stroke)' }],
  },
  {
    label: 'Cores',
    items: [
      { id: 'foreground', label: 'Foreground', dotColor: '#F1E1D9', dotBorder: '#e0c9be' },
      { id: 'surface', label: 'Surface', dotColor: '#A87058' },
      { id: 'feedback', label: 'Feedback', dotColor: '#C2576E' },
      { id: 'content', label: 'Content', dotColor: '#44332C' },
      { id: 'stroke', label: 'Stroke & Effects', dotColor: '#CF8C6E' },
    ],
  },
  {
    label: 'Tipografia',
    items: [
      { id: 'typography', label: 'Famílias' },
      { id: 'scale', label: 'Escala' },
      { id: 'weights', label: 'Pesos' },
    ],
  },
  {
    label: 'Espaçamento',
    items: [
      { id: 'spacing', label: 'Padding & Gap' },
      { id: 'screens', label: 'Breakpoints' },
    ],
  },
];

const Content = () => {
  const { mode } = useTheme();
  const { query, setQuery, matches } = useSearch();
  const activeId = useActiveSection(SECTION_IDS);

  const tokens = useMemo(() => TOKENS[mode], [mode]);

  return (
    <>
      <Header query={query} onQueryChange={setQuery} />
      <div className="layout">
        <Sidebar groups={NAV_GROUPS} activeId={activeId} />
        <main className="main" id="mainContent">
          <Hero />

          <Section id="foreground" tag="01 · Cores" title="Foreground" description="Tokens de fundo e primeiro plano. Usados em backgrounds, overlays e camadas de superfície base.">
            <ColorSwatches label="Base" tokens={tokens.fgBase} matches={matches} />
            <ColorSwatches label="Foreground Accent" tokens={tokens.fgAccent} matches={matches} />
            <ColorSwatches label="Foreground Neutral — Estados" tokens={tokens.fgNeutral} matches={matches} />
          </Section>

          <hr className="divider" />

          <Section id="surface" tag="02 · Cores" title="Surface" description="Superfícies interativas e de conteúdo. Accent para botões primários e ações principais; Default para contêineres neutros.">
            <ColorSwatches label="Surface Accent" tokens={tokens.surfAccent} matches={matches} />
            <ColorSwatches label="Surface Default" tokens={tokens.surfDefault} matches={matches} />
            <ColorSwatches label="On-surface" tokens={tokens.surfOn} matches={matches} />
          </Section>

          <hr className="divider" />

          <Section id="feedback" tag="03 · Cores" title="Feedback" description="Success, Danger, Warning e Info — cada um com 4 estados interativos.">
            <FeedbackGrid tokens={tokens.feedback} matches={matches} />
          </Section>

          <hr className="divider" />

          <Section id="content" tag="04 · Cores" title="Content" description="Tokens para texto, ícones e elementos de conteúdo. Escala do mais escuro (máximo contraste) ao mais claro (muted).">
            <ColorSwatches label="Content Accent" tokens={tokens.contAccent} matches={matches} />
            <ColorSwatches label="Oncolor" tokens={tokens.contOncolor} matches={matches} />
            <ColorSwatches label="Default — Hierarquia de texto" tokens={tokens.contDefault} matches={matches} />
          </Section>

          <hr className="divider" />

          <Section id="stroke" tag="05 · Cores" title="Stroke & Effects" description="Bordas, sombras e glows de foco.">
            <ColorSwatches label="Stroke" tokens={tokens.stroke} matches={matches} />
            <ColorSwatches label="Glow de foco" tokens={tokens.glow} matches={matches} />
          </Section>

          <hr className="divider" />

          <Section id="typography" tag="06 · Tipografia" title="Famílias tipográficas" description="Dois papéis distintos, dois propósitos precisos.">
            <TypeFamilies />
          </Section>

          <Section id="scale" tag="07 · Tipografia" title="Escala de tamanhos" description="Valores responsivos por breakpoint. Selecione o contexto de uso:">
            <TypeScale matches={matches} />
          </Section>

          <Section id="weights" tag="08 · Tipografia" title="Pesos" description="Sete pesos disponíveis para composição tipográfica.">
            <FontWeights matches={matches} />
          </Section>

          <hr className="divider" />

          <Section id="spacing" tag="09 · Espaçamento" title="Padding & Gap" description="Escala de espaçamento responsiva.">
            <Spacing matches={matches} />
          </Section>

          <Section id="screens" tag="10 · Layout" title="Breakpoints" description="Dimensões de referência por dispositivo.">
            <Breakpoints matches={matches} />
          </Section>
        </main>
      </div>
      <Toast />
    </>
  );
};

const App = () => (
  <ThemeProvider>
    <ToastProvider>
      <Content />
    </ToastProvider>
  </ThemeProvider>
);

export default App;
