<template>
  <div id="app">
    <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae
      distinctio magni iusto repellat similique, dolorum earum beatae aliquid,
      nemo accusantium rem corrupti reiciendis in! Inventore sunt dicta dolores
      quasi iste voluptatem culpa itaque! Deserunt necessitatibus consequuntur
      doloribus labore, commodi quaerat reprehenderit nam possimus voluptatum
      harum, velit provident vitae incidunt eveniet atque sed blanditiis! Quasi
      hic impedit consequatur ex repellat? Dolores magnam voluptatibus assumenda
      facere voluptas tempore itaque, minus id ab sed tenetur at quaerat sint?
      Nesciunt ipsum maxime commodi, officia iste ad aspernatur vero, recusandae
      quo dolorum, quod voluptatem amet illo? Dignissimos eaque debitis quidem
      consequatur nihil fugit facilis necessitatibus voluptatum laboriosam
      impedit perferendis repellat quam enim est laborum quod voluptas,
      cupiditate laudantium, placeat voluptatem commodi dolore. Laboriosam nemo
      quidem soluta odit dignissimos reprehenderit, ad ducimus eos. Adipisci,
      accusantium quos, quam exercitationem facilis non recusandae omnis quaerat
      enim pariatur ipsa reprehenderit vitae possimus ducimus dicta aspernatur,
      odit et! Deserunt ex ab, ratione reprehenderit fugiat consectetur omnis
      praesentium aperiam eum doloribus impedit dolore aut inventore neque
      obcaecati! Ipsam quidem voluptate sed vero est unde sequi laudantium
      vitae, deleniti quae amet reprehenderit inventore quaerat illo nulla cum
      tenetur molestias qui quam optio impedit corporis earum. Voluptatum dicta
      laboriosam quia expedita, eligendi assumenda quos aspernatur amet aliquid
      non dolores a ad consequuntur. Dolorem doloribus tempora amet impedit
      magni inventore voluptate eveniet voluptatibus, vel, odio, doloremque in
      unde nisi aliquam maiores aperiam quidem error nemo. Cum magnam incidunt,
      tenetur consequatur obcaecati, voluptatum architecto quibusdam molestiae
      ullam rem similique esse fugit animi eveniet quae saepe accusantium ipsum
      maxime! Aperiam blanditiis incidunt odio consequuntur harum dicta
      voluptatum, ut magni consequatur accusamus praesentium ipsam sit veritatis
      illo voluptas ipsum quam quasi similique hic deleniti! Autem quo magnam
      sequi aperiam magni ullam perspiciatis inventore, alias fuga, blanditiis
      sapiente delectus excepturi perferendis corporis similique cum et eos?
      Libero deserunt voluptate autem distinctio consequatur totam reprehenderit
      harum facilis, nihil eum cumque soluta fuga ex dolorum dolore, quaerat
      asperiores magnam! Pariatur quis quod suscipit similique. Soluta
      necessitatibus voluptatem fuga? Laudantium labore aliquid vel ipsum
      obcaecati omnis voluptate ipsam, dolorem accusantium nemo ullam nam eum
      sequi tenetur repudiandae sed, ut itaque animi ab pariatur ad nesciunt
      recusandae aspernatur. Eveniet vero placeat inventore autem doloremque
      deserunt nam harum debitis quod accusamus commodi odit impedit ipsum
      eligendi maiores cum, libero nisi ipsam consequuntur delectus aut ea.
      Autem nemo dolore nulla porro sunt rerum illum, esse odio molestias optio
      tenetur delectus incidunt dolorum placeat, rem iure cumque laudantium?
      Quidem eveniet quaerat rem optio distinctio animi similique iste maiores
      voluptates itaque sit ducimus vel cum voluptatibus, pariatur error esse
      odio. A sunt quas ut rerum? Impedit aperiam ut mollitia eos accusamus
      consequuntur voluptatum eveniet natus, neque molestiae culpa nobis odit
      magnam aliquid, unde, maxime corrupti fugit quam. Id praesentium nulla in
      nostrum eum necessitatibus quibusdam. Deleniti, eveniet harum omnis error,
      vero blanditiis maiores ipsum consectetur quas magni nobis fugit quidem.
      Perspiciatis non est eligendi nostrum voluptas expedita vitae eum
      obcaecati recusandae. Veniam accusantium rerum at dolor dicta!
      Exercitationem vero fuga repellendus dolore non voluptas enim aspernatur?
    </p>
    <button @click="onClickDefaultModal">defaultModal</button>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {},
  methods: {
    async onClickDefaultModal() {
      await this.$mtModal.showDefaultModal()
    },
  },
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
