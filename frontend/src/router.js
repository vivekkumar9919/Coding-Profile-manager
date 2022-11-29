import HomePage from './components/HomePage.vue'
import MainPage from './components/MainPage.vue'
// import CheckProfile from './components/CheckProfile.vue'
// import SortlistProfile from './components/SortlistProfile.vue'
import PageNotfound from './components/PageNotfound.vue'
import LoginPage from './components/LoginPage.vue'

// login pages
import StudentsLogin from './components/login_pages/StudentsLogin.vue'
import StudentsSignup from './components/login_pages/StudentsSignup.vue'
import TeacherLogin from './components/login_pages/TeacherLogin.vue'
import TeacherSignup from './components/login_pages/TeacherSignup.vue'


//student
import StudentsMain from './components/students/StudentsMain.vue'
import StudentHome from './components/students/StudentHome.vue'
import AddFriend from './components/students/AddFriend'
import MakeTarget from './components/students/MakeTarget.vue'
import QuestionSolved from './components/students/QuestionSolved.vue'
import StudentsProfie from './components/students/StudentsProfie.vue'



// teacher
import TeacherHome from './components/teacher/TeacherHome.vue'
import TeacherMain from './components/teacher/TeacherMain.vue'
import CheckProfileAll from './components/teacher/CheckProfileAll.vue'
import MakeList from './components/teacher/MakeList.vue'
import SendQuestion from './components/teacher/SendQuestion.vue'
import SortlistProfileall from './components/teacher/SortlistProfileall.vue'

export default [
  

    {path:'/',component:MainPage,children:[
        {path:'', component: HomePage},
        // {path:'Check_Profile',component:CheckProfile},
        // {path:'Sortlist_Profile',component:SortlistProfile},
      
    ]}, 
    {path:'/login',component:LoginPage,children:[
        {path:'', component: StudentsLogin},
        {path:'teacher', component: TeacherLogin},
        {path:'studentsinup', component: StudentsSignup},
        {path:'teachersignup', component: TeacherSignup},

    ]},
    {path:'/student',component:StudentsMain,children:[
        {path:'', component: StudentHome,meta:{studentgurd:true}},
        {path:'profile', component: StudentsProfie ,meta:{studentgurd:true}},
        {path:'addfriend', component: AddFriend ,meta:{studentgurd:true}},
        {path:'qustion_solved', component: QuestionSolved ,meta:{studentgurd:true}},
        {path:'target', component: MakeTarget ,meta:{studentgurd:true}},

    ]},
    {path:'/teacher',component:TeacherMain,children:[
        {path:'', component: TeacherHome, meta:{teachergurd:true}},
        {path:'check_profileA', component: CheckProfileAll , meta:{teachergurd:true}},
        {path:'makelist', component: MakeList , meta:{teachergurd:true}},
        {path:'sortlist', component: SortlistProfileall , meta:{teachergurd:true}},
        {path:'send', component: SendQuestion , meta:{teachergurd:true}},

    ]},
    {path:'*', component:PageNotfound}


   
   ]