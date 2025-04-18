  <template>
    <div class="prijava-view">
      <form @submit.prevent="handleSubmit">
        <div class="form-group">
          <label for="usluga">Usluga:</label>
          <select id="usluga" v-model="selectedUsluga">
            <option v-for="usluga in usluge" :key="usluga.id" :value="usluga.id">
              {{ usluga.naziv }}
            </option>
          </select>
        </div>
        
        <div class="form-group">
          <label for="kategorija">Kategorija:</label>
          <select id="kategorija" v-model="selectedKategorija">
            <option v-for="kategorija in kategorije" :key="kategorija.id" :value="kategorija.id">
              {{ kategorija.Naziv }}
            </option>
          </select>
        </div>
        <div class="form-group">
            <label for="zaposleni">Zaposleni:</label>
            <select id="zaposleni" v-model="selectedZaposleni">
              <option v-for="zaposleni in zaposleni" :key="zaposleni.id" :value="zaposleni.id">
                {{ zaposleni.naziv }}
              </option>
            </select>
        </div>
        <div class="form-group">
          <label for="vrijeme">Vreme:</label>
          <input type="time" id="vreme" v-model="selectedTime">
          <input type="date" id="vreme" v-model="selectedDate">
        </div>
  
        <button type="submit">Potvrdi</button>
      </form>
    </div>
  </template>

<script>
      const token = localStorage.getItem('token');
      console.log("TOKENNNN",token);
export default {
  data() {
    return {
      usluge: [],
      kategorije: [],
      zaposleni: [],
      selectedUsluga: '',
      selectedKategorija: '',
      selectedTime: '',
      selectedDate: '',
      selectedZaposleni: ''
    };
  },
  created() {
    this.fetchUsluge();
    this.fetchKategorije();
    this.fetchZaposleni();
  },
  methods: {
    
    fetchUsluge() {
      fetch('http://localhost:9000/usluga',
      {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
        .then(response => response.json())
        .then(data => {
          this.usluge = data;
        })
        .catch(error => console.error('Error:', error));
    },
    fetchKategorije() {
      fetch('http://localhost:9000/kategorija',{
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
        .then(response => response.json())
        .then(data => {
          this.kategorije = data;
        })
        .catch(error => console.error('Error:', error));
    },
    fetchZaposleni() {
        fetch('http://localhost:9000/zaposleni',
        {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        })
          .then(response => response.json())
          .then(data => {
            this.zaposleni = data;
          })
          .catch(error => console.error('Error:', error));
      },
    
    handleSubmit() {
        const payload = {
            usluga: this.selectedUsluga,
            kategorija: this.selectedKategorija,
            vreme: this.selectedTime + ' ' + this.selectedDate,
            adresa : "Bulevar kralja Aleksandra 73",
            status : "zakazano",
            zaposleni: this.selectedZaposleni,
            username: this.$store.state.username
        };
        if(payload.username == null) {
            alert("Morate biti ulogovani da biste zakazali termin")
        }
        else {
          console.log("forma", JSON.stringify(payload))

          fetch('http://localhost:9000/zakazanTermin/prijavi-promenu', {
            
              method: 'POST',
              headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`

              },
              body: JSON.stringify(payload)
          })
          .then(response => {
              if (!response.ok) {
              throw new Error('Network response was not ok');
              }
              return response.json();
          })
          .then(data => {
              console.log('Success:', data);
              window.location.href = "/"
          })
          .catch(error => {
              console.error('Error:', error);
              // Handle error (e.g., show an error message)
          });
          }
        }
    
  }
}
</script>

<style>
.prijava-view {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: #fff;
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

.form-group select, .form-group input[type="time"] {
  width: 100%;
  padding: 8px 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #f8f8f8;
}

button[type="submit"] {
  width: 100%;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: white;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button[type="submit"]:hover {
  background-color: #0056b3;
}
</style>


  