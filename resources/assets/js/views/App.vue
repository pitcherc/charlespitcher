<template>
    <div>
        <transition name="long-fade">
            <div class="min-h-screen flex items-center justify-center" v-show="!loading">
                <div class="flex flex-col justify-around h-full">
                    <div>

                        <slot name="title"></slot>

                        <ul class="list-reset">
                            <li class="inline pr-8">
                                <router-link :to="{ name: 'home' }" class="no-underline align-top hover:text-lg text-sm font-normal text-brand-dark uppercase" title="Home">Home</router-link>
                            </li>
                            <li class="inline pr-8">
                                <router-link :to="{ name: 'about' }" class="no-underline align-top hover:text-lg text-sm font-normal text-brand-dark uppercase" title="About">About</router-link>
                            </li>
                            <li class="inline pr-8">
                                <router-link :to="{ name: 'projects' }" class="no-underline align-top hover:text-lg text-sm font-normal text-brand-dark uppercase" title="Projects">Projects</router-link>
                            </li>
                            <li class="inline">
                                <router-link :to="{ name: 'contact' }" class="no-underline align-top hover:text-lg text-sm font-normal text-brand-dark uppercase" title="Contact">Contact</router-link>
                            </li>
                        </ul>

                    </div>
                </div>
            </div>
        </transition>
        <div class="min-h-screen flex items-center justify-center">
            <div class="flex flex-col justify-around h-full">
                <div>

                    <transition name="fade" mode="out-in">
                        <router-view></router-view>
                    </transition>

                </div>
            </div>
        </div>
    </div>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
    opacity: 0;
}
.long-fade-enter-active,
.long-fade-leave-active {
    transition: opacity 1s;
}
.long-fade-enter,
.long-fade-leave-to {
    opacity: 0;
}
.list-reset a {
    transition: all 0.3s ease;
}
</style>

<script>
export default {
    data() {
        return {
            loading: true
        };
    },
    computed: {
        isHome() {
            return this.$router.currentRoute.name === "home";
        }
    },
    mounted() {
        this.loading = false;
    }
};
</script>