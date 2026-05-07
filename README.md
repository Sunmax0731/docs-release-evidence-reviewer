# docs-release-evidence-reviewer

Docs/Release証跡レビューアー は、VS Code内でドキュメント、リリースノート、検証証跡の不足を確認する。

## 対象ユーザー

- VS Codeで作業する開発者、テクニカルライター、レビュー担当

## 主な価値

- 必須項目の不足を自動検出します。
- 手動テスト、導入手順、リリース前確認を同じドキュメント体系で確認できます。
- 競合プロダクトと公式標準を基準に、QCDSを実装とドキュメントの両方で評価します。

## 使い方

```powershell
cd D:\AI\VSCodeExtension\docs-release-evidence-reviewer
npm test
code --extensionDevelopmentPath="D:\AI\VSCodeExtension\docs-release-evidence-reviewer"
```

## ドキュメント

- docs/requirements.md
- docs/specification.md
- docs/design.md
- docs/implementation-plan.md
- docs/test-plan.md
- docs/manual-test.md
- docs/installation-guide.md
- docs/user-guide.md
- docs/competitive-benchmark.md
- docs/evaluation-criteria.md
- docs/release-checklist.md
- docs/post-mvp-roadmap.md
- docs/qcds-evaluation.md
