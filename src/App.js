import logo from './logo.svg';
import './App.css';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

//component 이름은 대문자로 시작해야함
//최상위 태그가 하나로 묶여 있어야함
function HeaderTag(){
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
function ArticleTag(props){
  return <article>
  <h2>{props.title}</h2>
  {props.body}
</article>
}

function App() {
  const topics = [
    {id:1, title:'html', body:'html is...'},
    {id:2, title:'css', body:'css is...'},
  ]
  return (
    <div>
      <HeaderTag></HeaderTag>
      <Nav data={topics}></Nav>
      <ArticleTag title="welcome" body="hello, web"></ArticleTag>
      <ButtonGroup variant="contained" aria-label="outlined primary button group">
        <Button variant="outlined">create</Button>
        <Button variant="outlined">update</Button>
        <Button variant="outlined">delete</Button>
      </ButtonGroup>
      
    </div>
  );
}

export default App;
