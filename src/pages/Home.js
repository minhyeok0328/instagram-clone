import TextField from '../components/TextField';
import useInput from '../hooks/useInput';

function Home() {
  const input = useInput('');

  return (
    <div>
      <TextField {...input} placeholder='검색' />
    </div>
  );
}
export default Home;
