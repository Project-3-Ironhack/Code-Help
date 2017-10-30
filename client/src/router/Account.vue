<template>
    <div>
    <h2>Welcome to your account</h2>
    <h3>Feel free to update your information, below</h3>
    <teacher-info/>
    <payment/>
    <lesson-history/>
    </div>
</template>

<script>
import TeacherInfo from '@/components/TeacherInfo'
import Payment from '@/components/Payment'
import LessonHistory from '@/components/LessonHistory'

export default {
    data() {
        return {

        };
    },
    components: {
        TeacherInfo,
        Payment,
        LessonHistory,
    },
}
</script>

<style>

</style>
