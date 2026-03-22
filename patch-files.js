// NAMA Architecture Link Patcher
// Run this script in your GitHub repo root to patch index.html and nama-os.html
// Usage: node patch-files.js

const fs = require('fs');
const path = require('path');

// ── PATCH index.html ──
const indexPath = path.join(__dirname, 'index.html');
let index = fs.readFileSync(indexPath, 'utf8');

const indexOld = `  <div class="nav-links">
    <a href="#problem">Problem</a>
    <a href="#solution">Solution</a>
    <a href="#product">Product</a>
    <a href="#market">Market</a>
    <a href="#revenue">Revenue</a>
  </div>
  <a href="nama-app.html" class="nav-cta">View Live Demo →</a>`;

const indexNew = `  <div class="nav-links">
    <a href="#problem">Problem</a>
    <a href="#solution">Solution</a>
    <a href="#product">Product</a>
    <a href="#market">Market</a>
    <a href="#revenue">Revenue</a>
    <a href="nama-architecture.html">Architecture</a>
    <a href="nama-app.html">CRM Demo</a>
    <a href="nama-os.html">OS View</a>
  </div>
  <a href="nama-architecture.html" class="nav-cta" style="background:#096B5A;margin-right:8px;">🏗️ Architecture</a>
  <a href="nama-app.html" class="nav-cta">View Live Demo →</a>`;

if (index.includes(indexOld)) {
  index = index.replace(indexOld, indexNew);
  fs.writeFileSync(indexPath, index);
  console.log('✓ index.html patched successfully');
} else {
  console.log('⚠ index.html: nav section not found — may already be patched or formatting differs');
}

// ── PATCH nama-os.html ──
const osPath = path.join(__dirname, 'nama-os.html');
let os = fs.readFileSync(osPath, 'utf8');

const osBarOld = `<a href="nama-app.html" style="font-size:11px;color:#c8a96e;text-decoration:none;padding:3px 10px;border:1px solid rgba(200,169,110,0.3);border-radius:6px;background:rgba(200,169,110,0.08);">← Back to CRM</a>`;

const osBarNew = `<a href="nama-architecture.html" style="font-size:11px;color:#5EEEE4;text-decoration:none;padding:3px 10px;border:1px solid rgba(0,196,180,0.3);border-radius:6px;background:rgba(0,196,180,0.08);">🏗️ Architecture</a>
    <a href="nama-app.html" style="font-size:11px;color:#c8a96e;text-decoration:none;padding:3px 10px;border:1px solid rgba(200,169,110,0.3);border-radius:6px;background:rgba(200,169,110,0.08);">← Back to CRM</a>`;

if (os.includes(osBarOld)) {
  os = os.replace(osBarOld, osBarNew);
  console.log('✓ nama-os.html top bar patched');
} else {
  console.log('⚠ nama-os.html: top bar link not found — check formatting');
}

// Add architecture to OS sidebar
const osSidebarOld = `    <div class="nav-item" onclick="showScreen('onboarding')">
      <span class="nav-icon">🚀</span> Onboarding Tour
      <span class="nav-badge new">NEW</span>
    </div>
  </div>`;

const osSidebarNew = `    <div class="nav-item" onclick="showScreen('onboarding')">
      <span class="nav-icon">🚀</span> Onboarding Tour
      <span class="nav-badge new">NEW</span>
    </div>
    <div class="nav-item" onclick="window.location.href='nama-architecture.html'">
      <span class="nav-icon">🏗️</span> System Architecture
    </div>
  </div>`;

if (os.includes(osSidebarOld)) {
  os = os.replace(osSidebarOld, osSidebarNew);
  console.log('✓ nama-os.html sidebar patched');
} else {
  console.log('⚠ nama-os.html: sidebar section not found — check formatting');
}

fs.writeFileSync(osPath, os);
console.log('✓ nama-os.html saved');

console.log('\n✅ All patches complete. Upload all files to GitHub.');
