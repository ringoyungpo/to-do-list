module.exports = {
  title: 'To Do List',
  description: 'To Do List Build in Spring Cloud.',
  base: '/to-do-list/',
  markdown: {
    extendMarkdown: md => {
      md.use(require('markdown-it-plantuml'))
    }
  }
}