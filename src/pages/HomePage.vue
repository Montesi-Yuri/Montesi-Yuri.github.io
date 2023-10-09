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
                Sono uno sviluppatore web full-stack di 24 anni con la passione per la pianificazione e lo sviluppo pratico di idee o progetti. 
                Da relativamente poco in questo mondo (circa 6 mesi) mi sono fin da subito appassionato per il coding e l'ambiente attorno ad esso,
                le persone che ne fanno parte e le sue caratteristiche uniche come l'aiuto reciproco da parte della community, i progetti opensource 
                dove si condividono lavori di una vita gratuitamente per il semplice fatto di aiutare il prossimo.
                Al momento sto completando il mio percorso formativo in Boolean Careers ed a breve sarò pronto a gettarmi nel mondo lavoro, qui sotto trovate i miei contatti:
            </p>
            <div class="flex mt-10">
                <div class="text-center">
                    <a href="https://github.com/Montesi-Yuri">
                        <img src="/icons8-github.svg" alt="github">
                    </a>
                    Github
                </div>
                <div class="text-center">
                    <a href="https://www.linkedin.com/in/yuri-montesi-621248294/">
                        <img src="/icons8-linkedin (1).svg" alt="github">
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
    background-color: rgba(31, 30, 28, 0.37);
    box-shadow: 5px 5px 15px black;

    a:hover{
        
        img{
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