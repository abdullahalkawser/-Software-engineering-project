

const EvenHandler = () => {
    function ones (){
        alert('one number is clicked')
    }

    const two = ()=>{
        alert('two number is clicked')

    }

    const four = (num)=>{
        alert(num + 5,'four number is clicked')

    }

    return (
        <div>
    <button onClick={ones}>one</button>
    <button onClick={two}>two</button>
    <button onClick={()=>{ alert('three number is clicked')}}>Three</button>
    <button onClick={()=> four(5)}>four</button>
        </div>
    );
};

export default EvenHandler;