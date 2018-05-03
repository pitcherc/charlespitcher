<template>
    <div class="w-full">
        <form class="bg-white shadow-md px-8 pt-6 pb-8 mb-4">
            <div class="mb-6">
                <label class="block text-grey-darker text-sm mb-2" for="name">
                    NAME
                </label>
                <input class="appearance-none bg-grey-lighter w-full py-2 px-3 text-grey-darker focus:shadow-md" id="name" type="text" placeholder="John Doe" />
            </div>
            <div class="mb-6">
                <label class="block text-grey-darker text-sm mb-2" for="email">
                    EMAIL
                </label>
                <input class="appearance-none bg-grey-lighter w-full py-2 px-3 text-grey-darker focus:shadow-md" id="email" type="text" placeholder="johndoe@example.com" />
            </div>
            <div>
                <label class="block text-grey-darker text-sm mb-2" for="message">
                    MESSAGE
                </label>
                <textarea class="appearance-none bg-grey-lighter w-full py-2 px-3 text-grey-darker focus:shadow-md" id="message" placeholder="Hey! I have something to tell you." rows="8"></textarea>
            </div>
        </form>
    </div>
</template>

<script>
export default {};
</script>