import logo from './logo.svg';
import './App.css';

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
    </div>
  );
}

export default App;
