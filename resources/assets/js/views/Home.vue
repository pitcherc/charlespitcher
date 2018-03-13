<template>
    
</template>

<script>
export default {
    beforeRouteLeave(to, from, next) {
        this.$emit("leaving", "home");
        next();
    }
};
</script>