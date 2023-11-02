<script>

export default {
	name: 'HeaderComponent',
	data() {
		return {
		}
	},
}

</script>

<template>
	<div class="banner hidden md:block">
		<img src="/BannerLinkedinRibassato.png" alt="Banner">
	</div>
	<div class="header-logo md:hidden">
		<img src="/logoTrasp.png" alt="Yuri-Montesi">
	</div>
</template>

<style lang="scss" scoped>
@use '../assets/scss/main.scss';

.header-logo{
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 5px;
	
	img{
		width: 120px;
		height: 120px;
		background-color: rgb(0, 0, 0);
		border-radius: 50%;
		box-shadow: 5px 5px 5px rgb(192, 164, 8);
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