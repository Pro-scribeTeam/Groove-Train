import { execSync } from 'child_process';
import { mkdirSync, existsSync } from 'fs';

// Create dist-pages directory
const outDir = 'dist-pages';
if (!existsSync(outDir)) {
  mkdirSync(outDir, { recursive: true });
}

try {
  // Check if server is running
  execSync('curl -s http://localhost:3000 > /dev/null', { stdio: 'ignore' });
  
  // Fetch the homepage HTML
  execSync(`curl -s http://localhost:3000 > ${outDir}/index.html`);
  
  // Copy static assets
  execSync(`cp -r public/static ${outDir}/`);
  
  console.log('✅ Static site generated in dist-pages/');
  console.log('📁 Files:');
  console.log('   - index.html');
  console.log('   - static/* (all assets)');
} catch (error) {
  console.error('❌ Error: Make sure the development server is running on http://localhost:3000');
  console.error('   Run: npm run dev:sandbox');
  process.exit(1);
}

