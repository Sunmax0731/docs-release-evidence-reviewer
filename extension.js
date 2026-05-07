const vscode = require('vscode');
const { analyzeItems, renderMarkdownReport } = require('./src/core.cjs');

function activate(context) {
  const disposable = vscode.commands.registerCommand('docs-release-evidence-reviewer.openReview', () => {
    const sample = { items: [{"id":"docs-review-1","title":"Docs・Release・検証証跡・素材レビュー サンプル 1","documentPath":"docs/requirements.md","releaseNotePath":"docs/release-checklist.md","evidencePath":"docs/manual-test.md","reviewStatus":"reviewed"}, {"id":"docs-review-missing-required","title":"必須項目不足サンプル","releaseNotePath":"docs/release-checklist.md","evidencePath":"docs/manual-test.md","reviewStatus":"reviewed"}] };
    const report = analyzeItems(sample);
    const panel = vscode.window.createWebviewPanel('docs-review', 'Docs・Release・検証証跡・素材レビュー', vscode.ViewColumn.One, {});
    panel.webview.html = `<!doctype html><html lang="ja"><meta charset="utf-8"><body><pre>${escapeHtml(renderMarkdownReport(report))}</pre></body></html>`;
  });
  context.subscriptions.push(disposable);
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' }[char]));
}

function deactivate() {}

module.exports = { activate, deactivate };
