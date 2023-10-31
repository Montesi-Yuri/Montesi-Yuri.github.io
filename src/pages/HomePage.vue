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
    <div class="px-5 flex flex-wrap justify-center mb-32">
        <section class="my-info w-full lg:w-2/5">
            <h2 class="text-center font-bold py-5 text-lg">
                Su di Me
            </h2>
            <p>
                Sono uno sviluppatore web full-stack con la passione per la pianificazione e lo sviluppo pratico di idee o progetti. Da relativamente poco in questo mondo (circa 6 mesi)
                mi sono fin da subito appassionato per il coding e l'ambiente attorno ad esso, le persone che ne fanno parte
                e le sue caratteristiche uniche come l'aiuto reciproco da parte della community, i progetti opensource dove si condividono lavori di una vita gratuitamente semplicemente per aiutare il prossimo.
            </p>
            <span class="block text-center mt-2">Qui sotto trovate i miei link:</span>
            <div class="flex mt-10">
                <div class="text-center">
                    <a href="https://github.com/Montesi-Yuri">
                        <svg viewBox="0 0 24 24" aria-hidden="true" class="h-12 w-12 fill-gray-100">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.618.069-.606.069-.606 1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.107-4.555-4.927 0-1.088.39-1.979 1.029-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.022A9.607 9.607 0 0 1 12 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.372.202 2.386.1 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.339 4.673-4.566 4.92.359.307.678.915.678 1.846 0 1.332-.012 2.407-.012 2.734 0 .267.18.577.688.48 3.97-1.32 6.833-5.054 6.833-9.458C22 6.463 17.522 2 12 2Z"></path>
                        </svg>
                    </a>
                    Github
                </div>
                <div class="text-center">
                    <a href="https://www.linkedin.com/in/yuri-montesi-621248294/">
                        <img src="/linkedin.svg" alt="github">
                    </a>
                    Linkedin
                </div>
                
            </div>
        </section>
        <section class="my-info w-full lg:w-2/5">
            <h2 class="text-center text-lg font-bold pt-2">
                Tecnologie di mia conoscenza:
            </h2>
            <div class="icons">
                <a href="https://en.wikipedia.org/wiki/HTML">
                    <img src="/html-5-svgrepo-com.svg" alt="html">
                </a>
                <a href="https://en.wikipedia.org/wiki/CSS">
                    <img src="/css-3-svgrepo-com.svg" alt="css">
                </a>
                <a href="https://www.php.net">
                    <img src="/php-1-logo-svgrepo-com.svg" alt="php">
                </a>
                <a href="https://www.mysql.com">
                    <img src="/mysql-logo-svgrepo-com.svg" alt="mysql">
                </a>
                <a href="https://en.wikipedia.org/wiki/JavaScript">
                    <img src="/javascript-svgrepo-com.svg" alt="javascript">
                </a> 
                <a href="https://getbootstrap.com">
                    <img src="/bootstrap-svgrepo-com.svg" alt="bootstrap">
                </a> 
                <a href="https://tailwindcss.com">
                    <img src="/tailwind-svgrepo-com.svg" alt="tailwind">
                </a> 
                <a href="https://sass-lang.com">
                    <img src="/sass-svgrepo-com.svg" alt="sass">
                </a> 
                <a href="https://vuejs.org">
                    <img src="/vue-svgrepo-com.svg" alt="vue">
                </a> 
                <a href="https://laravel.com">
                    <img src="/laravel-svgrepo-com.svg" alt="laravel">
                </a> 
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
    color: white;
    background-color: rgba(7, 7, 7, 0.685);
    box-shadow: 5px 5px 15px black;

    a:hover{
        
        &>*{
            scale: 120%;
        }
    }
}

.icons{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 30px 0px;

    a{
        margin: 0;
    }

    img{
        width: 50px;
        margin: 15px;
    }
}
</style>