<template>
  <a-form
      id="components-form-demo-normal-login"
      :form="form"
      class="login-form"
      @submit="onSubmit"
  >
    <a-form-item>
      <a-input
          placeholder="Mobile"
          v-decorator="[
              'mobile',
              {
                rules:[
                    {required:true, message:'please input your mobile'},
                    {pattern:/^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/,message: '请输入正确的手机号'}
                ],
              }
          ]"
      >
        <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)"/>
      </a-input>
    </a-form-item>
    <a-form-item>
      <a-input
          placeholder="Password"
          v-decorator="[
              'password',
              {
                rules:[
                    {required: true,message:'请输入密码'},
                    {min: 6 , max: 10,message:'请输入6~10位密码'},
                    {pattern: /[a-zA-Z]/ , message:'密码至少包含一个字母'},
                ]
              }
          ]"
      >
        <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)"/>
      </a-input>
    </a-form-item>
    <a-form-item>


      <a-button type="primary" html-type="submit" class="login-form-button">
        Log in
      </a-button>
      Or
      <a href="">
        register now!
      </a>
    </a-form-item>
  </a-form>
</template>

<script>
export default {
  beforeCreate() {
    // this.form = this.$form.createForm(this, { name: 'normal_login' });

    this.form = this.$form.createForm(this, {name: 'normal_login'})
  },
  methods: {
    onSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
          // {mobile: "18871074717", password: "132355d"}
        }
      });
    },
  },
};
</script>
<style>
#components-form-demo-normal-login .login-form {
  max-width: 300px;
}

#components-form-demo-normal-login .login-form-forgot {
  float: right;
}

#components-form-demo-normal-login .login-form-button {
  width: 100%;
}
</style>
