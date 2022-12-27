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