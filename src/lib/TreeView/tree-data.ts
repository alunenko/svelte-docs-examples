/* TODO: use store */

export type TTree = {
    title: string | null,
    isLink: boolean | null,
    slug: string | null,
    children?: TTree[]
}
export const tree: TTree[] = [
    {
        title: 'Template Syntax',
        isLink: false,
        slug: '/template-syntax',
        children: [
            {
                title: 'Svelte components',
                isLink: true,
                slug: '/template-syntax/svelte-components',
                children: [
                    {
                        title: 'script',
                        isLink: true,
                        slug: '/template-syntax/svelte-components/script',
                        children: [
                            {
                                title: 'export creates a component prop',
                                isLink: true,
                                slug: '/template-syntax/svelte-components/script/export-creates-a-component-prop'
                            },
                            {
                                title: 'Assignments are "reactive"',
                                isLink: true,
                                slug: '/template-syntax/svelte-components/script/assignments-are-reactive'
                            },
                            {
                                title: '$: marks a statement as reactive',
                                isLink: true,
                                slug: '/template-syntax/svelte-components/script/marks-a-statement-as-reactive'
                            },
                            {
                                title: 'Prefix stores with $ to access their values',
                                isLink: true,
                                slug: '/template-syntax/svelte-components/script/prefix-stores-with-to-access-their-values'
                            }
                        ]
                    },
                    {
                        title: 'script context module',
                        isLink: false,
                        slug: ''
                    },
                    {
                        title: 'style',
                        isLink: false,
                        slug: ''
                    }
                ]
            },
            {
                title: 'Basic markup',
                isLink: false,
                slug: ''
            }
        ]
    },
    {
        title: 'Runtime',
        isLink: false,
        slug: '',
        children: [
            {
                title: 'Svelte',
                isLink: false,
                slug: ''
            }
        ]
    },
    {
        title: 'Compiler and API',
        isLink: false,
        slug: '',
        children: [
            {
                title: 'svelte-compiler',
                isLink: false,
                slug: ''
            }
        ]
    },
    {
        title: 'Misc',
        isLink: false,
        slug: '',
        children: [
            {
                title: 'Frequently asked questions',
                isLink: false,
                slug: ''
            }
        ]
    },
    {
        title: 'Legacy',
        isLink: false,
        slug: '',
        children: [
            {
                title: 'svelte-register',
                isLink: false,
                slug: ''
            }
        ]
    }
]