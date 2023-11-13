<script>
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

export default {
    data(){
        return{
            projects: [
                {
                    name: 'Boolzap',
                    goal : "Creare una web app replica di whatsapp semplificata con messaggi dinamici",
                    tecnologies:['Vue', 'Bootstrap'],
                    githubLink: 'https://github.com/Montesi-Yuri/vite-boolflix',
                    images: [
                        '/boolzap/images/boolzap.png'
                    ],
                    video: '/boolzap/video/boolzap.mkv'
                },
                {
                    name: 'Boolflix',
                    goal : "Creare una web app dove poter vedere informazioni su film e serie tv tramite ricerca utilizzando l'api di TMBD(https://www.themoviedb.org) riprendendo lo stile da Netflix",
                    tecnologies:['Vue', 'Bootstrap'],
                    githubLink: 'https://github.com/Montesi-Yuri/vite-boolflix',
                    images: [
                        '/boolflix/images/boolflix.png'
                    ],
                    video: '/boolflix/video/boolflix.mkv'
                },
                {
                    name: 'Phlox Corporate',
                    goal: "Replicare l'immagine fornita dal designer utilizzando le tecnologie sotto elencate",
                    tecnologies:['Vue', 'Tailwind CSS'],
                    githubLink: 'https://github.com/Montesi-Yuri/proj-html-vuejs', 
                    images: [
                        '/phlox/images/phlox-1.png',
                        '/phlox/images/phlox-2.png',
                        '/phlox/images/phlox-3.png',
                        '/phlox/images/phlox-4.png',
                        '/phlox/images/phlox-5.png',
                        '/phlox/images/phlox-6.png',
                        '/phlox/images/phlox-7.png',
                        '/phlox/images/phlox-8.png',
                    ]
                },
                {
                    name: 'BDeveloper',
                    goal : "Creare una applicazione web divisa in front office e back office, in cui abbiamo 2 utenti: nel front office l'utente interessato che ha bisogno dei servizi deve essere in grado di ricercare lo sviluppatore in base al campo di lavoro, poterlo contattare e/o lasciare una recensione. Nel back office l'utente registrato può vedere i messaggi ricevuti, le recensioni, le sue statistiche di andamento e modificare le informazioni del suo profilo.",
                    tecnologies:['Laravel', 'Tailwind CSS', 'Vue', 'Vue Router (pacchetto)', 'Chart.js (libreria)'],
                    githubLink: 'https://github.com/Montesi-Yuri/bdevelopers-be',
                    images : [
                        '/bdev/images/bdev-homepage.png',
                        '/bdev/images/bdev-ricerca.png',
                        '/bdev/images/bdev-dashboard.png',
                        '/bdev/images/bdev-dashboard-light.png',
                        '/bdev/images/bdev-statistiche.png',
                        '/bdev/images/bdev-sponsor.png',
                    ],
                    video: '/bdev/video/bdev-video.mp4'
                },
            ]
        }
    },
    components:{
        Swiper,
        SwiperSlide
    },
    setup() {
      return {
        modules: [
            Pagination,
            Navigation
        ],
      };
    },
    methods:{
        showProject(projectIndex){
            let selectedProj = document.getElementById(`${projectIndex}`);
            selectedProj.classList.remove('hidden');
            selectedProj.classList.add('flex');
        },
        closeAll(){
            for(let i = 0; i < this.projects.length; i++) {
                let section = document.getElementById(i);
                section.classList.remove('flex');
                section.classList.add('hidden');
            };
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
        <div class="container mx-auto md:px-12">
        <h1 class="text-3xl text-center font-bold text-white md:mt-12 mt-6">
            Progetti
        </h1>
        

        <div class="h-40 mt-5 mb-20 relative flex">
            <template v-for="(singleProject, index) in projects">
                <div class="absolute group ease-in-out duration-300" :class="`move-${index}`">
                    <div class="w-40 relative group-hover:-top-24 cursor-pointer " @click="showProject(index)">
                        <img class="w-full custom-shadow" src="../assets/folder.svg" alt="">
                        <h3 class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold">
                            {{ singleProject.name }}
                        </h3>
                    </div>
                </div>
            </template>
        </div>
        <div class="flex justify-center">
            <button @click="closeAll()" class="bg-white font-bold py-2 px-6 rounded-2xl hover:scale-110">Chiudi progetti</button>
        </div>
        
        <section :id="i" class="project hidden flex-wrap p-5 my-8 rounded-2xl" v-for="(project, i) in projects">                           
            <div class="w-full mx-4 text-white">
                <h2 class="font-bold text-lg mt-4 text-amber-400">Progetto: </h2>
                <p class="px-5">{{ project.name }}</p>

                <h5 class="font-bold text-lg mt-4 text-amber-400">Obbiettivo:</h5>
                <p class="font-normal px-5">
                    {{ project.goal }}
                </p>

                <h5 class="font-bold text-lg mt-5 text-amber-400">
                    Tecnologie utilizzate:
                </h5>
                <div class="px-5 mb-1" v-for="tecnology in project.tecnologies">
                    <p>{{ tecnology }}</p>
                </div>
                <h5 class="font-bold text-lg mt-5 text-amber-400">
                    Link Github:
                </h5>
                <div class="px-5 mb-1">
                    <a :href="project.githubLink" class="hover:text-blue-400" target="_blank">Repository</a>
                </div>
                <h5 class="font-bold text-lg mt-5 text-amber-400">
                    Media:
                </h5>
            </div>

            <swiper :pagination="true" :modules="modules" class="mySwiper sm:w-1/2">
                <template v-for="(image, i) in project.images">
                    <swiper-slide>
                        <div class="p-5">
                            <img class=" aspect-video" :src="image" :alt="project.name">
                        </div>
                    </swiper-slide>
                </template>
            </swiper>
            <template v-if="project.video">
                <div class="sm:w-1/2">
                    <video class="p-5" :src="project.video" muted controls></video>
                </div>
            </template>
        </section>
        </div>
    </div>
</template>

<style scoped lang="scss">
@use '../assets/scss/main.scss';

.project{
    background-color: rgba(7, 7, 7, 0.685);
    box-shadow: 5px 5px 15px black;
}
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


.move-1{
    left: 80px;
    top: 10px;
}
.move-2{
    left: 160px;
    top: 20px;
}
.move-3{
    left: 240px;
    top: 30px;
}.move-4{
    left: 320px;
    top: 40px;
}

.custom-shadow{
  filter: drop-shadow(0px 5px 15px rgb(19, 19, 19));
}




</style>