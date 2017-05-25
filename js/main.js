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
    orderLabel: 'ลำดับที่',
    subjectNameLabel: 'ชื่อวิชา',
    lectureSecIdLabel: 'หมู่บรรยาย',
    labSecIdLabel: 'หมู่ปฏิบัติ',
    keygenIP : 'http://158.108.34.51:3000',
    assessIP : 'http://158.108.34.33:8080',
    subjects: [
      {
        id: '1',
        subjectId: '01204352',
        lectureSecId: '1',
        labSecId: '0',
        name: 'Laws & Ethics in Information Technology'
      },
      {
        id: '2',
        subjectId: '01204427',
        lectureSecId: '1',
        labSecId: '0',
        name: 'Computer System & Network Security'
      },
      {
        id: '3',
        subjectId: '01204499',
        lectureSecId: '0',
        labSecId: '11',
        name: 'Computer Engineering Project'
      }
    ]
  },
  methods:{
    login: function(e){
      axios.post(this.keygenIP+'/login',{
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
    getsub: function(subject) {
      const { subjectId, lectureSecId, labSecId, name } = subject
      axios.get(this.keygenIP+'/subjects/'+subjectId, {
        headers: {
          _id: sessionStorage._id,
          state: false
        }
      })
      .then((response)=> {
        console.log('response.data:', response.data)
        if(response.data.redirect){
          let newHref = ''
          if(lectureSecId!=0){
            newHref = this.assessIP+`?subjectId=${subjectId}&secId=${lectureSecId}&name=${encodeURIComponent(name)}`
          }
          else{
            newHref = this.assessIP+`?subjectId=${subjectId}&secId=${labSecId}&name=${encodeURIComponent(name)}`
          }
          location.href = encodeURI(newHref)
        }
      })
    }
  }
})