const test = require('node:test');
const assert = require('node:assert/strict');
const { analyzeItems, renderMarkdownReport } = require('../src/core.cjs');

test('valid sample passes required field checks', () => {
  const report = analyzeItems({ items: [{
  "id": "docs-review-1",
  "title": "Docs・Release・検証証跡・素材レビュー サンプル 1",
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
  "id": "docs-review-missing-required",
  "title": "必須項目不足サンプル",
  "releaseNotePath": "docs/release-checklist.md",
  "evidencePath": "docs/manual-test.md",
  "reviewStatus": "reviewed"
}] });
  assert.equal(report.summary.result, 'failed');
  assert.equal(report.summary.errors, 1);
  assert.match(renderMarkdownReport(report), /未設定/);
});
