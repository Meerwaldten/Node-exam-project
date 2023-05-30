<script>
    import Modal from "../Modal.svelte"
    import { myUsername } from "../../stores/globalStore";

    /*
    let showModal = false;
    <button on:click={() => (showModal = true)}>Show more info </button>
    <Modal bind:showModal>
    	<h2 slot="header"> Dwarf </h2>
      <p>Dwarfs er fucking nice og voldsomme og Ralle sutter!</p>
    </Modal>
    */

    const Features = "Humans are a versatile and adaptable race known for their diversity and ambition. They possess no innate magical or physical abilities but make up for it with their exceptional drive and ambition. Humans are highly adaptable and can excel in any class or profession they choose. They are known for their resourcefulness, tenacity, and ability to form strong alliances.";
    const Bonuses = "Humans have a balanced set of abilities that allow them to thrive in various situations. They possess no specific resistances or bonuses, but their flexibility and adaptability make them adept at learning new skills and fitting into different environments. Humans have a natural gift for diplomacy and can often forge strong alliances with other races. They are also quick learners and can gain proficiency in a wide range of weapons and armor.";
    const Lore = "Humans are the most widespread and diverse race, inhabiting vast empires, kingdoms, and city-states across the realms. They possess a remarkable capacity for growth, both individually and as a society. Humans value progress, innovation, and ambition, constantly seeking new knowledge and pushing the boundaries of what is possible. Their cultural diversity and sheer numbers make them influential players in the world, shaping history through their deeds and aspirations.";




</script>

<section class="text-gray-600 body-font bg-gray-300">
    <div class="container px-5 py-24 mx-auto flex flex-wrap">
      <div class="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
        <img alt="feature" class="object-contain object-center h-full w-full" src="../images/human.webp">
      </div>
      <div class="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
        <div class="flex flex-col mb-10 lg:items-start items-center">
          <div class="flex-grow">
            <h2 class="text-gray-900 text-lg title-font font-medium mb-3">Features</h2>
            <p class="leading-relaxed text-base">{Features}</p>
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