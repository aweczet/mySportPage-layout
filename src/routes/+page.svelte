<script>
    import "../app.css";
    import CustomButton from "../components/CustomButton.svelte";

    const handleButtonClick = () => {
        console.log("test")
    }
</script>

<div class="mt-10 flex flex-col items-center">
    <h1>Welcome to My Sport Page</h1>
    <CustomButton on:click={handleButtonClick} name="Test button" />
</div>