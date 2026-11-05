# Life Organiser

A free, secure, low-effort system for organising everything a family or executor would need if someone died or lost capacity.

## About

This website provides three comprehensive guides:

1. **Setup Guide** - Build the empty system in 8 steps (about 2 hours once)
2. **Population Guide** - Fill it in, scan documents, and set up six-monthly reviews
3. **Money MOT** - Twice-yearly financial review to cancel, earn, and haggle

The system is built using proven free tools (KeePassXC, Proton Drive) rather than creating new software.

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

Visit [http://localhost:3000](http://localhost:3000) to view the site locally.

## Deployment

This site is configured for static export and deploys to Vercel.

To deploy:
1. Push to GitHub
2. Import to Vercel
3. Configure as needed (see vercel.json)

## Project Structure

```
life-organiser/
├── app/                          # Next.js app directory
│   ├── setup-guide/             # Setup guide page
│   ├── population-guide/        # Population guide page
│   ├── money-mot/               # Money MOT page
│   ├── layout.tsx               # Root layout
│   ├── page.tsx                 # Home page
│   └── globals.css              # Global styles
├── components/                   # React components
│   ├── Navigation.tsx           # Site navigation
│   └── GuideLayout.tsx          # Guide page wrapper
├── *.md                         # Guide content (markdown)
└── public/                      # Static assets
```

## License

Content and guides are provided as information only and do not constitute legal or financial advice.

## Support

If you find this useful, consider [buying me a coffee](#).
