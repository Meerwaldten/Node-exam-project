<script>
    const Features = "The Wizard is a master of arcane knowledge and spellcasting, delving into the secrets of the universe to wield magic. They are highly intelligent and skilled in manipulating the fundamental forces of magic. Wizards specialize in the study of spells and can cast a wide variety of magical effects.";
    const Bonuses = "Wizards possess vast knowledge of spells and can learn and cast a diverse range of magical effects. They are skilled in arcane rituals and can create magical scrolls and items. Wizards excel in deciphering ancient texts, unraveling magical mysteries, and wielding devastating spells in combat. With their spellbooks as their constant companion, they are always prepared for any magical challenge.";
    const Lore = "Wizards are the scholars and seekers of arcane knowledge, devoting their lives to studying the intricacies of magic and its many forms. They can be found in ancient towers, arcane libraries, and prestigious magical academies, pursuing enlightenment and the mastery of spellcraft. Wizards possess a deep understanding of the weave of magic, and their ability to harness and shape arcane energy makes them highly sought after and respected.";
</script>

<section class="text-gray-600 body-font bg-gray-300">
    <div class="container px-5 py-24 mx-auto flex flex-wrap">
      <div class="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
        <img alt="feature" class="object-cover object-center h-full w-full" src="../images/wizard.jpg">
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