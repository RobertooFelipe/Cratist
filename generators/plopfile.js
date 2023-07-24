module.exports = (plop) => {
  plop.setGenerator('component', {
    description: 'Create a component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your component name?'
      }
    ],
    actions: [
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/index.tsx',
        templateFile: 'templates/components/Component.tsx.hbs'
      },
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/use{{pascalCase name}}.ts',
        templateFile: 'templates/components/useComponent.ts.hbs'
      },
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/stories.tsx',
        templateFile: 'templates/components/stories.tsx.hbs'
      },
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/spec.tsx',
        templateFile: 'templates/components/spec.tsx.hbs'
      },
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/types.ts',
        templateFile: 'templates/components/types.ts.hbs'
      }
    ]
  }),
    plop.setGenerator('page', {
      description: 'Create a page',
      prompts: [
        {
          type: 'input',
          name: 'name',
          message: 'What is your page name?'
        }
      ],
      actions: [
        {
          type: 'add',
          path: '../src/app/{{pascalCase name}}/page.tsx',
          templateFile: 'templates/pages/Page.tsx.hbs'
        },
        {
          type: 'add',
          path: '../src/app/{{pascalCase name}}/use{{pascalCase name}}.ts',
          templateFile: 'templates/pages/usePage.ts.hbs'
        }
      ]
    })
}
