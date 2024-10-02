# [{@html ...}](https://svelte.dev/docs/special-tags#html)
```sveltehtml
{@html expression}
```
In a text expression, characters like `<` and `>` are escaped; however, with HTML expressions, they're not.

The expression should be valid standalone HTML — `{@html "<div>"}content{@html "</div>"}` will _not_ work, because `</div>` is not valid HTML. It also will _not_ compile Svelte code.

⚠️ Svelte does not sanitize expressions before injecting HTML. If the data comes from an untrusted source, you must sanitize it, or you are exposing your users to an XSS vulnerability

```sveltehtml
<div class="blog-post">
	<h1>{post.title}</h1>
	{@html post.content}
</div>
```