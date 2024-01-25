const handle = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => display(data));
  }
  
  const display = (datas) => {
    const postconatiner = document.getElementById('postContainer'); // Corrected the ID parameter
    for (const user of datas) {
        console.log(user)
        const postdiv = document.createElement('div')
         postdiv.classList.add('post')
        postdiv.innerHTML = `
        <h2> User :${user.id}<h2>
        <h4> Title:${user.title}<h4>
        <p> desacripsion:${user.body} <p>

        `;
        postconatiner.appendChild(postdiv)   
    }
  

  }



  // post 

  const postapi = ()=>{
    fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: 'foo',
    body: 'bar',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));
  }

  //put

  const putApi = ()=>{
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'PUT',
  body: JSON.stringify({
    id: 1,
    title: 'foo',
    body: 'bar',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));
  }


const patchApi = ()=>{
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'PATCH',
  body: JSON.stringify({
    title: 'foo',
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));
}
  

// dlet 
const deletApi = ()=>{
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'DELETE',
});
}

/// https status code 
