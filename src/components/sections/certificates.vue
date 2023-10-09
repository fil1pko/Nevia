<script></script>

<template>
    <section id="certificates">
        <div class="certificates-wraper1">
            <h1>certifikáty</h1>
            <div class="certificates-wraper">
                <img src="../../assets/pictures/certificate1.png" alt="certificate">
                <img src="../../assets/pictures/certificate2.png" alt="certificate">
                <img src="../../assets/pictures/certificate3.png" alt="certificate">
            </div>
            <a href="">viac</a>
        </div>
    </section>
</template>

<style lang="scss">
    @import '../../assets/style/base.scss';
    @import '../../assets/style/colors.scss';

    #certificates{
        min-height: 100vh;  
        display: flex;
        justify-content: center;
        align-items: center;

        .certificates-wraper1{
            text-align: center;
            .certificates-wraper{
                display: flex;
                gap: 20px;
                img{
                    max-width: 305px;
                }
            }
            h1{
                @include topics;
            }
            a{
                width: 300px;
                text-transform: capitalize;
            }
        }
    }
</style>