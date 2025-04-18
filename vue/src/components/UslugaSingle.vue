<template>
    <div class="usluga" @click="$emit(`click`)">
        <img v-if="usluga.kategorija.Naziv == 'Premium Barber'" src="../assets/Premium Barber.png">
        <img v-else-if="usluga.kategorija.Naziv == 'Standard Barber'" src="../assets/Standard Barber.png">
        <img v-else-if="usluga.kategorija.Naziv == 'Top Barber'" src="../assets/Top Barber.png">
        <ul>
            <li>{{usluga.kategorija.Naziv}}</li>
        </ul>
    </div>
</template>
  
<script>
  export default {
    name: 'UslugaSingle',
    props: {
      usluga: Object,

      
    }
    
  }
</script>


<style scoped>
    .usluga{
    width:150px;
    display:inline-block;
    margin:10px;
    vertical-align: top;
    }
    /* .student img{
        width:150px;
        height:150px;
        object-fit:cover;
    } */
    .usluga img {
    width: 159px; /* Adjust size as needed */
    cursor: pointer;
}
    .usluga p{
        height:150px;
        margin:0;
        background-color:silver;
        text-align:center;
    }


</style>