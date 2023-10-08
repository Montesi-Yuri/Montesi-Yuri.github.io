<script>
export default {
    name: 'HomePage',
    data(){
        return{

        }
    }
}
</script>

<template>
    <div class="px-5 flex flex-wrap justify-center">
        <section class="my-info w-full lg:w-2/5 bg-slate-600">
            <h2 class="text-center py-5">
                About Me
            </h2>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium nam est perspiciatis dolorum quibusdam earum eum aperiam tempore id expedita.
            </p>
        </section>
        <section class="my-info w-full lg:w-2/5 bg-blue-200">
            <h2 class="text-center text-lg font-bold pt-2">
                Tecnologies stack
            </h2>
            <div class="icons">
                <img src="/html-5-svgrepo-com.svg" alt="html">
                <img src="/css-3-svgrepo-com.svg" alt="css">
                <img src="/php-1-logo-svgrepo-com.svg" alt="php">
                <img src="/mysql-logo-svgrepo-com.svg" alt="mysql">
                <img src="/javascript-svgrepo-com.svg" alt="javascript">
                <img src="/bootstrap-svgrepo-com.svg" alt="bootstrap">
                <img src="/tailwind-svgrepo-com.svg" alt="tailwind">
                <img src="/sass-svgrepo-com.svg" alt="sass">
                <img src="/vue-svgrepo-com.svg" alt="vue">
                <img src="/laravel-svgrepo-com.svg" alt="laravel">
            </div>
        </section>
    </div>
</template>

<style scoped lang="scss">
@use '../assets/scss/main.scss';

.my-info{
    padding: 15px;
    border-radius: 16px;
    margin: 10px;
}

.icons{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 30px 0px;

    img{
        width: 50px;
        margin: 15px;
    }
}
</style>