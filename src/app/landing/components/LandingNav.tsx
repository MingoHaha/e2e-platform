import Link from 'next/link';
export default function LandingNav() {

  return (
    <nav className="flex justify-between items-center px-10 py-5">
      <h1 className="text-xl font-bold">InternConnect</h1>
      <div className="space-x-10">
        <a href="#" className="text-white">People</a>
        <Link href="/landing/jobs">
            <button>Jobs</button>
        </Link>
        <a href="#" className="text-white">Companies</a>
        <a href="#" className="text-white">STI Hiring</a>
        <a href="#" className="font-bold">Employer’s Sign-up</a>
        <button className="bg-white text-[#5D4AB1] px-4 py-2 rounded-md font-semibold">Sign in</button>
      </div>
    </nav>
  );
}
