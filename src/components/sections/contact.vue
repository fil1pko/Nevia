<script></script>

<template>
    <section id="contact">
        <div class="contact-wraper">
            <h1>kontakt</h1>
            <p>Máš záujem stať sa súčasťou nášho tímu? Ak áno, neváhaj nás kontaktovať! Môžeš nás kontaktovať pomocou formulára. Tešíme sa na našu spoluprácu!</p>
            <div class="form-wraper">
                <div class="left-side">
                    <input type="text" name="Predmet" placeholder="Predmet správy" required>
                    <input type="email" name="Email" placeholder="Váš e-mail" required>
                    <textarea name="Text" placeholder="Text správy" required></textarea>

                    <button>Kontaktujte nás</button>
                </div>
                <div class="right-side"></div>
            </div>
        </div>
    </section>
</template>

<style lang="scss">
    #contact{
        min-height: 100vh;  
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>