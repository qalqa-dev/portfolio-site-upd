import { Dock, Settings, Wallpapers } from 'components';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router';
import { RootState } from 'store';

const BaseLayout = () => {
  const wallpapers = useSelector(
    (state: RootState) => state.settings.wallpapers,
  );
  return (
    <>
      <header>
        <Dock />
      </header>
      <Wallpapers imageUrl={wallpapers} />
      <Settings />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default BaseLayout;
