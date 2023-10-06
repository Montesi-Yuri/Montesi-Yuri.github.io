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
		<!-- <div class="header-logo">
			<div class="main-logo">
				<img src="/logoTrasp.png" alt="Yuri-Montesi">
			</div>
		</div> -->
		<nav>
			<div>
				<RouterLink :to="{ name:'home'}">
					<span>HomePage</span>
				</RouterLink>
			</div>
			<div>
				<RouterLink :to="{ name:'projects'}">
					<span>Projects</span>
				</RouterLink>
			</div>
			<div>
				<RouterLink :to="{ name:'about-me'}">
					<span>About Me</span>
				</RouterLink>
			</div>
		</nav>
	</header>
	<div class="banner">
		<img src="/BannerLinkedinRibassato.png" alt="Banner">
	</div>
	
</template>

<style lang="scss" scoped>
@use '../assets/scss/main.scss';

header{
	position: fixed;
	bottom: 0;
	left: 50%;
	transform: translate(-50%, 0%);
	display: flex;
	margin: 30px;
	align-items: center;
	

	.header-logo{
		margin: 0px;
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
		background: rgb(84,74,125);
		background: linear-gradient(71deg, rgba(84,74,125,1) 32%, rgba(255,212,82,1) 65%);;
		box-shadow: 5px 5px 15px;
		border-radius: 16px;
		height: 80px;

		div{
			padding: 12px 36px;
			cursor:pointer;

			&:not(:last-child){
				border-right: 1px solid black;
			}

			&:hover span{
				color: white;
				border-bottom: 2px solid white;
				border-width: 75%;
				transition: 0.2s ease-in-out;
				display: block;
				padding: 5px;
			}

		}
	}
}

.banner{
	margin: 20px;
	border-radius: 16px;
	overflow: hidden;
	box-shadow: 5px 5px 15px;
	img{
		width: 100%;
		height: 100%;
		filter: blur(1);
	}
}


</style>