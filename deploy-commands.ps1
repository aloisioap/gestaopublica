# Script para deploy limpo na Vercel
# Execute no PowerShell

# Criar pasta limpa
New-Item -ItemType Directory -Force -Path "C:\deploy-temp"
Set-Location "C:\deploy-temp"

# Copiar arquivos necessários (sem node_modules, .next, etc.)
Copy-Item "C:\Users\-\WebstormProjects\Gestao publica\app" -Recurse -Force
Copy-Item "C:\Users\-\WebstormProjects\Gestao publica\components" -Recurse -Force
Copy-Item "C:\Users\-\WebstormProjects\Gestao publica\hooks" -Recurse -Force
Copy-Item "C:\Users\-\WebstormProjects\Gestao publica\lib" -Recurse -Force
Copy-Item "C:\Users\-\WebstormProjects\Gestao publica\types" -Recurse -Force
Copy-Item "C:\Users\-\WebstormProjects\Gestao publica\package.json" -Force
Copy-Item "C:\Users\-\WebstormProjects\Gestao publica\package-lock.json" -Force
Copy-Item "C:\Users\-\WebstormProjects\Gestao publica\next.config.ts" -Force
Copy-Item "C:\Users\-\WebstormProjects\Gestao publica\tailwind.config.ts" -Force
Copy-Item "C:\Users\-\WebstormProjects\Gestao publica\tsconfig.json" -Force
Copy-Item "C:\Users\-\WebstormProjects\Gestao publica\postcss.config.mjs" -Force
Copy-Item "C:\Users\-\WebstormProjects\Gestao publica\next-env.d.ts" -Force

# Criar .env.local
@"
NEXT_PUBLIC_SUPABASE_URL=https://exnqmgcolnfawleqslce.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV4bnFtZ2NvbG5mYXdsZXFzbGNlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzMxNDc1MjQsImV4cCI6MjA4ODcyMzUyNH0.7fWikJmZd8KsqZL_hiYHK_24HUKlmZaRexy0fVxN9Qc
"@ | Out-File -FilePath ".env.local" -Encoding utf8

# Deploy
vercel --prod
