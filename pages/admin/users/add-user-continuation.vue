<link href="https://fonts.googleapis.com/css2?family=Lovers+Quarrel&display=swap" rel="stylesheet">
<link href="../../../assets/styles.css" rel="stylesheet">




<template>

    <div class="container mx-auto mt-4">

        <div class="grid grid-cols-12 gap-5">

            <div id="logo" class="col-span-12 md:col-span-7 bg-black-200 p-4 flex justify-center">

                <h2 class="text-xl font-semibold"><img src="@/img/logo.svg" alt="frameIcon" /></h2>

            </div>

            <div id="content" class="col-span-12 bg-black p-4 lg:border-l white h-full md:col-span-5 md:border-l">

                <h2 id="Register" class="text-xl font-semibold text-white flex flex-col justify-center items-center">Register</h2>


                <form class="mt-8 md:mt-8 md:pr-20% text-white">

                    <div class="mb-8 grid grid-cols-12 items-center relative">

                        
                        <select v-model="selectedCountry" :filterable="true" class="form-input mt-1 col-span-10 block border-black-300 border-b white" @change="handleSelectChange" required>
                          <option value="" disabled selected>Select a country</option>
                          <option v-for="country in countriesData" :key="country._id" :value="country._id" white>
                            {{ country._name }}
                          </option>
                        </select>
                        <img src="@/img/arrow-down.png" alt="calendarImg" class="col-span-2 mb-2 h-8 w-8"/>

                    </div>
          
                    <div class="mb-8 grid grid-cols-12 items-center relative">

                        <select v-model="selectedProvince" :filterable="true" class="form-input mt-1 col-span-10 block border-black-300 border-b white" @change="handleSelectProvinceChange" required>
                          <option value="" disabled selected>Select a province</option>
                          <option v-for="province in provincesData" :key="province._id" :value="province._id" white>
                            {{ province.name }}
                          </option>
                        </select>
                        <img src="@/img/arrow-down.png" alt="calendarImg" class="col-span-2 mb-2 h-8 w-8"/>

                    </div>

                    <div class="mb-8 grid grid-cols-12 items-center relative">

                       <select v-model="selectedCity" :filterable="true" class="form-input mt-1 col-span-10 block border-black-300 border-b white" required>
                          <option value="" disabled selected>Select a city</option>
                          <option v-for="city in citiesData" :key="city._id" :value="city._id" white>
                            {{ city.name }}
                          </option>
                        </select>
                        <img src="@/img/arrow-down.png" alt="calendarImg" class="col-span-2 mb-2 h-8 w-8"/>

                    </div>

                    <div class="mb-8">

                        <input type="text" id="address" name="address" class="form-input mt-1 block w-10/12 border-black-300 border-b white" placeholder="Address" v-model="address" required>    

                    </div>
                

                    <div  class="mt-75%">

                        <button id="arrow-left" type="submit">

                            <img src="@/img/arrow-left.png" alt="arrowIcon" />

                        </button>

                        <button id="btnFinish" type="submit">

                            Finish

                        </button>

                    </div>
            
                

                    <div id="btnLogin" class="flex justify-center items-center mb-4">

                        <label class="cursor-pointer">

                            <button  type="submit" class="bg-black-200 text-white flex items-center">

                                <img src="@/img/arrow-left.png" alt="arrowIcon" class="mx-2" />
                                <nuxt-link to="/Login">Login</nuxt-link>

                            </button>

                        </label>

                    </div>

                </form>

            </div>

        </div>

    </div>

</template>


