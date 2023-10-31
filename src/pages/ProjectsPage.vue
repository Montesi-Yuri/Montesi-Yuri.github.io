<script>
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

export default {
    name: 'ProjectsPage',
    data(){
        return{
            projects: [
                {
                    name: 'BDeveloper',
                    images : [
                        'src/assets/img/bdev-images/bdev-homepage.png',
                        'src/assets/img/bdev-images/bdev-ricerca.png',
                        'src/assets/img/bdev-images/bdev-dashboard.png',
                        'src/assets/img/bdev-images/bdev-dashboard-light.png',
                        'src/assets/img/bdev-images/bdev-dashboard-mobile.png',
                        'src/assets/img/bdev-images/bdev-dashboard-tablet.png',
                        'src/assets/img/bdev-images/bdev-statistiche.png',
                        'src/assets/img/bdev-images/bdev-sponsor.png',
                        'src/assets/img/bdev-images/bdev-sviluppatore.png',
                        'src/assets/img/bdev-images/bdev-mod.profilo.png',
                        'src/assets/img/bdev-images/bdev-mod.profilo-2.png',
                    ]
                },
                {
                    name: 'Phlox Corporate',
                    images : [
                        'src/assets/img/phlox-images/phlox-1.png',
                        'src/assets/img/phlox-images/phlox-2.png',
                        'src/assets/img/phlox-images/phlox-3.png',
                        'src/assets/img/phlox-images/phlox-4.png',
                        'src/assets/img/phlox-images/phlox-5.png',
                        'src/assets/img/phlox-images/phlox-6.png',
                        'src/assets/img/phlox-images/phlox-7.png',
                        'src/assets/img/phlox-images/phlox-8.png',
                    ]
                }
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
}
</script>

<template>
    <div class="container mx-auto md:px-12">
        <h1 class="text-3xl text-center font-bold text-white md:mt-12 mt-4">
            Progetti
        </h1>
        <section class="project" v-for="project in projects">
            <div class="w-full mx-4 text-white">
                <h2 class="font-bold text-lg mt-4 text-amber-400">Progetto: </h2>
                <p class="px-5">{{ project.name }}</p>

                <h5 class="font-bold text-lg mt-4 text-amber-400">Obbiettivo:</h5>
                <p class="font-normal px-5">
                    Replicare l'immagine fornita dal designer utilizzando le tecnologie sotto elencate
                </p>

                <h5 class="font-bold text-lg mt-5 text-amber-400">
                    Tecnologie utilizzate:
                </h5>
                <div class="px-5 mb-5">
                    <p>Vue</p>
                    <p>Tailwind Css</p>
                </div>
            </div>
            <swiper :pagination="true" :modules="modules" class="mySwiper">
                <template v-for="image in project.images">
                    <swiper-slide>
                        <div class="p-5">
                            <img :src="image" alt="">
                        </div>
                    </swiper-slide>
                </template>
            </swiper>
        </section>
    </div>
</template>

<style scoped lang="scss">

.project{
    display: flex;
    flex-wrap: wrap;
    padding: 20px;
    margin: 30px 0px;
    border-radius: 16px;
    background-color: rgba(7, 7, 7, 0.685);
    box-shadow: 5px 5px 15px black;
}

::-webkit-scrollbar{
    width: 1em;
}
::-webkit-scrollbar-track{
    background-color: rgba(206, 206, 203, 0.651);
    border-radius: 100vh;
    margin-block: 0.5em;
}
::-webkit-scrollbar-thumb{
    background-color: rgb(42, 176, 185);
    border-radius: 100vh;
    border: 0.15em solid rgba(206, 206, 203, 0.651);
}

.btn{
    background: rgb(217,117,222);
    background: linear-gradient(52deg, rgba(217,117,222,1) 29%, rgba(209,169,28,1) 74%, rgba(195,195,195,1) 100%);
    padding: 8px 16px;
    border-radius: 12px;

    &:hover{
        color: white;
        -webkit-box-shadow: 0px 0px 16px -5px rgba(217,117,222);
        -moz-box-shadow: 0px 0px 16px -5px rgba(217,117,222);
        box-shadow: 0px 0px 16px -5px rgba(217,117,222);
        transition: 0.2s ease-in-out;
    }
}
.logo-tech{
    width: 50px;
    margin: 10px;
}
</style>