<script>
export default {
    name: 'ProjectsPage',
    data(){
        return{

        }
    },
    methods:{
        getImgPath: function(src) {
            console.log(new URL(`${src}`, import.meta.url).href);
            return new URL(`${src}`, import.meta.url).href
        },
    }
}
</script>

<template>
    <div class="my-container">
        <h2 class="text-center font-bold my-4 text-lg">
            Projects
        </h2>

        <section class="projects-wrapper">
            <div class="project">
                <div class="w-1/2">
                    <h3 class="text-center font-bold my-4">Phlox Corporate</h3>

                    <h5 class="font-bold">
                        Obbiettivo:
                    </h5>
                    <p class="font-normal px-5">
                        Replicare lo stile ricevuto dal designer
                    </p>

                    <h5 class="font-bold mt-5">
                        Tecnologie utilizzate:
                    </h5>
                    <div class="px-5 flex">
                        <div class="logo-tech">
                            <img :src="getImgPath('../assets/img/vue.png')" alt=""> 
                        </div>
                        <div class="logo-tech">
                            <img :src="getImgPath('../assets/img/tw-css.png')" alt="">
                        </div>  
                    </div>

                    <div class="flex justify-around my-10">
                        <button class="btn">
                            Show More
                        </button>
                        <button class="btn">
                            I want one too
                        </button>
                    </div>
                </div>
                <div class="miniature">
                    <div class="img-wrapper">
                        <img :src="getImgPath('../assets/img/PhloxCorporate.png')" alt="">
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<style scoped lang="scss">
@use '../assets/scss/main.scss';

.my-container{
    max-width: 1140px;
    margin: auto;
}
.img-wrapper{
    margin: 0;
    padding: 20px;
    
    img{
        width: 100%;
        border-radius: 12px;
    };
}

.project{
    background-color: bisque;
    display: flex;
    padding: 20px;
}

.btn{
    background: rgb(217,117,222);
    background: linear-gradient(52deg, rgba(217,117,222,1) 29%, rgba(209,169,28,1) 74%, rgba(195,195,195,1) 100%);
    padding: 8px 16px;
    border-radius: 12px;

    &:hover{
        color: white;
        -webkit-box-shadow: 10px 10px 16px -5px rgba(217,117,222);
        -moz-box-shadow: 10px 10px 16px -5px rgba(217,117,222);
        box-shadow: 10px 10px 16px -5px rgba(217,117,222);
    }
}

.miniature{
    width: 50%;
    height: 400px;
    display: flex;
    justify-content: center;
    overflow: auto;
    
}

.logo-tech{
    width: 50px;
    margin: 10px;
}
</style>