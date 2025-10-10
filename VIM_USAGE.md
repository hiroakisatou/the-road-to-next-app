# VSCodeVim 使い方ガイド

## 基本操作

### モード切り替え
- **Normal Mode**: `Esc` または `jj` (Insert Modeから)
- **Insert Mode**: `i`, `a`, `o`, `O`
- **Visual Mode**: `v` (文字選択), `V` (行選択), `Ctrl+v` (矩形選択)

### 移動
- `h`, `j`, `k`, `l`: 左、下、上、右
- `w`, `b`: 単語単位で前進、後退
- `0`, `$`: 行の先頭、末尾
- `gg`, `G`: ファイルの先頭、末尾

### 編集
- `i`, `a`: カーソル位置の前、後ろに挿入
- `o`, `O`: 下、上に新しい行を挿入
- `x`: 1文字削除
- `dd`: 1行削除
- `yy`: 1行コピー
- `p`, `P`: 貼り付け（下、上）

## 設定されたキーバインド

### リーダーキー (`<space>`)
- `<space>w`: ファイル保存
- `<space>q`: ファイルを閉じる
- `<space>f`: クイックオープン

### 便利な機能
- `jj`: Insert ModeからNormal Modeに戻る
- `Ctrl+n`: 検索ハイライトを消す

## EasyMotion (有効化済み)

### 基本操作
- `<leader><leader>w`: 単語の先頭にジャンプ
- `<leader><leader>b`: 単語の先頭に後退ジャンプ
- `<leader><leader>j`: 行の先頭にジャンプ
- `<leader><leader>k`: 行の先頭に後退ジャンプ

### 文字検索
- `<leader><leader>f<char>`: 指定文字に前進ジャンプ
- `<leader><leader>F<char>`: 指定文字に後退ジャンプ

## Surround (有効化済み)

### 基本操作
- `ys<motion><char>`: テキストを指定文字で囲む
- `ds<char>`: 指定文字の囲みを削除
- `cs<old><new>`: 囲み文字を変更

### 例
- `ysiw"`: 単語をダブルクォートで囲む
- `ds"`: ダブルクォートを削除
- `cs"'`: ダブルクォートをシングルクォートに変更

## ステータスバー

モードに応じてステータスバーの色が変わります：
- **Normal**: 青緑色
- **Insert**: 赤色
- **Visual**: 紫色

## パフォーマンス

- パフォーマンス最適化設定が有効化されています
- 重い操作でも快適に動作するはずです

## トラブルシューティング

### Vimモードを一時的に無効化
- `Cmd+Shift+P` → "Toggle Vim Mode"
- または `Cmd+Shift+V` (設定済み)

### キーが効かない場合
- `Cmd+Shift+P` → "Developer: Reload Window"

### 設定をリセットしたい場合
- `.vscode/settings.json` を削除または編集

