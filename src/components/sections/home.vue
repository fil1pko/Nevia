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
                <p>Vítajte v svete spoločnosti Nevia, ktorá spojuje reklamu a inovatívne riešenia pre zdravotnícke zariadenia s cieľom zlepšiť kvalitu zdravotnej starostlivosti a zvýšiť povedomie o zdraví.</p>
                <div>
                    <a href="#about">Zistiť viac</a>
                </div>
            </article>
            
            <blob />
        </div>
    </section>    
</template>

<style lang="scss">
    @import '../../assets/style/base.scss';
    @import '../../assets/style/colors.scss';

    #home{
        background-image: url('../../assets/pictures/bg92.svg');
        background-repeat: no-repeat;
        background-position: center;
        background-size: 100vw;
        min-height: 100vh;
        max-width: 100vw;
        width: 100%;
        z-index: 999;
        @media only screen and (max-width: 1024px){
            background-image: url('../../assets/pictures/bg92portrait.svg');
        }
        .home-wraper{
            min-height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 11.979vw;
            article{
                position: relative;
                left: 10.417vw;
                max-width: 28.646vw;
                h1{
                    @include topics;
                }
                p{
                    @include text-light;
                    padding-bottom: 0.521vw;
                }
                div{
                    cursor: pointer;
                    width: 7.813vw;
                    height: 2.083vw;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    border: 0.052vw solid $white;
                    border-radius: 26.042vw;
                    margin-top: 1.042vw;
                    a{ 
                        @include text-light;
                        text-decoration: none;
                    }
                }
            }
        }
    }
</style>