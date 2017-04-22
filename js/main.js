var app = new Vue({
  el: '#app',
  data: {
  	logo: 'https://upload.wikimedia.org/wikipedia/th/thumb/e/e2/Logo_KU_eng_color.jpg/200px-Logo_KU_eng_color.jpg',
  	userLabel: 'Username',
  	passwordLabel: 'Password',
  	webName: 'KU Key Generator',
  	loginLabel: 'Login',
    message: 'Hello Vue!',
    termLabel: 'ข้อตกลงการใช้งาน',
    username: '',
    password: '',
    login: true,
    getKey: false,
    publicLabel: 'Download Public Key',
    privateLabel: 'Download Private Key',
    redirectLabel: 'Redirect to Assessment'
  },
  methods:{
  	changeSteps: function(e){
  		this.login = false
  		this.getKey = true
  	}
  }
})