
import { Container } from '@mui/material';
import { TaskManager } from './components/TaskManager';
import { Nav } from './components/AppBar';

function App() {
  return (
    <>
      <Nav />
      <Container sx={{ marginTop: 4 }}>
        <TaskManager />
      </Container>
    </>
  );
}

export default App;
