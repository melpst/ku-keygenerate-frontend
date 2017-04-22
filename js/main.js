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
    loginPart: true,
    showSubjectsPart: false,
    publicLabel: 'Download Public Key',
    privateLabel: 'Download Private Key',
    redirectLabel: 'Redirect to Assessment'
  },
  methods:{
  	changeSteps: function(e){
  		this.loginPart = false
  		this.showSubjectsPart = true
  	},
    login: function(e){
      axios.post('http://localhost:3000/login',{
        username: this.username,
        password: this.password
      })
      .then((response) => {
          this.loginPart = false
          this.showSubjectsPart = true
      })
      .catch((error) => {
        alert('wrong username or password')
      })
    }
  }
})