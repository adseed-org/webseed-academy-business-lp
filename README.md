# 環境構築
Sassを使用しているため、コンパイルする必要があります。  
方法としては、VScodeの拡張機能である「Live Sass Compiler」を使います。  
拡張機能を入れた後、VSCodeの設定ファイル（settings.json）に下記を追加してください。  
```settings.json
"liveSassCompile.settings.autoprefix": [
        "> 1%",
        "last 2 versions"
    ],
```

## 教材サイト環境構築
1. web_seed_academy_docker.zip 解凍
2. cd web_seed_academy_docker
    - 上記の中に移動して、GitlabからWSAのソースをcloneする
3. シンボリックリンクを貼るln -snf web backend
4. cd web
    - develop ブランチに切り替える
5. cd ../
    - . 階層を一個上に戻って、make init 実行
6. make app
7. php artisan migrate:fresh --seed
8. http://localhost
9. メール:test001@example.com パスワード：test123+でログインできればOK
