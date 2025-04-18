<template>
    <div class="info">

        <!-- <h3><strong>Usluge</strong></h3> -->
        <h5><strong>Kategorija:</strong> {{ this.kategorija.Naziv }}</h5>
            <div v-for="usluga in usluge" :key="usluga.id">
                
                <div v-if="usluga.kategorija.id == kategorija.id">
                    <ul>
                    <li><strong>Cena:</strong> {{ usluga.Cena }}</li>
                    <li><strong>Usluga:</strong> {{ usluga.naziv }}</li>
                    </ul>
                </div>
            </div>
    </div>
    
</template>
<script>
// import UslugaSingle from './components/UslugaSingle.vue'

export default {
    name: 'UslugaView',

    data() {
        return {
            usluge: null,
            kategorija: null,
            usluga: null
        }
    },
    mounted() {
        let { kategorija, usluge } = this.$store.getters.getUslugeByKategorija(this.$route.params.id);
        this.kategorija = kategorija;
        this.usluge = usluge;
    }
}

</script>