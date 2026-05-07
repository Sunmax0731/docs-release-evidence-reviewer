const vscode = require('vscode');
const { analyzeItems, buildReviewModel, renderHtmlReport } = require('./src/core.cjs');

function activate(context) {
  const disposable = vscode.commands.registerCommand('docs-release-evidence-reviewer.openReview', () => {
    const sample = { items: [{"id":"docs-release-evidence-reviewer-1","title":"Docs・Release・検証証跡・素材レビュー サンプル 1","status":"ready","documentPath":"docs/requirements.md","releaseNotePath":"docs/release-checklist.md","evidencePath":"docs/manual-test.md","reviewStatus":"reviewed"}, {"id":"docs-release-evidence-reviewer-missing-required","title":"必須項目不足サンプル","status":"ready","releaseNotePath":"docs/release-checklist.md","evidencePath":"docs/manual-test.md","reviewStatus":"reviewed"}] };
    const report = analyzeItems(sample);
    const model = buildReviewModel(report);
    const panel = vscode.window.createWebviewPanel('docs-release-evidence-reviewer', 'Docs・Release・検証証跡・素材レビュー', vscode.ViewColumn.One, { enableScripts: false });
    panel.webview.html = renderHtmlReport(report);
    vscode.window.setStatusBarMessage('Docs・Release・検証証跡・素材レビュー: ' + model.statusLabel, 5000);
  });
  context.subscriptions.push(disposable);
}

function deactivate() {}

module.exports = { activate, deactivate };
