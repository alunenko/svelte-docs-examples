/* TODO: use store */

export type TTree = {
    title: string | null,
    isLink: boolean | null,
    slug: string | null,
    children?: TTree[]
}
export const tree: TTree[] = [
    {
        title: 'Svelte',
        isLink: false,
        slug: '/svelte',
        children: [
            {
                title: 'Template Syntax',
                isLink: false,
                slug: '/svelte/svelte/template-syntax',
                children: [
                    {
                        title: 'Svelte components',
                        isLink: true,
                        slug: '/svelte/svelte/template-syntax/svelte-components',
                        children: [
                            {
                                title: 'script',
                                isLink: true,
                                slug: '/svelte/svelte/template-syntax/svelte-components/script',
                                children: [
                                    {
                                        title: 'export creates a component prop',
                                        isLink: true,
                                        slug: '/svelte/svelte/template-syntax/svelte-components/script/export-creates-a-component-prop'
                                    },
                                    {
                                        title: 'Assignments are "reactive"',
                                        isLink: true,
                                        slug: '/svelte/svelte/template-syntax/svelte-components/script/assignments-are-reactive'
                                    },
                                    {
                                        title: '$: marks a statement as reactive',
                                        isLink: true,
                                        slug: '/svelte/svelte/template-syntax/svelte-components/script/marks-a-statement-as-reactive'
                                    },
                                    {
                                        title: 'Prefix stores with $ to access their values',
                                        isLink: true,
                                        slug: '/svelte/svelte/template-syntax/svelte-components/script/prefix-stores-with-to-access-their-values'
                                    }
                                ]
                            },
                            {
                                title: 'script context module',
                                isLink: true,
                                slug: '/svelte/svelte/template-syntax/svelte-components/script-context-module'
                            },
                            {
                                title: 'style',
                                isLink: true,
                                slug: '/svelte/svelte/template-syntax/svelte-components/style'
                            }
                        ]
                    },
                    {
                        title: 'Basic markup',
                        isLink: false,
                        slug: '/svelte/svelte',
                        children: [
                            {
                                title: 'Tags',
                                isLink: true,
                                slug: '/svelte/svelte/template-syntax/basic-markup/tags'
                            },
                            {
                                title: 'Attributes and props',
                                isLink: true,
                                slug: '/svelte/svelte/template-syntax/basic-markup/attributes-and-props',
                            },
                            {
                                title: 'Text expressions',
                                isLink: true,
                                slug: '/svelte/svelte/template-syntax/basic-markup/text-expressions',
                            },
                            {
                                title: 'Comments',
                                isLink: true,
                                slug: '/svelte/svelte/template-syntax/basic-markup/comments',
                            }
                        ]
                    },
                    {
                        title: 'Logic blocks',
                        isLink: false,
                        slug: '/svelte/svelte/template-syntax/logic-blocks',
                        children: [
                            {
                                title: 'if',
                                isLink: true,
                                slug: '/svelte/svelte/template-syntax/logic-blocks/if'
                            },
                            {
                                title: 'each',
                                isLink: true,
                                slug: '/svelte/svelte/template-syntax/logic-blocks/each'
                            },
                            {
                                title: 'await',
                                isLink: true,
                                slug: '/svelte/svelte/template-syntax/logic-blocks/await'
                            },
                            {
                                title: 'key',
                                isLink: true,
                                slug: '/svelte/svelte/template-syntax/logic-blocks/key'
                            },
                        ]
                    },
                    {
                        title: 'Special tags',
                        isLink: false,
                        slug: '/svelte/svelte/template-syntax/special-tags/',
                        children: [
                            {
                                title: 'html',
                                isLink: true,
                                slug: '/svelte/svelte/template-syntax/special-tags/html'
                            },
                            {
                                title: 'debug',
                                isLink: true,
                                slug: '/svelte/svelte/template-syntax/special-tags/debug'
                            },
                            {
                                title: 'const',
                                isLink: true,
                                slug: '/svelte/svelte/template-syntax/special-tags/const'
                            },
                        ]
                    },
                    {
                        title: 'Element directives',
                        isLink: false,
                        slug: '/svelte/svelte/template-syntax/element-directives',
                        children: [
                            {
                                title: 'on:eventname',
                                isLink: true,
                                slug: '/svelte/svelte/template-syntax/element-directives/on-eventname'
                            },
                            {
                                title: 'bind:property',
                                isLink: true,
                                slug: '/svelte/svelte/template-syntax/element-directives/bind-property'
                            },
                            {
                                title: 'Binding <select> value',
                                isLink: true,
                                slug: '/svelte/svelte/template-syntax/element-directives/binding-select-value'
                            },
                            {
                                title: 'Media element bindings',
                                isLink: true,
                                slug: '/svelte/svelte/template-syntax/element-directives/media-element-bindings'
                            },
                            {
                                title: 'Image element bindings',
                                isLink: true,
                                slug: '/svelte/svelte/template-syntax/element-directives/image-element-bindings'
                            },
                            {
                                title: 'Block-level element bindings',
                                isLink: true,
                                slug: '/svelte/svelte/template-syntax/element-directives/block-level-element-bindings'
                            },
                            {
                                title: 'bind:group',
                                isLink: true,
                                slug: '/svelte/svelte/template-syntax/element-directives/bind-group'
                            },
                            {
                                title: 'bind:this',
                                isLink: true,
                                slug: '/svelte/svelte/template-syntax/element-directives/bind-this'
                            },
                            {
                                title: 'class:name',
                                isLink: true,
                                slug: '/svelte/svelte/template-syntax/element-directives/class-name'
                            },
                            {
                                title: 'style:property',
                                isLink: true,
                                slug: '/svelte/svelte/template-syntax/element-directives/style-property'
                            },
                            {
                                title: 'use:action',
                                isLink: true,
                                slug: '/svelte/svelte/template-syntax/element-directives/use-action'
                            },
                            {
                                title: 'transition:fn',
                                isLink: true,
                                slug: '/svelte/svelte/template-syntax/element-directives/transition-fn'
                            },
                            {
                                title: 'Transition parameters',
                                isLink: true,
                                slug: '/svelte/svelte/template-syntax/element-directives/transition-parameters'
                            },
                            {
                                title: 'Custom transition functions',
                                isLink: true,
                                slug: '/svelte/svelte/template-syntax/element-directives/custom-transition-functions'
                            },
                            {
                                title: 'Transition events',
                                isLink: true,
                                slug: '/svelte/svelte/template-syntax/element-directives/transition-events'
                            },
                            {
                                title: 'in:fn/out:fn',
                                isLink: true,
                                slug: '/svelte/svelte/template-syntax/element-directives/in-fn-out-fn'
                            },
                            {
                                title: 'animate:fn',
                                isLink: true,
                                slug: '/svelte/svelte/template-syntax/element-directives/animate-fn'
                            },
                            {
                                title: 'Animation Parameters',
                                isLink: true,
                                slug: '/svelte/svelte/template-syntax/element-directives/animation-parameters'
                            },
                            {
                                title: 'Custom animation functions',
                                isLink: true,
                                slug: '/svelte/svelte/template-syntax/element-directives/custom-animation-functions'
                            },
                        ]
                    },
                    {
                        title: 'Component directives',
                        isLink: false,
                        slug: '/svelte/svelte/template-syntax/component-directives',
                        children: [
                            {
                                title: 'on:eventname',
                                isLink: true,
                                slug: '/svelte/svelte/template-syntax/component-directives/on-eventname'
                            },
                            {
                                title: '--style-props',
                                isLink: true,
                                slug: '/svelte/svelte/template-syntax/component-directives/style-props'
                            },
                            {
                                title: 'bind:property',
                                isLink: true,
                                slug: '/svelte/svelte/template-syntax/component-directives/bind-property'
                            },
                            {
                                title: 'bind:this',
                                isLink: true,
                                slug: '/svelte/svelte/template-syntax/component-directives/bind-this'
                            },
                        ]
                    },
                    {
                        title: 'Special elements',
                        isLink: false,
                        slug: '/svelte/svelte/template-syntax/special-elements',
                        children: [
                            {
                                title: 'slot',
                                isLink: true,
                                slug: '/svelte/svelte/template-syntax/special-elements/slot',
                                children: [
                                    {
                                        title: '<slot name="name">',
                                        isLink: true,
                                        slug: '/svelte/svelte/template-syntax/special-elements/slot/name',
                                    },
                                    {
                                        title: '$$slots',
                                        isLink: true,
                                        slug: '/svelte/svelte/template-syntax/special-elements/slot/slots',
                                    },
                                    {
                                        title: '<slot key={value}>',
                                        isLink: true,
                                        slug: '/svelte/svelte/template-syntax/special-elements/slot/key',
                                    },
                                ]
                            },
                            {
                                title: '<svelte:self>',
                                isLink: true,
                                slug: '/svelte/svelte/template-syntax/special-elements/svelte-self'
                            },
                            {
                                title: '<svelte:component>',
                                isLink: true,
                                slug: '/svelte/svelte/template-syntax/special-elements/svelte-component'
                            },
                            {
                                title: '<svelte:element>',
                                isLink: true,
                                slug: '/svelte/svelte/template-syntax/special-elements/svelte-element'
                            },
                            {
                                title: '<svelte:window>',
                                isLink: true,
                                slug: '/svelte/svelte/template-syntax/special-elements/svelte-window'
                            },
                            {
                                title: '<svelte:document>',
                                isLink: true,
                                slug: '/svelte/svelte/template-syntax/special-elements/svelte-document'
                            },
                            {
                                title: '<svelte:body>',
                                isLink: true,
                                slug: '/svelte/svelte/template-syntax/special-elements/svelte-body'
                            },
                            {
                                title: '<svelte:head>',
                                isLink: true,
                                slug: '/svelte/svelte/template-syntax/special-elements/svelte-head'
                            },
                            {
                                title: '<svelte:options>',
                                isLink: true,
                                slug: '/svelte/svelte/template-syntax/special-elements/svelte-options'
                            },
                            {
                                title: '<svelte:fragment>',
                                isLink: true,
                                slug: '/svelte/svelte/template-syntax/special-elements/svelte-fragment'
                            }
                        ]
                    },
                ]
            },
            {
                title: 'Runtime',
                isLink: false,
                slug: '/svelte/svelte/runtime',
                children: [
                    {
                        title: 'Svelte',
                        isLink: false,
                        slug: '/svelte/svelte/runtime/svelte',
                        children: [
                            {
                                title: 'onMount',
                                isLink: true,
                                slug: '/svelte/svelte/runtime/svelte/onmount'
                            },
                            {
                                title: 'beforeUpdate',
                                isLink: true,
                                slug: '/svelte/svelte/runtime/svelte/beforeupdate'
                            },
                            {
                                title: 'afterUpdate',
                                isLink: true,
                                slug: '/svelte/svelte/runtime/svelte/afterupdate'
                            },
                            {
                                title: 'onDestroy',
                                isLink: true,
                                slug: '/svelte/svelte/runtime/svelte/ondestroy'
                            },
                            {
                                title: 'tick',
                                isLink: true,
                                slug: '/svelte/svelte/runtime/svelte/tick'
                            },
                            {
                                title: 'setContext',
                                isLink: true,
                                slug: '/svelte/svelte/runtime/svelte/setcontext'
                            },
                            {
                                title: 'getContext',
                                isLink: true,
                                slug: '/svelte/svelte/runtime/svelte/getcontext'
                            },
                            {
                                title: 'hasContext',
                                isLink: true,
                                slug: '/svelte/svelte/runtime/svelte/hascontext'
                            },
                            {
                                title: 'getAllContexts',
                                isLink: true,
                                slug: '/svelte/svelte/runtime/svelte/getallcontexts'
                            },
                            {
                                title: 'createEventDispatcher',
                                isLink: true,
                                slug: '/svelte/svelte/runtime/svelte/createeventdispatcher'
                            },
                            {
                                title: 'types',
                                isLink: true,
                                slug: '/svelte/svelte/runtime/svelte/types'
                            }
                        ]
                    },
                    {
                        title: 'svelte/store',
                        isLink: true,
                        slug: '/svelte/svelte/runtime/svelte-store/',
                        children: [
                            {
                                title: 'writable',
                                isLink: true,
                                slug: '/svelte/svelte/runtime/svelte-store/writable'
                            },
                            {
                                title: 'readable',
                                isLink: true,
                                slug: '/svelte/runtime/svelte-store/readable'
                            },
                            {
                                title: 'derived',
                                isLink: true,
                                slug: '/svelte/runtime/svelte-store/derived'
                            },
                            {
                                title: 'readonly',
                                isLink: true,
                                slug: '/svelte/runtime/svelte-store/readonly'
                            },
                            {
                                title: 'get',
                                isLink: true,
                                slug: '/svelte/runtime/svelte-store/get'
                            },
                            {
                                title: 'types',
                                isLink: true,
                                slug: '/svelte/runtime/svelte-store/types'
                            },
                        ]
                    },
                    {
                        title: 'svelte/motion',
                        isLink: true,
                        slug: '/svelte/runtime/svelte-motion/',
                        children: [
                            {
                                title: 'tweened',
                                isLink: true,
                                slug: '/svelte/runtime/svelte-motion/tweened'
                            },
                            {
                                title: 'spring',
                                isLink: true,
                                slug: '/svelte/runtime/svelte-motion/spring'
                            }
                        ]
                    },
                    {
                        title: 'svelte/transition',
                        isLink: false,
                        slug: '/svelte/runtime/svelte-transition',
                        children: [
                            {
                                title: 'fade',
                                isLink: true,
                                slug: '/svelte/runtime/svelte-transition/fade',
                            },
                            {
                                title: 'blur',
                                isLink: true,
                                slug: '/svelte/runtime/svelte-transition/blur',
                            },
                            {
                                title: 'fly',
                                isLink: true,
                                slug: '/svelte/runtime/svelte-transition/fly',
                            },
                            {
                                title: 'slide',
                                isLink: true,
                                slug: '/svelte/runtime/svelte-transition/slide',
                            },
                            {
                                title: 'scale',
                                isLink: true,
                                slug: '/svelte/runtime/svelte-transition/scale',
                            },
                            {
                                title: 'draw',
                                isLink: true,
                                slug: '/svelte/runtime/svelte-transition/draw',
                            },
                            {
                                title: 'crossfade',
                                isLink: true,
                                slug: '/svelte/runtime/svelte-transition/crossfade',
                            },
                            {
                                title: 'types',
                                isLink: false,
                                slug: '/svelte/runtime/svelte-transition/types',
                            },
                        ]
                    }
                ]
            },
            {
                title: 'Compiler and API',
                isLink: false,
                slug: '/svelte',
                children: [
                    {
                        title: 'svelte-compiler',
                        isLink: false,
                        slug: '/svelte'
                    }
                ]
            },
            {
                title: 'Misc',
                isLink: false,
                slug: '/svelte',
                children: [
                    {
                        title: 'Frequently asked questions',
                        isLink: false,
                        slug: '/svelte'
                    }
                ]
            },
            {
                title: 'Legacy',
                isLink: false,
                slug: '/svelte',
                children: [
                    {
                        title: 'svelte-register',
                        isLink: false,
                        slug: '/svelte'
                    }
                ]
            }
        ],
    }
];
