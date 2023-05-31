<script>
    const Features = "The Barbarian is a fierce warrior who taps into their primal instincts to unleash devastating attacks. They possess incredible strength and endurance, allowing them to shrug off wounds that would fell lesser warriors. Barbarians excel in close combat, wielding powerful melee weapons and unleashing furious rage upon their enemies.";
    const Bonuses = "Barbarians are known for their exceptional physical prowess. They have a high hit point pool, making them resilient and capable of withstanding significant damage. They possess unparalleled strength, granting them bonus damage with melee weapons and the ability to deliver devastating critical strikes. Barbarians can also enter a state of rage, increasing their damage output and resistance to damage."
    const Lore = "In the untamed wilderness and among fierce tribes, the Barbarians find their home. They hail from ancestral lands where survival depends on raw strength and primal instincts. These fierce warriors embrace their inner fury and channel it into battle, believing that true power lies in the heart of untamed rage. United by tribal bonds and fueled by an indomitable spirit, Barbarians are fearsome adversaries and unyielding allies."
</script>

<section class="text-gray-600 body-font bg-gray-300">
    <div class="container px-5 py-24 mx-auto flex flex-wrap">
      <div class="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
        <img alt="feature" class="object-contain object-center h-full w-full" src="../images/barbarian.webp">
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