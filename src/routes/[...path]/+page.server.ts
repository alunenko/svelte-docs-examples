import type { Load } from '@sveltejs/kit';
export const load: Load = async (event) => {
	const path = event.params.path;
	const filePath = `/data/${path}/data.md`;
	const res = await event.fetch(filePath);
	console.log('filePath', filePath);
	console.log('res', res);
	if (res.ok && res.headers.get("content-type")?.includes("text/markdown")) {
		const markdownContent = await res.text();
		return { props: { markdownContent } };
	} else {
		console.error('Failed to load Markdown file');
		return { props: { markdownContent: 'No data' } };
	}
}
