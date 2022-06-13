import logo from './logo.svg';
import './App.css';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import {useState} from 'react'

//component 이름은 대문자로 시작해야함
//최상위 태그가 하나로 묶여 있어야함
function Header(props){
  const myStyle = {
    borderBottom: '1px solid gray',
    padding: '10px',
    fontSize: '25px',
  }
  return <header style={myStyle}><h1><a href="/" onClick={(e)=>{
    e.preventDefault();
    props.onSelect();
  }}>WWW</a></h1></header>
}
function Nav(props){
  const liTags = props.data.map((e) => {
    return <li key={e.id}><a href={'/read/' + e.id} onClick={(evt) => {
        evt.preventDefault();
        props.onSelect(e.id);
        // debugger;
      }
    }>{e.title}</a></li>
  })
  return <nav>
  <ol>
      {liTags}
  </ol>
</nav>
}
function Article(props){
  return <article>
  <h2>{props.title}</h2>
  {props.body}
</article>
}
function createHandler(){
  alert("create")
}
function updateHandler(){
  alert("update")
}
function deleteHandler(){
  alert("delete")
}
function App() {
  //아래는 '구조 분해 할당'이라는 기술이래
  // const [a,b] = [A, B]
  // a = A, b = B
  const [mode, setMode] = useState('WELCOME');
  const [id, setId] = useState(null);
  const topics = [
    {id:1, title:'html', body:'html is...'},
    {id:2, title:'css', body:'css is...'},
  ]
  let content = null
  if (mode === "WELCOME"){
    content = <Article title="welcome" body="hello, web"></Article>
  } else if (mode === "READ"){
    const topic = topics.filter(e => {
      if (e.id===id){
        return true;
      }
      else return false
    })[0]
    console.log("topic", topic)
    content = <Article title={topic.title} body={topic.body}></Article>
  }
  return (
    <div>
      <Header onSelect={() => {
        setMode("WELCOME");
      }}></Header>
      <Nav data={topics} onSelect={(id) => {
        setMode("READ");
        setId(id);
      }}></Nav>
      {content}
      <ButtonGroup variant="contained" aria-label="outlined primary button group">
        <Button variant="outlined" onClick={createHandler}>create</Button>
        <Button variant="outlined" onClick={updateHandler}>update</Button>
      </ButtonGroup>
      <Button variant="outlined" onClick={deleteHandler}>delete</Button>
      
    </div>
  );
}

export default App;
