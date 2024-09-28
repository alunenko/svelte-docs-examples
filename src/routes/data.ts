/* TODO: use store */

export type TTree = {
    title: string | null,
    slug: string | null,
    children?: TTree[]
}
export const tree: TTree[] = [
    {
        title: 'Template Syntax',
        slug: '',
        children: [
            {
                title: 'Svelte components',
                slug: '',
                children: [
                    {
                        title: 'script',
                        slug: '',
                        children: [
                            {
                                title: 'export creates a component prop',
                                slug: ''
                            },
                            {
                                title: 'Assignments are "reactive"',
                                slug: ''
                            },
                            {
                                title: '$: marks a statement as reactive',
                                slug: ''
                            },
                            {
                                title: 'Prefix stores with $ to access their values',
                                slug: ''
                            }
                        ]
                    },
                    {
                        title: 'script context module',
                        slug: ''
                    },
                    {
                        title: 'style',
                        slug: ''
                    }
                ]
            }
        ]
    },
    {
        title: 'Test',
        slug: ''
    }
]