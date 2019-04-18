<template>
    <section class="al2-login">
        <!-- TODO: Implement lat login feature -->
        <span class="al2-login__last-log">last login: 22/08/17 - 16:42</span>
        <div class="al2-login__profile">
            <img :src="require(`@/assets/images/users/${avatarImage}`)" alt="My default image">
        </div>
    </section>
</template>

<script>
    export default {
        name: 'Login',
        data() {
            return {}
        },
        props: {
            avatarImage: String
        }
    }
</script>

<style scoped lang="scss">
    @import "../styles/components/Login";
</style>
