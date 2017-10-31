<template>
    <div>
    <h2>Welcome to your account</h2>
    <h3>Feel free to update your information, below</h3>
    <teacher-info/>
    <payment v-if="role==='Student'"></payment>
    <lesson-history/>
    </div>
</template>

<script>
import TeacherInfo from '@/components/TeacherInfo'
import Payment from '@/components/Payment'
import LessonHistory from '@/components/LessonHistory'
import apiUsers from '@/api/users'

export default {
    data() {
        return {
            role: '',
        };
    },
    components: {
        TeacherInfo,
        Payment,
        LessonHistory,
    },

    created(){
        const userId = this.$root.user._id;

        apiUsers.getTeacherById(userId).then(user => {
            this.role = user.role;
            console.log('this role is...', this.role)
        })
        .catch(err => {
        this.error = error.response;
        });
    }
}
</script>

<style>

</style>
