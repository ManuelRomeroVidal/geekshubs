<template>
    <div class="row">

        <!--Grid column-->
        <div class="col-md-8 mb-md-0 mb-5 offset-2">

                <!--Grid row-->
                <div class="row">

                    <!--Grid column-->
                    <div class="col-md-6">
                        <div class="md-form mb-0">
                            <input type="text" id="name" name="name" class="form-control" v-model="name">
                            <label for="name" class="">Your name</label>
                        </div>
                    </div>
                    <!--Grid column-->

                    <!--Grid column-->
                    <div class="col-md-6">
                        <div class="md-form mb-0">
                            <input type="text" id="email" name="email" class="form-control" v-model="email">
                            <label for="email" class="">Your email</label>
                        </div>
                    </div>
                    <!--Grid column-->

                </div>
                <!--Grid row-->


                <!--Grid row-->
                <div class="row">

                    <!--Grid column-->
                    <div class="col-md-12">

                        <div class="md-form">
                            <textarea type="text" id="message" name="message" rows="2"
                                class="form-control md-textarea" v-model="message"></textarea>
                            <label for="message">Your message</label>
                        </div>

                    </div>
                </div>
                <!--Grid row-->


            <div class="text-center text-md-left">
                <base-button @click="storeForm" :disabled="!validName || !validEmail || !validMessage ">
                    Botón de ejemplo
                </base-button>

            </div>
            <div class="status"></div>
        </div>
        <!--Grid column-->

    </div>
</template>

<script>
import BaseButton from "@/components/BaseButton.vue";

export default {
    name: 'ContactAdd',
    data() {
        return {
            name: '',
            email: '',
            message: '',
            validName: false,
            validEmail: false,
            validMessage: false,
        }
    },
    components: {
        BaseButton 
    },
    computed: {
        storedName() {
            return this.$store.state.contact.name
        },
        storedEmail() {
            return this.$store.state.contact.email
        },
        storedMessage() {
            return this.$store.state.contact.message
        },
    },
    methods: {
        storeForm() {
            this.$store.commit('SET_CONTACT_NAME', this.name);
            this.$store.commit('SET_CONTACT_EMAIL', this.email);
            this.$store.commit('SET_CONTACT_MESAGGE', this.message);
        }
    },
    mounted() {
        this.name = this.storedName
        this.email = this.storedEmail
        this.message = this.storedMessage
    },
    watch: {
        name(value) {
            this.validName = value !== '';
        },
        email(value) {
            this.validEmail =  value !== '';
        },
        message(value){
            this.validMessage =  value !== '';
        }
    }
}
</script>