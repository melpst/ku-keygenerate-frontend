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
    redirectLabel: 'Redirect to Assessment',
    subjectIdLabel: 'รหัสวิชา',
    assessLink: 'http://localhost:3000/subjects/',
    subjects: [
      {subjectId: '01204499'},
      {subjectId: '01204495'},
      {subjectId: '01204427'}
    ]
  },
  methods:{
    login: function(e){
      axios.post('http://localhost:3000/login',{
        username: this.username,
        password: this.password
      })
      .then((response) => {
          console.log('response.data:', response.data)
          const { data } = response
          sessionStorage._id = data._id
          this.loginPart = false
          this.showSubjectsPart = true
      })
      .catch((error) => {
        alert('wrong username or password')
      })
    },
    getsub: function(subjectId) {
      axios.get('http://localhost:3000/subjects/'+subjectId, {
        headers: { _id: sessionStorage._id }
      })
      .then((response)=> {
        console.log('response.data:', response.data)
      })
    }
  }
})