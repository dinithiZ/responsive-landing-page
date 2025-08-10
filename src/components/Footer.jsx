import logo from "../assets/logo.png";

export default function Footer() {
  return (
    <>
      <style>{`
        /* At 1200px and above, 1 row 3 cols */
        @media (min-width: 1200px) {
          .footer-grid {
            display: grid !important;
            grid-template-columns: repeat(3, 1fr) !important;
            grid-template-rows: 1fr !important;
            gap: 2rem;
          }
          .footer-logo {
            grid-column: 1 / 2 !important;
            grid-row: 1 / 2 !important;
          }
          .footer-tech {
            grid-column: 2 / 3 !important;
            grid-row: 1 / 2 !important;
          }
          .footer-services {
            grid-column: 3 / 4 !important;
            grid-row: 1 / 2 !important;
          }
        }

        /* At 768px to 1199px, 2 rows 2 cols */
        @media (min-width: 768px) and (max-width: 1199px) {
          .footer-grid {
            display: grid !important;
            grid-template-columns: repeat(2, 1fr) !important;
            grid-template-rows: repeat(2, auto) !important;
            gap: 2rem;
          }
          .footer-logo {
            grid-column: 1 / 3 !important; /* spans both columns */
            grid-row: 1 / 2 !important;
          }
          .footer-tech {
            grid-column: 1 / 2 !important;
            grid-row: 2 / 3 !important;
          }
          .footer-services {
            grid-column: 2 / 3 !important;
            grid-row: 2 / 3 !important;
          }
        }
      `}</style>

      <footer className="bg-[#4f46e5] text-white py-10">
        <div
          className="container mx-auto px-4 grid grid-cols-1 gap-8 footer-grid"
        >
          {/* Logo & About */}
          <div className="flex flex-col items-start text-left footer-logo">
            <img
              src={logo}
              alt="Logo"
              className="h-8 w-auto xs:h-10 lg:h-12"
            />
            <p className="mt-2 text-sm max-w-xs lg:max-w-sm">
              Your goal is our target. Not anything in between. We use online
              marketing platforms and tools to achieve a single objective — your business results.
            </p>
          </div>

          {/* Technologies */}
          <div className="flex flex-col items-start text-left footer-tech">
            <h4 className="font-semibold text-base lg:text-lg">Our Technologies</h4>
            <ul className="mt-2 space-y-2 text-sm lg:text-base">
              <li>ReactJS</li>
              <li>Gatsby</li>
              <li>NextJS</li>
              <li>NodeJS</li>
            </ul>
          </div>

          {/* Services */}
          <div className="flex flex-col items-start text-left footer-services">
            <h4 className="font-semibold text-base lg:text-lg">Our Services</h4>
            <ul className="mt-2 space-y-2 text-sm lg:text-base">
              <li>Social Media Marketing</li>
              <li>Web & Mobile App Development</li>
              <li>Data & Analytics</li>
            </ul>
          </div>
        </div>

        {/* Divider & Bottom Text */}
        <div className="text-center text-xs mt-8 pt-4">
          <div className="border-t border-white mx-auto w-[300px] sm:w-[300px] md:w-[500px] lg:w-[630px]"></div>
          <p className="mt-2">Privacy Policy | Terms & Conditions</p>
        </div>
      </footer>
    </>
  );
}
