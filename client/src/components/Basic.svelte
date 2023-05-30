<script>
    import Modal from "./Modal.svelte";

    
    let showModal = false;
  


    const description1 = "Dungeons and Dragons (D&D) is a tabletop role-playing game where players create characters and embark on exciting adventures in a fantasy world. It is known for its imaginative storytelling, cooperative gameplay, and endless possibilities.";
    const description2 = "Step into a realm of magic, monsters, and mystery where anything is possible. Dungeons and Dragons allows you to build rich narratives, making decisions that influence the course of the story. Engage in imaginative storytelling with your friends, forging bonds, and facing challenges together in a shared adventure.";
    const description3 = "In D&D, you have the power to create your own character, tailoring their appearance, abilities, and backstory to match your vision. Choose from a variety of races and classes, each offering unique traits and skills. Customize your character's personality, motivations, and alignment to bring them to life in the vibrant world of D&D.";

</script>

<section class="text-gray-600 body-font bg-gray-300">
    <div class="container px-5 py-24 mx-auto flex flex-wrap">
      <div class="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
        <img alt="feature" class="object-contain object-center h-full w-full" src="../images/DnD.jpg">
      </div>
      <div class="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
        <div class="flex flex-col mb-10 lg:items-start items-center">
          <div class="flex-grow">
            <h2 class="text-gray-900 text-lg title-font font-medium mb-3">What is Dungeons and Dragons?</h2>
            <p class="leading-relaxed text-base">{description1}</p>
          </div>
        </div>
        <div class="flex flex-col mb-10 lg:items-start items-center">
          <div class="flex-grow">
            <h2 class="text-gray-900 text-lg title-font font-medium mb-3">Immerse yourself in a world of fantasy</h2>
            <p class="leading-relaxed text-base">{description2}</p>
          </div>
        </div>
        <div class="flex flex-col mb-10 lg:items-start items-center">
          <div class="flex-grow">
            <h2 class="text-gray-900 text-lg title-font font-medium mb-3">Unleash your creativity</h2>
            <p class="leading-relaxed text-base">{description3}</p>
          </div>
        </div>
      </div>
    </div>  
  </section>