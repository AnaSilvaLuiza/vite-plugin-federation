import { Outlet } from 'react-router-dom';

export function Root() {
  return (
    <div className="min-h-screen flex bg-[#F7F9FC]">
      <main className={'grow flex flex-col pr-double pt-double pb-double pb-double pl-single-large'}>
        <Outlet />
      </main>
    </div>
  );
}

export default Root;
