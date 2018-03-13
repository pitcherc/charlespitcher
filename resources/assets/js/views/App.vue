<template>
    <div>
        <div class="min-h-screen flex items-center justify-center">
            <div id="nav" class="fixed pin-50-50" :class="{ nav: !isHome }">
                <div>

                    <h1 class="text-grey-darker text-left whitespace-no-wrap font-hairline tracking-wide text-5xl mb-6">
                        C<div class="minimize">harles </div>P<div class="minimize">itcher</div>
                    </h1>

                    <ul id="menu" class="list-reset">
                        <li class="inline pr-8">
                            <router-link :to="{ name: 'home' }" id="home" class="no-underline align-top hover:text-lg text-sm font-normal text-brand-dark uppercase" title="Home">Home</router-link>
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
.nav .router-link-exact-active {
    font-size: 1.875rem;
    transition: font-size 0.3s ease 0.5s;
}
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
.pin-50-50 {
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0);
}
.nav {
    top: 10px;
    left: 20px;
    transform: none;
}
h1 .minimize {
    width: 145px;
    overflow: hidden;
    vertical-align: bottom;
    display: inline-block;
    transition: all 0.5s ease;
}
.nav .minimize {
    width: 0;
    transition: all 0.5s ease 0.3s;
}
#nav {
    transition: all 0.5s ease 0.5s;
}
#nav.nav {
    transition: all 0.5s ease;
}
#nav {
    max-width: 325px;
}
#menu {
    position: absolute;
    white-space: nowrap;
    top: 100%;
    left: 50%;
    transition: all 0.3s ease 0.2s, top 0.4s ease;
    transform: translate3d(-50%, 0, 0);
}
.nav #menu {
    top: 25%;
    left: 100px;
    transform: none;
    transition: all 0.3s ease 0.3s, top 0.5s ease 0.45s;
}
</style>

<script>
export default {
    computed: {
        isHome() {
            return this.$route.name === "home";
        }
    }
};
</script>