import db from '../db.json';
import Widget from '../src/components/Widget';
import Button from '../src/components/Button';
import Input from '../src/components/Input';

import { useRouter } from 'next/router';


export default function Home() {
  const router = useRouter();
  const [name, setName] = React.useState('');



  return (
    <>
        <Widget>
          <Widget.Header>
            <h1>{db.title}</h1>
          </Widget.Header>
          <Widget.Content>
            <p>{db.description}</p>
            <form onSubmit={(e) => {
              e.preventDefault();
              router.push(`/quiz?nome=${name}`)
            }

            }>
              <Input 
                name="userName"
                onChange={(e) => setName(e.target.value)}
                placeholder="Digite seu nome" 
                value={name}
                />
              <Button type="submit" disabled={name.length === 0}>
                {`Jogar como ${name}`}
              </Button>
            </form>
          </Widget.Content>
        </Widget>
            
    </>

  );
}
