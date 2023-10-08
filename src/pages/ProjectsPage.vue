<script>
export default {
    name: 'ProjectsPage',
    data(){
        return{

        }
    },
}
</script>

<template>
    <div class="my-container">
        <h2 class="text-center font-bold my-10 text-xl text-white">
            Projects
        </h2>










        
        <!-- <section class="projects-wrapper">
            <div class="project">
                <div class="w-1/2 mx-4">
                    <h2 class="text-center font-bold text-lg my-4">Phlox Corporate</h2>

                    <h5 class="font-bold">
                        Obbiettivo:
                    </h5>
                    <p class="font-normal px-5">
                        Replicare lo stile ricevuto dal designer
                    </p>

                    <h5 class="font-bold mt-5">
                        Tecnologie utilizzate:
                    </h5>
                    <div class="px-5 mb-5">
                        <p>Vue</p>
                        <p>Tailwind Css</p>
                    </div>

                    <div class="flex justify-center my-10">
                        <a href="">
                            <button class="btn">
                                Show More
                            </button>
                        </a>
                    </div>
                </div>
                <div class="miniature">
                    <div class="img-wrapper">
                        <img src="/PhloxCorporate.png" alt="">
                    </div>
                </div>
            </div>

            <div class="project">
                <div class="w-1/2 mx-4">
                    <h2 class="text-center font-bold text-lg my-4">Project</h2>

                    <h5 class="font-bold">
                        Obbiettivo:
                    </h5>
                    <p class="font-normal px-5">
                        Replicare lo stile ricevuto dal designer
                    </p>

                    <h5 class="font-bold mt-5">
                        Tecnologie utilizzate:
                    </h5>
                    <div class="px-5 mb-5">
                        <p>Vue</p>
                        <p>Tailwind Css</p>
                    </div>

                    <div class="flex justify-center my-10">
                        <button class="btn">
                            Show More
                        </button>
                    </div>
                </div>
                <div class="miniature">
                    <div class="img-wrapper">
                        <img src="/marathonthegame.png" alt="">
                    </div>
                </div>
            </div>

            <div class="project">
                <div class="w-1/2 mx-4">
                    <h2 class="text-center font-bold text-lg my-4">Phlox Corporate</h2>

                    <h5 class="font-bold">
                        Obbiettivo:
                    </h5>
                    <p class="font-normal px-5">
                        Replicare lo stile ricevuto dal designer
                    </p>

                    <h5 class="font-bold mt-5">
                        Tecnologie utilizzate:
                    </h5>
                    <div class="px-5 mb-5">
                        <p>Vue</p>
                        <p>Tailwind Css</p>
                    </div>

                    <div class="flex justify-center my-10">
                        <button class="btn">
                            Show More
                        </button>
                    </div>
                </div>
                <div class="miniature">
                    <div class="img-wrapper">
                        <img src="/PhloxCorporate.png" alt="">
                    </div>
                </div>
            </div>
        </section> -->
    </div>
</template>

<style scoped lang="scss">

.my-container{
    max-width: 1140px;
    margin: 20px;
    
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
    margin: 30px 0px;
    border-radius: 16px;
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