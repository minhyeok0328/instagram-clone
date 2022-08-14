import TextField from '@components/TextField';
import useInput from '@hooks/useInput';

function Main() {
  const input = useInput('');

  return (
    <div>
      <TextField search={true} placeholder="hello?" {...input} />
    </div>
  );
}

export default Main;
