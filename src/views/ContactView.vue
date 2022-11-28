<template>
    <section class="mb-4">

        <!--Section heading-->
        <h2 class="h1-responsive font-weight-bold text-center my-4">Contact us</h2>
        <!--Section description-->
        <p class="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact us
            directly.</p>

        <contact />

    </section>
    <!--Section: Contact v.2-->
</template>

<script>
import Contact from '@/components/contact/add.vue';

export default {
  name: 'ContactView',
  data() {
    return {
    }
  },
  components: {
    Contact
  }                 
}
</script>