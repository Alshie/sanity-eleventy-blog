export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '603c007cbf1ef79fd5ca8b47',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-syj7xqdf',
                  apiId: 'a2bf6a06-a3f1-4ab0-9ed6-80b4917c4e99'
                },
                {
                  buildHookId: '603c007d3393c1efaa882c2b',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-4ihcpyko',
                  apiId: '1556ca33-7e3b-4035-b30a-8fae71fd34d3'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Alshie/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-4ihcpyko.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
