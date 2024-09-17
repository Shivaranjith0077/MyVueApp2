const app = Vue.createApp({
    // template:'<h1>{{title}} - {{author}} - {{age}}</h1>',
    data(){
        return{
            url:"http://localhost:8081/api/homepage",
            value:true,
            books:[
                {   
                    title:'Shiva Shows',
                    author:'Shiva',
                    age:24,
                    img:'assets/11.jpg',
                    isfav:true
                },
                {   
                    title:'Murali Shows',
                    author:'Murali',
                    age:50,
                    img:'assets/22.jpg',
                    isfav:false
                },
                {   
                    title:'Mithun Shows',
                    author:'Mithun',
                    age:39,
                    img:'assets/33.jpg',
                    isfav:true
                }
            ],
            x:0,
            y:0,
        }
    },
    methods:{
        changeBook(){
            this.books.forEach(book => {
                if(book.age == 50){
                    book.age= 21
                }
            });
        },
        changeAge(){
            this.age = 50
        },
        close(){
            this.value = !this.value
        },
        handleevents(event){
            console.log(event.type)
        },
        handlemousemove(event){
            this.x = event.offsetX
            this.y = event.offsetY
        }
    }
}
)

app.mount('#show') 