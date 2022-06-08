import logo from './logo.svg';
import './App.css';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

//component 이름은 대문자로 시작해야함
//최상위 태그가 하나로 묶여 있어야함
function Header(props){
  return <header><h1><a href="/" onClick={(e)=>{
    e.preventDefault();
    props.onSelect();
  }}>WWW</a></h1></header>
}
function Nav(props){
  const liTags = props.data.map((e) => {
    return <li><a href={'/read/' + e.id} onClick={(e) => {
        e.preventDefault();
        props.onSelect();
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
  const topics = [
    {id:1, title:'html', body:'html is...'},
    {id:2, title:'css', body:'css is...'},
  ]
  return (
    <div>
      <Header onSelect={() => {
        alert("header!!");
      }}></Header>
      <Nav data={topics} onSelect={() => {
        alert("Nav!")
      }}></Nav>
      <Article title="welcome" body="hello, web"></Article>
      <ButtonGroup variant="contained" aria-label="outlined primary button group">
        <Button variant="outlined" onClick={createHandler}>create</Button>
        <Button variant="outlined" onClick={updateHandler}>update</Button>
      </ButtonGroup>
      <Button variant="outlined" onClick={deleteHandler}>delete</Button>
      
    </div>
  );
}

export default App;
