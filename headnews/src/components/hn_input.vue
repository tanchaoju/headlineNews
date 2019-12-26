<template>
  <input type="text"
  class="inp"
  :value="value"
  :rules='rules'
  @input="handlerinput"
  @blur="blurinput"
  :class='{error:!statu,success:statu}'>
</template>

<script>
export default {
  data () {
    return {
      // 默认状态什么也不熟为false
      statu: false
    }
  },
  mounted () {
    this.statu = !!this.value
  },
  props: ['value', 'rules', 'mes'],
  methods: {
    //   响应文本框内容的变化
    handlerinput (event) {
      let value = event.target.value
      if (this.rules) {
        //  this.rules.test(value) 判断输入的内容是否符合正则表达式
        if (this.rules.test(value)) {
          this.statu = true
        } else {
          this.statu = false
        }
      } else {
        //   this.rules=！value?true:false
        this.statu = !!value
      }
      this.$emit('input', value)
    },
    // 失去焦点时
    blurinput (event) {
      // 存在规则且输入内容不符合规则
      if (this.rules && !this.rules.test(event.target.value)) {
        this.$toast.fail(this.mes)
      }
    }
  }
}
</script>

<style lang='less' scoped>
.inp{
    width: 314*100vw/360;
    height: 40*100vw/360;
    border:none;
    outline: none;
    border-bottom: 2px solid rgb(117,117,117);
    font-size: 18px;
    margin: 5px 0;
    background-color: transparent;
}
.error{
    border-bottom-color:red;
}
.success{
    border-bottom-color:green;
}
</style>
