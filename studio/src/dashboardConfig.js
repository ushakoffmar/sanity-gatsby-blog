export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5f747fbd74f51fb1e28fea1c',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-va2pu96u',
                  apiId: 'f66e8999-13c6-4ba9-902c-4033f862a629'
                },
                {
                  buildHookId: '5f747fbeb142efb2d749cf4b',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-8jx5o8xo',
                  apiId: '93aac9d1-8d0e-4bea-bccd-c228369f02ae'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ushakoffmar/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-8jx5o8xo.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
