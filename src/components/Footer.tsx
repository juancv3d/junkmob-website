import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  return (
    <footer className="bg-primary-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src={`${basePath}/junkmob-removebg-preview.png`}
                alt="Junk Mob"
                width={60}
                height={60}
                className="rounded-full"
              />
              <div>
                <h3 className="font-bold text-2xl">JUNK MOB</h3>
                <p className="text-primary-light text-sm">
                  We Make Your Junk Disappear
                </p>
              </div>
            </div>
            <p className="text-gray-300 max-w-md mt-4">
              Professional junk removal services for homes and businesses.
              Fast, affordable, and eco-friendly. We handle the heavy lifting
              so you don&apos;t have to.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4 text-accent-gold">
              Service Areas
            </h4>
            <ul className="space-y-2 text-gray-300">
              <li>Pierce County</li>
              <li>Tacoma</li>
              <li>Lakewood</li>
              <li>Puyallup</li>
              <li>Federal Way</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4 text-accent-gold">
              Contact
            </h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link href="tel:+19546554193" className="hover:text-white transition-colors">
                  (954) 655-4193
                </Link>
              </li>
              <li>
                <Link href="mailto:junkmob99@gmail.com" className="hover:text-white transition-colors">
                  junkmob99@gmail.com
                </Link>
              </li>
              <li className="pt-4">
                <div className="flex gap-4">
                  <Link href="#" className="hover:text-accent-gold transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </Link>
                  <Link href="#" className="hover:text-accent-gold transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12.017 24c6.624 0 11.99-5.367 11.99-11.987C24.007 5.367 18.641 0 12.017 0z" />
                    </svg>
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Junk Mob. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
