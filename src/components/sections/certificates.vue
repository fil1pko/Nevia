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
                margin-bottom: 50px;
                margin-top: 60px;
                img{
                    max-width: 300px;
                }
            }
            h1{
                @include topics;
            }
            a{
                padding: 10px 50px;
                text-decoration: none;
                @include buttons;
                font-family: $brandonB;
                text-transform: uppercase;
                font-size: 17px;
            }
        }
    }
</style>