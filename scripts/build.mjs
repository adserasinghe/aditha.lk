import { execSync } from 'node:child_process';

const isInsideOpenNext = process.env.NEXT_PRIVATE_STANDALONE === 'true';

const isCloudflare = Boolean(
  process.env.CF_PAGES ||
  process.env.CLOUDFLARE ||
  process.env.WORKERS_CI ||
  (process.env.HOME && process.env.HOME.includes('buildhome')) ||
  process.env.BUILD_TARGET === 'cloudflare'
);

if (isInsideOpenNext) {
  // OpenNext invoked next build internally
  execSync('next build', {
    stdio: 'inherit',
    env: {
      ...process.env,
      NODE_ENV: 'production',
    },
  });
} else if (isCloudflare) {
  // Running in Cloudflare CI/CD environment
  console.log('[Build] Detected Cloudflare deployment environment. Compiling OpenNext worker bundle...');
  execSync('npx @opennextjs/cloudflare build', {
    stdio: 'inherit',
    env: {
      ...process.env,
      NODE_ENV: 'production',
    },
  });
  console.log('[Build] Successfully generated .open-next/worker.js for Cloudflare.');
} else {
  // Standard Next.js / Vercel build
  execSync('next build', {
    stdio: 'inherit',
    env: {
      ...process.env,
      NODE_ENV: 'production',
    },
  });
}
