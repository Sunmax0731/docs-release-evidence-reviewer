const test = require('node:test');
const assert = require('node:assert/strict');
const { analyzeItems, renderMarkdownReport } = require('../src/core.cjs');

test('valid sample passes required field checks', () => {
  const report = analyzeItems({ items: [{
  "id": "docs-release-evidence-reviewer-1",
  "title": "Docs/Release証跡レビューアー サンプル1",
  "status": "ready",
  "documentPath": "docs/requirements.md",
  "releaseNotePath": "docs/release-checklist.md",
  "evidencePath": "docs/manual-test.md",
  "reviewStatus": "reviewed"
}] });
  assert.equal(report.summary.result, 'passed');
  assert.equal(report.summary.errors, 0);
});

test('missing required field is reported', () => {
  const report = analyzeItems({ items: [{
  "id": "docs-release-evidence-reviewer-missing-required",
  "title": "必須項目不足サンプル",
  "status": "ready",
  "releaseNotePath": "docs/release-checklist.md",
  "evidencePath": "docs/manual-test.md",
  "reviewStatus": "reviewed"
}] });
  assert.equal(report.summary.result, 'failed');
  assert.equal(report.summary.errors, 1);
  assert.match(renderMarkdownReport(report), /未設定/);
});
