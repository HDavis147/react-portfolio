import Portrait from '../assets/portrait.jpg';

export default function Header () {
  return (
    <header className="fixed pt-14 top-0">
      <div className="bg-gray-800 w-screen py-6 pr-8 flex flex-wrap justify-between">
        <img src={Portrait} style={{height:"15vh"}} className="rounded-full flex outline mx-12 outline-slate-500 outline-4"/>
        <div className="flex flex-wrap justify-between items-center">
          <p>Hello, I'm Houston. I am a full-stack developer.</p>
        </div>
      </div>
    </header>
  );
}