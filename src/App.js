import { useEffect } from 'react';
import EntryForm from './EntryForm';
import List from './List';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { useGlobalContext } from './context';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    maxWidth: 500,
    position: 'absolute', left: '50%', top: '50%',
    transform: 'translate(-45%, -50%)',
  },
  title: {
    fontSize: 20,
    position: 'relative', left: '25%',
  },
  pos: {
    marginBottom: 12,
  },
});

function App() {
  const { handleSubmit } = useGlobalContext();
  const classes = useStyles();
  return (
    <Card className={classes.root} onClick={handleSubmit}>
      <p className={classes.title}>To do or Not to do</p>
      <CardContent >
      <EntryForm />
        </CardContent >
        <CardContent >
      <List />
      </CardContent>
    </Card>
  );
}

export default App;

