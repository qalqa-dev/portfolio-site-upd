import { Term, TermCursor } from 'components';
import { StackBack } from './StackBack';
import { StackFront } from './StackFront';

export const Stack = () => {
  return (
    <section className={'stack mb-5 flex flex-col gap-5'}>
      <Term heading="qalqa/Stack/fe">
        <TermCursor command="neostack" state="success" postfix="--fe" />
        <StackFront />
      </Term>
      <Term className="" heading="qalqa/Stack/be">
        <TermCursor command="neostack" state="success" postfix="--be" />
        <StackBack />
      </Term>
    </section>
  );
};
