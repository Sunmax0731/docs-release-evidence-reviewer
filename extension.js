const vscode = require('vscode');
const { analyzeItems, buildReviewModel, renderHtmlReport } = require('./src/core.cjs');

function activate(context) {
  const disposable = vscode.commands.registerCommand('docs-release-evidence-reviewer.openReview', () => {
    const report = analyzeItems({
  "items": [
    {
      "id": "docs-release-evidence-reviewer-1",
      "title": "Docs/Release証跡レビューアー サンプル1",
      "status": "ready",
      "documentPath": "docs/requirements.md",
      "releaseNotePath": "docs/release-checklist.md",
      "evidencePath": "docs/manual-test.md",
      "reviewStatus": "reviewed"
    },
    {
      "id": "docs-release-evidence-reviewer-missing-required",
      "title": "必須項目不足サンプル",
      "status": "ready",
      "releaseNotePath": "docs/release-checklist.md",
      "evidencePath": "docs/manual-test.md",
      "reviewStatus": "reviewed"
    }
  ]
});
    const model = buildReviewModel(report);
    const panel = vscode.window.createWebviewPanel('docs-release-evidence-reviewer', 'Docs/Release証跡レビューアー', vscode.ViewColumn.One, { enableScripts: false });
    panel.webview.html = renderHtmlReport(report);
    vscode.window.setStatusBarMessage('Docs/Release証跡レビューアー: ' + model.statusLabel, 5000);
  });
  context.subscriptions.push(disposable);
}

function deactivate() {}

module.exports = { activate, deactivate };
