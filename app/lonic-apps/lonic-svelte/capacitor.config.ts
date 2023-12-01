
import { CapacitorConfig } from '@capacitor/cli';

const appId = 'lonic-svelte.ionic.io';
const appName = 'lonic-svelte';
const server = process.argv.includes('-hmr') ? {
  'url': 'http://10.161.65.218:5173',   // always have http:// in url
  'cleartext': true
} : {};
const webDir = 'build';

const config: CapacitorConfig = {
  appId,
  appName,
  webDir,
  server
};

if (process.argv.includes('-hmr')) console.log('WARNING: running capacitor with livereload config', config);

export default config;
  