
import './App.css';
import {useState} from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import styled from 'styled-components';
import {Link, Routes, Route, useParams, useNavigate} from 'react-router-dom'
import { Header } from './Header';
import { Article } from './Article';
import { Nav } from './Nav';
import { Create } from './Create';
const HeaderStyled = styled(Header)`
    border-bottom:1px solid gray;
    color:red;
`;

function Read(props) {
  const params = useParams();
  const id = Number(params.topic_id);
  const topic = props.topics.filter(e=>{
    if(e.id === id) {
      return true;
    } else {
      return false;
    }
  })[0];
  return <Article title={topic.title} body={topic.body}></Article>
}
function App() {
  const [mode,setMode] = useState('WELCOME'); //todo 삭제예정
  const [id, setId] = useState(null); //todo 삭제예정
  const [nextId, setNextId] = useState(3);
  const [topics, setTopics] = useState([
    {id:1, title:'html', body:'html is ...'},
    {id:2, title:'css', body:'css is ...'},
  ]);
  const navigate = useNavigate();
  
  return (
    <div>
      <HeaderStyled onSelect={headerHandler()}></HeaderStyled>
      <Nav data={topics}  onSelect={navHandler()}></Nav>
      <Routes>
        <Route path="/" element={<Article title="Welcome" body="Hello, WEBb!"></Article>}></Route>
        <Route path="/create" element={<Create onCreate={onCreateHandler()}></Create>}></Route>
        <Route path="/read/:topic_id" element={<Read topics={topics}></Read>}></Route>
      </Routes>
      
      <Routes>
        {['/', '/read/:topic_id', '/update/:topic_id'].map(path => {
            return <Route key={path} path={path} element= {<Control onDelete={(id) => {
              deleteHandler(id)
            }}></Control>}></Route>
        })}
      </Routes>
    </div>
  );
  function Control(props) {
      const params = useParams()
      const id = Number(params.topic_id)
      let contextUI = null;
      if (id){
        contextUI = <>
          <Button component={Link} to="/update"variant="outlined">Update</Button>
          <Button variant="outlined" onClick={() => {props.onDelete(id);}}>Delete</Button>
        </>
      }
      return <>
       <Button component={Link} to="/create" variant="outlined" onClick={createHandler()}>Create</Button>        
        {contextUI}
      </>
      
  }
  function onCreateHandler() {
    return (title, body) => {
      const newTopic = { id: nextId, title, body };
      const newTopics = [...topics];
      newTopics.push(newTopic);
      setTopics(newTopics);
      setId(nextId);
      setMode('READ');
      setNextId(nextId + 1);
    };
  }

  function navHandler() {
    return (id) => {
      setMode('READ');
      setId(id);
    };
  }

  function deleteHandler(id) {
    
      const newTopics = topics.filter((e) => {
        if (e.id === id) {
          return false;
        } else {
          return true;
        }
      });
      setMode('WELCOME');
      setTopics(newTopics);
      navigate('/')

  }

  function createHandler() {
    return () => {
      setMode('CREATE');
    };
  }

  function headerHandler() {
    return () => {
      setMode('WELCOME');
    };
  }
}

export default App;
