<script>
    const Features = "Dwarves are sturdy and resilient beings known for their exceptional craftsmanship and unwavering determination. They possess incredible endurance and are skilled in the art of combat, making them formidable warriors. Dwarves have a natural affinity for stonework and mining, and they excel at crafting powerful weapons and armor.";
    const Bonuses = "Dwarves have several inherent advantages that make them formidable adventurers. They have a natural resistance to poison and are skilled in resisting magical effects. Dwarves possess darkvision, allowing them to see in dim light, and they have a keen sense of direction underground. They are also known for their expertise with a variety of weapons and their exceptional ability to withstand physical punishment.";
    const Lore = "Dwarves are a proud and ancient race that dwells deep within the mountains and underground cities. They are renowned for their craftsmanship, forging exquisite weapons, armor, and intricate works of art. Dwarves value honor, loyalty, and tradition, and their strong sense of community and kinship is reflected in their close-knit clans. Despite their stern and stoic nature, Dwarves are known to enjoy good food, strong drink, and lively celebrations.";
</script>

<section class="text-gray-600 body-font bg-gray-300">
    <div class="container px-5 py-24 mx-auto flex flex-wrap">
      <div class="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
        <img alt="feature" class="object-contain object-center h-full w-full" src="../images/Dwarf.webp">
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