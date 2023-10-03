<script>
import { RouterLink } from 'vue-router';

export default {
	name: 'HeaderComponent',
	data() {
		return {
		
		}
	},
}

</script>

<template>
	<header>
		<div class="header-logo ms-5">
			<h1 class="text-center leading-10 ">
				Logo
			</h1>
		</div>
		<nav>
			<ul>
				<li>
					<RouterLink :to="{ name:'home'}">
						HomePage
					</RouterLink>
				</li>
				<li>
					<RouterLink :to="{ name:'projects'}">
						Projects
					</RouterLink>
				</li>
				<li>
					<RouterLink :to="{ name:'about-me'}">
						About Me
					</RouterLink>
				</li>
			</ul>
		</nav>
	</header>
</template>

<style lang="scss" scoped>
@use '../assets/scss/main.scss';

header{
	background-color: bisque;
	padding: 20px;
	display: flex;

	ul{
		display: flex;
		
		li{
			padding: 8px 16px;
			border-radius: 12px;
			cursor:pointer;

			&:hover{
				color: white;
				background-color:purple;
				transition: 0.2s ease-in-out;
			}
		}
	}
}

</style>