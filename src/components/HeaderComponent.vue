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
			<div class="main-logo">
				<img src="/logoTrasp.png" alt="Yuri-Montesi">
			</div>
		</div>
		<nav class="me-5">
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

	.main-logo{
		width: 120px;
		height: 120px;
		background-color: black;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	nav{
		display: flex;
		align-items: center;
	}

	ul{
		display: flex;
		
		li{
			margin: 0px 20px;
			padding: 8px 16px;
			cursor:pointer;

			&:hover{
				color: purple;
				border-bottom: 3px solid purple;
				transition: 0.2s ease-in-out;
			}
		}
	}
}

</style>