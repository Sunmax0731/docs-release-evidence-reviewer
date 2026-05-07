const test = require('node:test');
const assert = require('node:assert/strict');
const { analyzeItems, buildReviewModel, renderHtmlReport } = require('../src/core.cjs');

test('review model exposes status cards and next actions', () => {
  const report = analyzeItems({ items: [{
  "id": "docs-release-evidence-reviewer-missing-required",
  "title": "必須項目不足サンプル",
  "status": "ready",
  "releaseNotePath": "docs/release-checklist.md",
  "evidencePath": "docs/manual-test.md",
  "reviewStatus": "reviewed"
}] });
  const model = buildReviewModel(report);
  assert.equal(model.statusLabel, '修正が必要');
  assert.ok(model.completionRate < 100);
  assert.ok(model.cards.length >= 4);
  assert.match(renderHtmlReport(report), /Next Actions/);
});
