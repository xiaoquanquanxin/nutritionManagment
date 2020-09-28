<template>
    <div>
        <p>病人信息</p>
        <button @click="jumpTo()">aaaaa</button>
    </div>
</template>
<script>
    export default {
        name: 'patientInfo',
        methods: {
            jumpTo(){
                this.$router.push({ path: '/user/confirmHospital' });
            }
        }
    };
</script>