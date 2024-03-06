const setup = (plop) => {
  /** 新規コンポーネントを作成するパターン */
  plop.setGenerator("Component", {
    description: "新規コンポーネントの作成",
    prompts: [
      {
        type: "input",
        name: "path",
        default: "/",
        message: "パスを入力してください(例: /sample/path)",
      },
      {
        type: "input",
        name: "name",
        message: "コンポーネント名を入力してください(例: SampleComponent)",
      },
    ],
    actions: [
      {
        type: "add",
        path: "components/plopSample{{path}}/{{pascalCase name}}/{{pascalCase name}}.tsx",
        templateFile: "plopTemplates/Component/Component.tsx.hbs",
      },
      {
        type: "add",
        path: "components/plopSample{{path}}/{{pascalCase name}}/index.ts",
        templateFile: "plopTemplates/Component/index.ts.hbs",
      },
    ],
  });

  /** 新規Hooksを作成するパターン */
  plop.setGenerator("Hooks", {
    description: "カスタムHooksの作成",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Hooks名を入力してください(例: clickButton)",
      },
    ],
    actions: [
      {
        type: "add",
        path: "components/plopSample/Hooks/use{{pascalCase name}}/use{{pascalCase name}}.tsx",
        templateFile: "plopTemplates/Hooks/Hooks.ts.hbs",
      },
      {
        type: "add",
        path: "components/plopSample/Hooks/use{{pascalCase name}}/index.ts",
        templateFile: "plopTemplates/Hooks/index.ts.hbs",
      },
      /** 既存のファイルに行を挿入する */
      {
        type: "append",
        path: "components/plopSample/Hooks/index.ts",
        template:
          "export { use{{pascalCase name}} } from './use{{pascalCase name}}/use{{pascalCase name}}.tsx'",
      },
    ],
  });
};

export default setup;
