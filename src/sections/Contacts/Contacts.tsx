import { Term, TermCursor } from 'components';

export const Contacts = () => {
  return (
    <section>
      <Term heading="qalqa/Contacts">
        <TermCursor command="env" state="success" />
        <p>
          <span className={'highlight'}>EMAIL</span>=
          <a href="mailto:andreybas04@gmail.com">andreybas04@gmail.com</a>
        </p>
        <p>
          <span className={'highlight'}>GITHUB</span>=
          <a href="https://github.com/qalqaa">qalqaa</a>
        </p>
        <p>
          <span className={'highlight'}>TELEGRAM</span>=
          <a href="https://t.me/qalqaa">qalqaa</a>
        </p>
        <p>
          <span className={'highlight'}>VK</span>=
          <a href="https://vk.com/qalqaa">qalqaa</a>
        </p>
      </Term>
    </section>
  );
};
