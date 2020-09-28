<template>
    <div class="login-form">
        <a-form class="login-wrap"
                @submit="handleSubmit"
        >
            <a-form-item>
                <p class="login-title">标题</p>
            </a-form-item>
            <a-form-item>
                <a-input
                        ref="username"
                        placeholder="请输入用户名"
                        v-model="form.userName"
                >
                    <a-icon slot="prefix" type="user" style="color:rgba(0,0,0,.25)"/>
                </a-input>
            </a-form-item>
            <a-form-item>
                <a-input
                        ref="password"
                        type="password"
                        placeholder="请输入密码"
                        v-model="form.password"
                >
                    <a-icon slot="prefix" type="lock" style="color:rgba(0,0,0,.25)"/>
                </a-input>
            </a-form-item>
            <a-form-item>
                <a-button type="primary"
                          block
                          html-type="submit"
                          :disabled="!(form.userName && form.password)">登陆
                </a-button>
            </a-form-item>
        </a-form>
    </div>
</template>
<script>
    export default {
        name: 'Login',
        data(){
            return {
                hasErrors: (fieldsError) => {
                    return Object.keys(fieldsError).some((field) => {
                        return fieldsError[field];
                    });
                },
                form: {
                    userName: null,
                    password: null,
                }
            };
        },
        methods: {
            handleSubmit(e){
                console.log(e);
                e.preventDefault();
            }
        }
    };
</script>
<style lang="stylus" scoped>
    .login-form
        /*max-width: 300px;*/
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
        background-image: url(http://172.16.1.236/IotBg.jpg);
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center center;
        z-index: + 1;
    
    .login-wrap {
        width: 400px;
        height: 380px;
        padding: 50px 60px 40px;
        border-radius: 10px;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
        z-index: + 1;
        background: white;
    }
    
    .login-title {
        text-align: center;
        font-size: 30px;
    }
  
    
    .login-form-forgot {
        float: right;
    }
    
    .login-form-button {
        width: 100%;
    }
    
    #right-block {
        position: absolute;
        z-index: + 1;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
    }
</style>
