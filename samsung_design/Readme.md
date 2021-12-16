### [Design Samsung] 클론 코딩

- 클래스 네이밍은 BEM 방식을 따릅니다.

- gulp watch / build / default 작업을 지정했습니다. (browserSync reload 개선 중)

- 작업 환경 설정

  ````bash
  $ npm install
  $ sass --watch scss:css // gulp watch가 실시간으로 적용되지 않아 사용
  ````

- IDE 설정

  ````json
  {
    "folders": [
      {
        "path": "D:\\git\\github\\HL0409.github.io\\samsung_design"
      }
    ],
    "settings": {
      "[scss]": {
        "editor.formatOnSave": true,
        "editor.defaultFormatter": "HookyQR.beautify"
      },
      "[html]": {
        // "editor.formatOnSave": true,
        "editor.defaultFormatter": "vscode.html-language-features",
      },
      "[javascript]": {
        "editor.formatOnSave": true,
        "editor.defaultFormatter": "esbenp.prettier-vscode"
      },
      "editor.tabSize": 4,
      "prettier.tabWidth": 4,
      "prettier.useEditorConfig": false,
      "prettier.singleQuote": true,
      "prettier.trailingComma": "none",
      "prettier.jsxSingleQuote": true,
      "prettier.arrowParens": "avoid",
      "prettier.bracketSpacing": true,
      "beautify.config": {
        "space_around_combinator": true,
        "indent_size": 4
      },
        "html.format.wrapLineLength": 0,
      "html.format.wrapAttributes": "auto"
      }
  }
  ````

