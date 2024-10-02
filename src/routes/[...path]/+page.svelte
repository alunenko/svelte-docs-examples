<script lang="ts">
	import './styles.css';
	import { marked } from 'marked';

	export let data;
</script>

<div class="content">{@html marked(data.props.markdownContent)}</div>