<style>

    #content{

        margin-left: 5%;

        @screen lg {
            margin-left: 23%;
        }

    }

    div{

        line-height: 1em; 
        background-color: black;

    }

    #logo{

        margin-left: 3em;
        align-items: center; 
        background-color: black;
        color: white;

    }

    icon {

        font-size: 24px;
        color: white;

    }

    #Register{

        padding-top: 1.5em;
        font-size: 5em;
        font-family: 'Lovers Quarrel', serif;
        font-weight: normal;

    }

    #btnFinish{

        margin-left: 53%;
        font-size: 2em;

    }
    
    #btnLogin{

        display: flex; 
        flex-direction: column; 
        align-items: center; 
        justify-content: center;
        font-size: 4em; 
        margin-top: 47%;
        margin-left: 1.5em;
        font-family: 'Lovers Quarrel', serif;
        font-weight: normal;
        margin-inline-start: 3%;

    }

    form{
        


    }

    input{

        background-color: black;

    }

    input::placeholder{

        color: white;
        font-size: 1.5em;

    }

    select{

        background-color: black;

    }

    select::placeholder{

        color: white;
        font-size: 1.5em;

    }

</style>

  
  <script>

      import axios from 'axios';
      import Swal from 'sweetalert2'
  
    export default {

        data() {

            return {
            
                data : null,
                countriesData : [],
                selectedCountry: null,
                provincesData : [],
                selectedProvince: null,
                citiesData : [],
                selectedCity: null,
                address : '',

            };

        },
    created() {

        const validate = this.$route.query.data;//debugger;
        if (!validate) {
            
            this.$router.push('/admin/users/add-user');

        }

    },
    mounted() {

        if(localStorage.getItem('CupidConnectToken')){

            this.$router.push('/home');

        }    

        this.fetchCountries();
      
    },
    methods: {
      
        async submitForm() {

            this.data = this.$route.query.data;

        },
        async fetchCountries() {

            try {
              
                const response = await axios.get('https://espacionebula.com:8000/get-countries', {

                    headers: {

                      'Access-Control-Allow-Origin': '*',
                      'Content-Type': 'multipart/form-data',
                      
                    },
                    mode: 'cors',

                });
              
                this.countriesData = response.data.countries; //debugger;

                if (this.countriesData.length > 0) {
                  this.selectedCountry = '';
                  this.selectedProvince = '';
                  this.selectedCity = '';
                }
              
            } catch (error) {

                console.error('Error in fetchCountries:', error);

            }

        },

        async handleSelectChange() {

            this.provincesData = [];
          
            if (this.selectedCountry !== '') {
                
                try {

                    
                    const dataf = {

                        country_id: this.selectedCountry,

                    };

                    console.log(this.selectedCountry);

                    const response = await axios.post('https://espacionebula.com:8000/get-province-by-country', dataf, {

                        headers: {

                            'Access-Control-Allow-Origin': '*',

                        },
                        mode: 'cors',

                    });

                    //console.log(response); debugger;
                    this.provincesData = response.data.provinces; //debugger;

                    if(response.data.success){

                        if (this.provincesData.length > 0) {
                          this.selectedProvince = '';
                          this.selectedCity = '';
                        }

                    }           

                    
                  
                } catch (error) {

                    console.error('Error in handleSelectChange:', error);

                }

            }
        },

        async handleSelectProvinceChange() {

            this.citiesData = [];

            if (this.selectedProvince !== '') {
            
            try {
                
                const dataf = {

                    province_id: this.selectedProvince,

                };

                console.log(this.selectedProvince);

                const response = await axios.post('https://espacionebula.com:8000/get-cities-by-province', dataf, {

                    headers: {

                        'Access-Control-Allow-Origin': '*',

                    },
                    mode: 'cors',

                });

                //console.log(response); debugger;
                this.citiesData = response.data.cities; //debugger;

                if(response.data.success){

                    if (this.citiesData.length > 0) {

                        this.selectedCity = '';

                    }

                }           

                
              
            } catch (error) {

                console.error('Error in handleSelectProvinceChange:', error);

            }

          }

        }

    },

  };

  </script>
  
<style scoped>

    .container {

        max-width: 480px;
        margin: 0 auto;

    }
  
</style>
  