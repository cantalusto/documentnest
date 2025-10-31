// Test Supabase Connection
// Run with: node test-supabase.js

const SUPABASE_URL = process.env.VITE_SUPABASE_URL || 'https://xoxmkiuhqykwqyownypd.supabase.co';
const SUPABASE_ANON_KEY = process.env.VITE_SUPABASE_ANON_KEY || 'YOUR_KEY_HERE';

console.log('🔍 Testando conexão com Supabase...\n');

console.log('📋 Configuração:');
console.log('  URL:', SUPABASE_URL);
console.log('  Anon Key:', SUPABASE_ANON_KEY.substring(0, 20) + '...');
console.log('');

if (SUPABASE_ANON_KEY === 'YOUR_KEY_HERE' || SUPABASE_ANON_KEY === 'COLE_AQUI_SUA_CHAVE_ANON_PUBLIC_DO_SUPABASE') {
  console.log('❌ ERRO: Você precisa configurar a VITE_SUPABASE_ANON_KEY no arquivo .env');
  console.log('');
  console.log('📖 Siga as instruções em SETUP_CREDENTIALS.md');
  process.exit(1);
}

console.log('✅ Variáveis de ambiente configuradas!');
console.log('');
console.log('🚀 Próximo passo: npm run dev');
