<template>
  <div>
    <LangSelect></LangSelect>
    <el-button type="primary">{{$t('login.btn')}}</el-button>
  </div>
</template>
<script>
import LangSelect from '@/components/transLang'
export default {
  components: { LangSelect },
  data () {},
  mounted () {},
  methods: {}
}
</script>
