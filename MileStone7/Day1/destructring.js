// array destractaring

const num = [2, 9];

const x = num[0];
const y = num[1];

const [a, b] = [2, 3];

const [c,d] = num

function name(n, m) {
    const num = [n +m]
    return num

    
}

const [n,m] = name(2,3)

const student ={
    name: 'abdullah al kawser',
    job: 'software engineer',
    sub: 'CSE',
    hoby: ['coding','solve program']
 }

 const [fn,ln] = student.hoby


// objcet destractaring

const abdullh ={
    name: 'abdullah al kawser',
    job: 'software engineer',
    sub: 'CSE',
    hoby: ['coding','solve program']
 }

 const [f,l] = abdullh.hoby


 const students ={
    name: 'abdullah al kawser',
    job: 'software engineer',
    sub: 'CSE',
    hoby: ['coding','solve program'],

    spacification:{
        addres:768,
        heigth:23,
        weat: 79
        ,
        
watch:{
    price:78,
    brand: 'rolex',
    color:'red'
}

    }

 }
 const {name,job} = students;
 const {weat,addres} = students.spacification
 const {color,brand} = students.spacification.watch



 








