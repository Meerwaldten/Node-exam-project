<script>
    import Modal from "../Modal.svelte"

    /*
    let showModal = false;
    <button on:click={() => (showModal = true)}> Show more info </button>
<   Modal bind:showModal>
      <h2 slot="header"> Barbarian	</h2>
     <p>Slå folk i hovedet med 2 hånds våben!</p>
    </Modal>
    */

    const Features = "The Druid is a nature-oriented spellcaster, wielding the powers of the elements and commanding the forces of nature. They have a deep connection to the natural world, communing with animals and harnessing the primal energies of the earth. Druids are versatile spellcasters, able to shape-shift into animal forms and wield nature-based magic.";
    const Bonuses = "Druids excel in spellcasting related to nature and the elements. They have access to a wide array of spells that allow them to summon animals, control plants, and manipulate the environment. They can also transform into different animals, gaining their abilities and characteristics. Druids are in tune with the natural world, making them adept at survival and outdoor exploration.";
    const Lore = "Druids are guardians of the balance of nature, serving as the defenders and protectors of the natural world. They are found in secluded groves, ancient forests, and remote wilderness areas, dedicating their lives to preserving the delicate harmony between the forces of civilization and the untamed wilds. Druids draw their power from the spirits of nature, and their unwavering commitment to nature's preservation makes them powerful allies and formidable adversaries.";


</script>

<section class="text-gray-600 body-font bg-gray-300">
    <div class="container px-5 py-24 mx-auto flex flex-wrap">
      <div class="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
        <img alt="feature" class="object-cover object-center h-full w-full" src="../images/druid.webp">
      </div>
      <div class="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
        <div class="flex flex-col mb-10 lg:items-start items-center">
          <div class="flex-grow">
            <h2 class="text-gray-900 text-lg title-font font-medium mb-3">Features</h2>
            <p class="leading-relaxed text-base"> {Features}</p>
          </div>
        </div>
        <div class="flex flex-col mb-10 lg:items-start items-center">
          <div class="flex-grow">
            <h2 class="text-gray-900 text-lg title-font font-medium mb-3">Bonuses</h2>
            <p class="leading-relaxed text-base">{Bonuses}</p>
          </div>
        </div>
        <div class="flex flex-col mb-10 lg:items-start items-center">
          <div class="flex-grow">
            <h2 class="text-gray-900 text-lg title-font font-medium mb-3">Lore</h2>
            <p class="leading-relaxed text-base">{Lore}</p>
          </div>
        </div>
      </div>
    </div>
  </section>