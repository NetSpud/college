import { ReactNode } from "react";

function Footer() {
  return (
    <div>
      <div className="bg-ekc-b4 text-white pt-8 px-8">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <div className="flex flex-col items-center lg:items-start">
              <h1 className="text-2xl font-bold">Contact Us</h1>
              <p className="text-lg">01227 811111</p>
            </div>
            <div className="flex flex-col items-center lg:items-start">
              <h1 className="text-2xl font-bold">Address</h1>
              <p className="text-lg">New Dover Rd, Canterbury, CT1 3AJ</p>
            </div>
          </div>
          <div className="flex lg:flex-row flex-col lg:justify-between items-center py-3">
            <Copyright />
            <Socials />
          </div>
        </div>
      </div>
    </div>
  );
}
function SocialIcon({ children, href }: { children: ReactNode; href?: string }) {
  return (
    <a href={href} target="_blank" className="bg-gray-900 fill-white rounded-lg p-3 cursor-pointer hover:bg-gray-600 duration-300">
      {children}
    </a>
  );
}

function Copyright() {
  return (
    <div className="lg:text-left text-center order-last lg:order-first">
      <p>&copy; {new Date().getFullYear()} EKC Canterbury College</p>
    </div>
  );
}

function Socials() {
  return (
    <div id="socials" className="flex gap-3 lg:justify-end justify-center">
      <SocialIcon href="https://www.instagram.com/ekc_canterburycollege">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
        </svg>
      </SocialIcon>
      <SocialIcon href="https://www.linkedin.com/company/ekc-canterburycollege">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect x="2" y="9" width="4" height="12" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      </SocialIcon>
      <SocialIcon href="https://www.facebook.com/ekccanterburycollege">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
      </SocialIcon>
    </div>
  );
}

export default Footer;
