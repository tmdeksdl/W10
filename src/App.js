import logo from './logo.svg';
import './App.css';
<<<<<<< HEAD
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

//component 이름은 대문자로 시작해야함
//최상위 태그가 하나로 묶여 있어야함
function Header(){
  return <header><h1><a href="/">WWW</a></h1></header>
}
function Nav(props){
  const liTags = props.data.map((e) => {
    return <li><a href={'/read/' + e.id}>{e.title}</a></li>
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
      <Nav data={topics}></Nav>
      <Article title="welcome" body="hello, web"></Article>
      <ButtonGroup variant="contained" aria-label="outlined primary button group">
        <Button variant="outlined" onClick={createHandler}>create</Button>
        <Button variant="outlined" onClick={updateHandler}>update</Button>
      </ButtonGroup>
      <Button variant="outlined" onClick={deleteHandler}>delete</Button>
      
=======

//component 이름은 대문자로 시작해야함
//최상위 태그가 하나로 묶여 있어야함
function HeaderTag(){
  return <header><h1><a href="/">Web</a></h1></header>
}
function Nav(){
  return <nav>
  <ol>
      <li><a href="/read/1">html</a></li>
      <li><a href="/read/2">css</a></li>
      <li><a href="/read/3">js</a></li>
  </ol>
</nav>
}
function ArticleTag(){
  return <article>
  <h2>welcome</h2>
  hello web 
</article>
}

function App() {
  return (
    <div>
      <HeaderTag></HeaderTag>
      <Nav></Nav>
      <ArticleTag></ArticleTag>
>>>>>>> 3f9c9fbf4187a14ac24cb42050f746acce72c82a
    </div>
  );
}

export default App;
