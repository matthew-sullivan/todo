import { useEffect } from 'react';
import EntryForm from './EntryForm';
import List from './List';
import CompleteList from './CompleteList';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { useGlobalContext } from './context';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    maxWidth: 500,
    position: 'absolute', left: '30%', top: '50%',
    transform: 'translate(-45%, -50%)',
  },
  root2: {
    minWidth: 275,
    maxWidth: 500,
    position: 'absolute', left: '60%', top: '50%',
    transform: 'translate(-45%, -50%)',
  },
  title: {
    fontSize: 20,
    position: 'relative', left: '25%',
  },
  title2: {
    fontSize: 20,
    position: 'relative', left: '35%',
  },
  pos: {
    marginBottom: 12,
  },
});

function App() {
  const { handleSubmit } = useGlobalContext();
  const classes = useStyles();
  return (
    <>
      <Card className={classes.root}>
        <div onClick={handleSubmit}>
        <p className={classes.title}>To do or Not to do</p>
        <CardContent >
        <EntryForm />
          </CardContent >
        </div>
          <CardContent >
        <List />
        </CardContent>
      </Card>
      <Card className={classes.root2} >
        <p className={classes.title2}>Completed</p>
        <CardContent >
          <CompleteList />
        </CardContent>
      </Card>
    </>
  );
}

export default App;

