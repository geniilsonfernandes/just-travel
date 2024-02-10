// eslint-disable-next-line no-undef
module.exports = function (plop) {
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  plop.setHelper('capitalize', function (text) {
    return capitalizeFirstLetter(text)
  })

  plop.setGenerator('component', {
    description: 'Gerar um componente React',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Qual é o nome do componente?',
      },
      {
        type: 'input',
        name: 'directory',
        message:
          'Em qual diretório você deseja salvar o componente? (ex: components/ui)',
        default: 'components',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/components/{{capitalize name}}/index.tsx',
        templateFile: 'plop-templates/component.hbs',
      },
      {
        type: 'add',
        path: 'src/components/{{capitalize name}}/{{capitalize name}}.test.tsx',
        templateFile: 'plop-templates/test.hbs',
      },
      {
        type: 'add',
        path: 'src/components/{{capitalize name}}/{{capitalize name}}.stories.tsx',
        templateFile: 'plop-templates/stories.hbs',
      },
    ],
  })
}
