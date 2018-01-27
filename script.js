const redditPosts = [{
    title: 'The FCC is preparing to weaken the definition of broadband',
    text: '"Under this new proposal, any area able to obtain wireless speeds of at least 10 Mbps down, 1 Mbps would be deemed good enough for American consumers."'
  },
  {
    title:'Warren Buffett on the US economy: ‘The tsunami of wealth didn’t trickle down. It surged upward’',
    text:"“Americans will benefit from far more and better 'stuff' in the future. The challenge will be to have this bounty deliver a better life to the disrupted as well as to the disrupters“"
  },
  {
    title:'New measurement confirms: The ozone is coming back',
    text:'"All of this is evidence that the Montreal Protocol is working—the chlorine is decreasing in the Antarctic stratosphere, and the ozone destruction is decreasing along with it."'
  },
  {
    title:'Vanuatu bans non-biodegradable plastic to protect ocean life',
    text:"Other countries have made similar moves, but Vanuatu says it's going further than even its Pacific neighbors & aims to become plastic-free."
  }
  ]
    function pressed(){
      var title = prompt("What is the title of the post you wish to create?", "Title");
      console.log(title);
    }



  function printPost(title, text){
    console.log("printPost()");
    const postDiv = document.createElement('div');
        postDiv.classList.add('post');

        const titleDiv = document.createElement('div');
        titleDiv.classList.add('title');

        const b = document.createElement('b');
        b.innerText = title

        const textDiv = document.createElement('div');
        textDiv.classList.add('text');
        textDiv.innerText = text;

        titleDiv.appendChild(b);
        postDiv.appendChild(titleDiv);
        postDiv.appendChild(textDiv);

        const br = document.createElement('br');
        postDiv.appendChild(br);

        document.getElementById('container').appendChild(postDiv);
        }
        const myForm = document.getElementById('my-form');
        myForm.onsubmit = function (event){
       var title = document.getElementById("titleInput").value;
       var postInfo = document.getElementById("infoInput").value;
       printPost(title, postInfo);
       event.preventDefault();
    }

      for(let i = 0; i < redditPosts.length; i++){
        const currentPost = redditPosts[i];

        printPost(currentPost.title, currentPost.text)
        }