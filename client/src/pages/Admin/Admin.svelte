<script>
    import SuggestionList from "../../components/Sockets/SuggestionList.svelte";
</script>

<section class="bg-gray-50 dark:bg-gray-300">
    <div class="flex flex-col items-right justify-center px-6 py-8 mx-auto lg:py-0">
        <h1 class="text-center">Suggestions from the users:</h1>
        <div class="flex flex-wrap justify-center">
            <SuggestionList/>
        </div>
    </div>
</section>