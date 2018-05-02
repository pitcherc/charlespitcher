<template>
    <div class="w-full max-w-xs">
        <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div class="mb-4">
                <label class="block text-grey-darker text-sm font-bold mb-2" for="name">
                    Name
                </label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="name" type="text" placeholder="John Doe" />
            </div>
            <div class="mb-6">
                <label class="block text-grey-darker text-sm font-bold mb-2" for="email">
                    Email
                </label>
                <input class="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3" id="email" type="text" placeholder="johndoe@example.com" />
            </div>
            <div>
                <label class="block text-grey-darker text-sm font-bold mb-2" for="message">
                    Message
                </label>
                <textarea class="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3" id="message"></textarea>
            </div>
        </form>
    </div>
</template>

<script>
export default {};
</script>