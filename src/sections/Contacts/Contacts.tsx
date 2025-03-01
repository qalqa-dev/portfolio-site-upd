import { GithubIcon } from '@/assets/svgs/GithubIcon';
import { TelegramIcon } from '@/assets/svgs/TelegramIcon';
import { VkIcon } from '@/assets/svgs/VkIcon';
import { Term, TermCursor } from 'components';

export const Contacts = () => {
  return (
    <section>
      <Term heading="qalqa/Contacts">
        <TermCursor
          command="tr"
          prefix="'\n' ' ' <"
          text="contacts_qalqa.md"
          state="success"
        />
        <a href="mailto:andreybas04@gmail.com" className="flex gap-1">
          <span className={'highlight flex items-center gap-3'}>
            <i>✉️</i>Email:{' '}
          </span>
          andreybas04@gmail.com
        </a>
        <a href="https://github.com/qalqaa" className="flex gap-1">
          <span className="highlight flex items-center gap-3">
            <GithubIcon width={'1.25rem'} height={'1.25rem'} />
            Github:{' '}
          </span>
          qalqaa
        </a>
        <a href="https://t.me/qalqaa" className="flex gap-1">
          <span className={'highlight flex items-center gap-3'}>
            <TelegramIcon width={'1rem'} height={'1rem'} />
            Telegram:{' '}
          </span>
          qalqaa
        </a>
        <a href="https://vk.com/qalqaa" className="flex gap-1">
          <span className={'highlight flex items-center gap-3'}>
            <VkIcon width={'1rem'} height={'1rem'} /> VK:{' '}
          </span>
          qalqaa
        </a>
      </Term>
    </section>
  );
};
