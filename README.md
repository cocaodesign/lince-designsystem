# Lince — Design System

Referência oficial de cores, tipografia e espaçamento para toda a codebase do produto Lince. Aplicação em React + Vite + TypeScript, pronta para deploy na Vercel.

## Stack

- **Vite** + **React 18** + **TypeScript**
- **CSS Modules** com **CSS Variables** para theming (light / dark)
- Tokens centralizados em [src/data](src/data/) e tipados em [src/types](src/types/index.ts)

## Scripts

```bash
npm install    # instala dependências
npm run dev    # dev server (http://localhost:5173)
npm run build  # build de produção (dist/)
npm run preview
```

## Estrutura

```
src/
├── components/   # UI por feature, um CSS Module por componente
├── context/      # ThemeContext, ToastContext
├── data/         # tokens, scale, spacing
├── hooks/        # useCopyToken, useActiveSection, useSearch
├── styles/       # global.css + tokens.css (CSS variables)
├── types/        # tipos compartilhados
├── App.tsx
└── main.tsx
```

## Deploy na Vercel

O projeto já vem com [vercel.json](vercel.json) configurado. Basta:

1. `vercel` na raiz (ou importar o repo no dashboard).
2. Framework detectado: **Vite** · Build: `npm run build` · Output: `dist`.
