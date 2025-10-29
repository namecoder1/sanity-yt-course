# Blog con Next.js e Sanity CMS

Un blog moderno e responsive costruito con **Next.js 16** e **Sanity CMS**, progettato per essere veloce, SEO-friendly e facile da gestire.

## 🚀 Caratteristiche

- **Next.js 16** con App Router per performance ottimali
- **Sanity CMS** per la gestione dei contenuti
- **Tailwind CSS** per lo styling responsive
- **Portable Text** per contenuti ricchi
- **SEO ottimizzato** con metadati dinamici
- **Design moderno** con componenti riutilizzabili
- **Categorizzazione** degli articoli
- **Gestione immagini** ottimizzata

## 📋 Prerequisiti

Prima di iniziare, assicurati di avere installato:

- [Node.js](https://nodejs.org/) (versione 18 o superiore)
- [npm](https://www.npmjs.com/) o [yarn](https://yarnpkg.com/)
- Un account [Sanity](https://www.sanity.io/)

## 🛠️ Installazione

1. **Clona il repository**
   ```bash
   git clone sanity-yt-course
   cd sanity-yt-course
   ```

2. **Installa le dipendenze**
   ```bash
   npm install
   # oppure
   yarn install
   ```

3. **Configura Sanity**
   - Crea un nuovo progetto su [sanity.io](https://www.sanity.io/)
   - Copia il `projectId` e `dataset` dal tuo progetto Sanity
   - Crea un file `.env.local` nella root del progetto:
   ```env
   NEXT_PUBLIC_SANITY_PROJECT_ID=il_tuo_project_id
   NEXT_PUBLIC_SANITY_DATASET=production
   SANITY_API_READ_TOKEN=il_tuo_read_token
   ```

4. **Avvia lo studio Sanity**
   ```bash
   npm run dev
   ```
   Visita `http://localhost:3000/studio` per accedere al CMS.

5. **Avvia l'applicazione**
   ```bash
   npm run dev
   ```
   L'applicazione sarà disponibile su `http://localhost:3000`

## 📁 Struttura del Progetto

```
sanity-yt-course/
├── app/                          # App Router di Next.js
│   ├── (public)/                # Pagine pubbliche
│   │   ├── blog/                # Pagine del blog
│   │   │   ├── [id]/           # Pagina singolo articolo
│   │   │   └── categories/     # Pagine categorie
│   │   ├── layout.js           # Layout principale
│   │   └── page.js             # Homepage
│   └── (private)/              # Pagine private
│       └── studio/             # Sanity Studio
├── components/                  # Componenti React
│   ├── footer.jsx              # Footer
│   ├── navbar.jsx              # Navbar
│   ├── post.jsx                # Card articolo
│   └── text-block.jsx          # Blocco di testo
├── sanity/                     # Configurazione Sanity
│   ├── lib/                    # Utilities Sanity
│   └── schemaTypes/            # Schema dei contenuti
└── public/                     # File statici
```

## 🎨 Schema dei Contenuti

### Post (Articoli)
- **Titolo**: Titolo dell'articolo
- **Slug**: URL-friendly identifier
- **Descrizione**: Estratto dell'articolo
- **Immagine**: Immagine principale con testo alternativo
- **Data di pubblicazione**: Quando è stato pubblicato
- **Categoria**: Riferimento alla categoria
- **Contenuto**: Testo ricco con Portable Text

### Categorie
- **Titolo**: Nome della categoria
- **Slug**: URL-friendly identifier

## 🔧 Script Disponibili

```bash
# Sviluppo
npm run dev          # Avvia il server di sviluppo

# Produzione
npm run build        # Crea la build di produzione
npm run start        # Avvia il server di produzione

# Linting
npm run lint         # Esegue ESLint
```

## 🎯 Funzionalità Principali

### Homepage
- Hero section con immagine di sfondo
- Griglia degli ultimi 3 articoli
- Link per esplorare tutti gli articoli

### Pagina Blog
- Lista completa degli articoli
- Filtri per categoria
- Paginazione (se implementata)

### Articolo Singolo
- Contenuto completo con Portable Text
- Metadati SEO
- Navigazione tra articoli

### Sanity Studio
- Interfaccia per gestire contenuti
- Editor visuale per contenuti ricchi
- Gestione media e immagini
- Preview in tempo reale

## 🎨 Personalizzazione

### Stili
Il progetto utilizza **Tailwind CSS** per lo styling. Puoi personalizzare:
- Colori nel file `tailwind.config.js`
- Stili globali in `app/globals.css`
- Componenti specifici nei file `.jsx`

### Schema Sanity
Modifica gli schema in `sanity/schemaTypes/` per:
- Aggiungere nuovi campi
- Creare nuovi tipi di contenuto
- Personalizzare l'interfaccia di editing

### Componenti
I componenti sono modulari e riutilizzabili:
- `Post.jsx`: Card per visualizzare articoli
- `TextBlock.jsx`: Renderer per contenuti ricchi
- `Navbar.jsx` e `Footer.jsx`: Layout components

## 🚀 Deploy

### Vercel (Raccomandato)
1. Collega il repository a Vercel
2. Aggiungi le variabili d'ambiente
3. Deploy automatico ad ogni push

### Altri Provider
Il progetto è compatibile con qualsiasi provider che supporti Next.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## 📚 Risorse Utili

- [Documentazione Next.js](https://nextjs.org/docs)
- [Documentazione Sanity](https://www.sanity.io/docs)
- [Documentazione Tailwind CSS](https://tailwindcss.com/docs)
- [Portable Text](https://www.portabletext.org/)

## 🤝 Contribuire

1. Fork del progetto
2. Crea un branch per la tua feature (`git checkout -b feature/AmazingFeature`)
3. Commit delle modifiche (`git commit -m 'Add some AmazingFeature'`)
4. Push al branch (`git push origin feature/AmazingFeature`)
5. Apri una Pull Request

## 📄 Licenza

Questo progetto è distribuito sotto licenza MIT. Vedi `LICENSE` per maggiori informazioni.

## 📞 Supporto

Se hai domande o problemi:
- Apri una [issue](https://github.com/tuo-username/sanity-yt-course/issues)
- Contattami su [Twitter](https://twitter.com/tuo-username)
- Email: tuo-email@example.com

---

**Buon coding! 🚀**
