<template>
  <div class="col-12 col-lg-6 wrapper border-bottom  border-lg-top border-start px-3 py-5 p-lg-5 mt-5 mt-lg-0">
    <div v-if="result" class="answer" :class="{'text-danger': result.error, 'text-success': !result.error}">
      <p v-if="result.error">Unfortunately, we couldn't deliver the message. Please, contact us directly via
        <a href="mailto:franklunar@gmail.com">email</a>.
      </p>
      <p v-if="!result.error">Thank you! The message was successfully delivered. We'll get back to you soon!</p>
    </div>
    <b-form @submit="onSubmit">
      <b-form-group
        id="input-group-1"
        label="Email address:"
        label-for="input-1"
        description="We'll never share your email with anyone else."
      >
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          placeholder="Email address"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.name"
          placeholder="Name"
          required
        ></b-form-input>
        </b-form-group>
        <b-form-group id="input-group-3" label="Your Message:" label-for="input-3">
        <b-form-input
          id="input-2"
          v-model="form.message"
          placeholder="Your message"
          required
        ></b-form-input>
      </b-form-group>
      <b-button type="submit" class="w-100" variant="dark">Submit</b-button>
    </b-form>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          email: '',
          name: '',
          message: ''
        }
      }
    },
    computed: {
      result () { return this.$store.state.contactFormResult}
    },
    methods: {
      onSubmit(event) {
        event.preventDefault()
        this.$store.dispatch('contact', this.form)
      }
    }
  }
</script>

<style scoped>
.wrapper {
  border-color: black !important;
  border-width: 2px !important;
}
.form-group { /** labels */
  font-size: 0;
  padding-bottom: 30px;
}
input {
    text-align: center;
}
</style>