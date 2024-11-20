<script>
	import { LinkHandler } from '$lib/LinkHandler';
	import {
		Navbar,
		NavBrand,
		NavLi,
		NavUl,
		NavHamburger,
		Button,
		Tooltip ,
		DarkMode,
		Avatar
	} from 'flowbite-svelte';
	import { Search } from 'lucide-svelte';
	import reborn from '$lib/assets/reborn.webp';
</script>

<Navbar class="dark:bg-[#72508D] bg-[#72508D]">
	<NavBrand href={LinkHandler('/')} class="gap-4">
		<Avatar alt="logo" src={reborn} class="border-none" />
		<span class="self-center whitespace-nowrap text-xl font-semibold text-black dark:text-white"
			>Reborn: Town downloader</span
		>
	</NavBrand>
	<div class="flex md:order-2">



		<DarkMode class="ml-2" />
		<Tooltip>Toggle darkmode</Tooltip>
	</div>
	<NavUl>
		<!--<NavLi href={LinkHandler('/')}>Home</NavLi>
		<NavLi href="/about">About</NavLi>
		<NavLi href="/docs/components/navbar">Navbar</NavLi>
    -->
	</NavUl>
</Navbar>
