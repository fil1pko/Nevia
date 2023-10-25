<script> 
    import blob from '../blob.vue'
    export default{
        components:{
            blob
        }
    }
</script>

<template>
    <section id="home">
       
        <div class="home-wraper">
            <article>
                <h1>nevia</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit quasi vero soluta voluptate hic? Iste laboriosam provident, temporibus repudiandae dolores dignissimos veritatis pariatur eius, consectetur doloremque</p>
                <button>Zistiť viac</button>
            </article>
            
            <blob />
        </div>
    </section>    
</template>

<style lang="scss">
    @import '../../assets/style/base.scss';
    @import '../../assets/style/colors.scss';

    #home{
        background-image: url('../../assets/pictures/bg9.svg');
        background-repeat: no-repeat;
        background-position: center;
        min-height: 100vh;
        max-width: 100vw;
        width: 100%;
        z-index: 999;
        .home-wraper{
            min-height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 230px;
            article{
                position: relative;
                left: 200px;
                max-width: 550px;
                h1{
                    @include topics;
                }
                p{
                    @include text-light;
                    padding-bottom: 10px;
                }
                button{ 
                    all: unset;
                    @include text-light;
                    padding: 6px 40px 6px 40px;
                    width: 80px;
                    height: 27px;
                    border: 1px solid $white;
                    text-align: center;
                    margin-top: 30px;
                    cursor: pointer;
                    border-radius: 500px;
                }
            }
        }
    }
</style>