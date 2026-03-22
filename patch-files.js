// NAMA Patch Script — run with: node patch-files.js
// Fixes: (1) nama-os.html gets NAMA AI link, (2) index.html gets nav links
const fs = require('fs');

// ── PATCH nama-os.html: Add NAMA AI to sidebar ──
const osPath = './nama-os.html';
let os = fs.readFileSync(osPath, 'utf8');

// Add NAMA AI link after the last sidebar section item (before sidebar-footer)
const osTarget = `  <div class="sidebar-footer">`;
const osInsert = `  <div style="padding:8px 12px 4px;">
    <div style="font-size:9px;font-weight:700;color:rgba(255,255,255,0.25);text-transform:uppercase;letter-spacing:1.5px;padding:4px 8px 8px;">AI Assistant</div>
    <div class="nav-item" onclick="window.location.href='nama-ai-crm.html'" style="background:rgba(0,196,204,0.12);border:1px solid rgba(0,196,204,0.25);color:#5EEEE4;margin-bottom:4px;">
      <span class="nav-icon">✦</span> NAMA AI
      <span style="margin-left:auto;font-size:9px;font-weight:700;padding:2px 7px;border-radius:100px;background:rgba(0,196,204,0.2);color:#5EEEE4;border:1px solid rgba(0,196,204,0.3);">NEW</span>
    </div>
  </div>
  <div class="sidebar-footer">`;

if (os.includes(osTarget)) {
  os = os.replace(osTarget, osInsert);
  console.log('✓ nama-os.html: NAMA AI link added to sidebar');
} else {
  console.log('⚠ nama-os.html: sidebar-footer not found — trying alternate search...');
  // Try alternate
  const alt = `class="sidebar-footer"`;
  if (os.includes(alt)) {
    console.log('  Found via class search — please add manually near sidebar bottom');
  }
}

// Also add Architecture link to top bar of nama-os.html
const osBarOld = `<a href="nama-app.html" style="font-size:11px;color:#c8a96e;text-decoration:none;padding:3px 10px;border:1px solid rgba(200,169,110,0.3);border-radius:6px;background:rgba(200,169,110,0.08);">← Back to CRM</a>`;
const osBarNew = `<a href="nama-ai-crm.html" style="font-size:11px;color:#5EEEE4;text-decoration:none;padding:3px 10px;border:1px solid rgba(0,196,204,0.3);border-radius:6px;background:rgba(0,196,204,0.08);">✦ NAMA AI</a>
    <a href="nama-architecture.html" style="font-size:11px;color:rgba(255,255,255,0.5);text-decoration:none;padding:3px 10px;border:1px solid rgba(255,255,255,0.15);border-radius:6px;">🏗 Architecture</a>
    <a href="nama-app.html" style="font-size:11px;color:#c8a96e;text-decoration:none;padding:3px 10px;border:1px solid rgba(200,169,110,0.3);border-radius:6px;background:rgba(200,169,110,0.08);">⚙ Settings</a>`;

if (os.includes(osBarOld)) {
  os = os.replace(osBarOld, osBarNew);
  console.log('✓ nama-os.html: top bar links updated');
} else {
  console.log('⚠ nama-os.html: top bar link not found (may already be patched)');
}

fs.writeFileSync(osPath, os);
console.log('✓ nama-os.html saved\n');

// ── PATCH index.html: Add nav links ──
const indexPath = './index.html';
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
  </div>
  <a href="nama-ai-crm.html" class="nav-cta" style="background:#096B5A;margin-right:8px;">✦ NAMA AI</a>
  <a href="nama-app.html" class="nav-cta">View Demo →</a>`;

if (index.includes(indexOld)) {
  index = index.replace(indexOld, indexNew);
  fs.writeFileSync(indexPath, index);
  console.log('✓ index.html nav updated');
} else {
  console.log('⚠ index.html: nav section not found — check spacing/formatting');
}

console.log('\n✅ Done. Upload all files to GitHub.');
