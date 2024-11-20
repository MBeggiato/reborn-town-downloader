<script lang="ts">
	import { error } from '@sveltejs/kit';
	import { Button, Helper, Indicator, Input, Label, P, Popover, Span, Tooltip } from 'flowbite-svelte';
	let { data, form } = $props();
	import screenshot from "$lib/assets/screenshot.png"
	import { CircleHelp } from 'lucide-svelte';
</script>

<form method="POST" action="?/download">
	<div class="grid grid-cols-4 m-auto w-[80%] items-center mt-10">
		<div class="col-span-4 flex relative">
			<Label for="id" class="mb-2" id="label_id"><Span underline decorationClass="decoration-dotted">MayhemID/LandID:</Span></Label>			
			<Popover class="w-[420px] text-sm" triggeredBy="#label_id">
				<div class="p-3 space-y-2">
					<h3 class="font-semibold text-gray-900 dark:text-white">MayhemID/LandID</h3>
					You can find you MayhemID/LandID ingame by opening up the store, then click on the gear icon in the top right corner.
					Click on <span class="font-semibold text-gray-900 dark:text-white">"Info"</span> then on <span class="font-semibold text-gray-900 dark:text-white">"About"</span>.
					 Below the Version number you will find your MayhemID/LandID. Its a pretty long number.
				</div>
				<img src="{screenshot}" alt="screenshot" class="w-auto h-auto" />
			</Popover>
		</div>
		<div class="col-span-3 mr-4">
			<Input type="text" id="id" name="id" placeholder="123456" required class="w-[100%]" />
		</div>
		<div><Button type="submit" class="w-[100%]">Download</Button></div>
		<div>
			{#if form?.error}
				<Helper class="mt-2" color="red">
					<span class="font-medium">Oh, snapp!</span>
					{form?.error}.
				</Helper>
			{/if}
		</div>
	</div>
</form>
