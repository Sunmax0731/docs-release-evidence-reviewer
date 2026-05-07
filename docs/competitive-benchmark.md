# 競合・公式基準ベンチマーク

## 比較方針

Docs/Release証跡レビューアー は、競合の全機能を再実装するのではなく、コード差分ではなく、公開判断に必要なドキュメント証跡の不足に焦点を当てる。

| 参照先 | URL | 競合・公式標準の強み | 採用する評価基準 | 差別化 |
| --- | --- | --- | --- | --- |
| VS Code Extension API | https://code.visualstudio.com/api | コマンド、Webview、ワークスペース情報を拡張機能として統合できる。 | エディタ内で作業文脈と結果を確認できること。 | コード差分ではなく、公開判断に必要なドキュメント証跡の不足に焦点を当てる。 |
| GitHub Releases | https://docs.github.com/github/administering-a-repository/managing-releases-in-a-repository | リリースノート、タグ、成果物をひとつの公開単位にまとめられる。 | リリース、差分、検証ログ、ブランチ状態を追跡できること。 | コード差分ではなく、公開判断に必要なドキュメント証跡の不足に焦点を当てる。 |
| GitKraken | https://www.gitkraken.com/features/pr-and-code-review | PR、ブランチ、コードレビューをGUIで可視化できる。 | リリース、差分、検証ログ、ブランチ状態を追跡できること。 | コード差分ではなく、公開判断に必要なドキュメント証跡の不足に焦点を当てる。 |

## 改善へ反映した点

- QCDS評価に競合比較と公式標準の確認を追加した。
- 実装だけでなく、README、導入手順、ユーザーガイド、手動テスト、リリース前資料を評価対象にした。
- 文字化けをQCDSのQuality/Satisfactionリスクとして検出する。
