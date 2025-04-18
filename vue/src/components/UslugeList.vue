<template>
    <div>
        <UslugaSingle v-for="usluga in uniqueUsluge" :key="usluga.id" :usluga="usluga" @click = "kliknuto(usluga.kategorija.id, usluge)"/>
    </div>
</template>

<script>
import UslugaSingle from './UslugaSingle.vue';

export default {
    name: 'UslugeList',
    components: {
        UslugaSingle
    },
    data() {
        return {
            usluge: [],
            uniqueUsluge: []
        };
    },
    methods: {
        kliknuto(kategorija, usluge) {
            this.$router.push({name: 'Usluga', params: {id: kategorija}});
            console.log("usluge u kliknuto"+usluge);
        },
        removeDuplicates(data) {
            const unique = {};
            return data.filter(usluga => {
                if (unique[usluga.kategorija.Naziv]) {
                    return false;
                } else {
                    unique[usluga.kategorija.Naziv] = true;
                    return true;
                }
            });
        }
    },
    mounted() {
    fetch('http://localhost:9000/usluga')
      .then(response => response.json())
      .then(data => {
        this.usluge = data;
        this.uniqueUsluge = this.removeDuplicates(data);
        console.log(this.uniqueUsluge);
      });
  },

    // mounted() {
    //     fetch('http://localhost:9000/usluga')
    //         .then(response => response.json())
    //         .then(data => {
    //             // Create an empty object to store unique categories
    //             const uniqueCategories = {};

    //             // Filter out duplicates
    //             const uniqueUsluge = data.filter(usluga => {
    //                 // If the category is already in uniqueCategories, return false
    //                 if (uniqueCategories[usluga.kategorija.Naziv]) {
    //                     return false;
    //                 }
    //                 // Otherwise, add the category to uniqueCategories and return true
    //                 uniqueCategories[usluga.kategorija.Naziv] = true;
    //                 return true;
    //             });

    //             // Update usluge with the filtered array
    //             this.usluge = data;
                
    //         });
    // }

}
</script>

<style scoped>
.usluge-list {
    font-family: 'Gloock', serif; 
    text-align: center;
}


</style>