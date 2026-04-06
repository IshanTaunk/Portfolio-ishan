// import ToggleButton from '@mui/material/ToggleButton';
// import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
// import WbSunnyIcon from '@mui/icons-material/WbSunny';
// import ModeNightIcon from '@mui/icons-material/ModeNight';
import Company from './components/Company';
import About from './components/About';
import AboutImage from './components/AboutImage';
import Skills from './components/Skills';
import Contacts from './components/Contacts';
import ContactsImage from './components/ContactsImage';
import { allCompanyInfo } from './constants';

//TO-DO
// Add Header bar and make it sticky
// Add scroll to inside header tabs to scroll to that section
// Add work experience modals for each company

function Section({ title, children, leftContent }) {
  return (
    <section className="grid grid-cols-1 gap-6 border-b border-white/10 py-10 md:gap-8 lg:grid-cols-[240px_minmax(0,1fr)] lg:py-14">
      <div className="lg:sticky lg:top-24 lg:self-start">
        {leftContent || (
          <h2 className="m-0 text-xl font-semibold tracking-tight text-white sm:text-2xl">
            {title}
          </h2>
        )}
      </div>
      <div className="min-w-0">{children}</div>
    </section>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <main className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-16">
        {/* Hero / Intro */}
        <section className="grid grid-cols-1 items-center gap-8 border-b border-white/10 pb-10 md:gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(320px,0.8fr)] lg:pb-16">
          <div className="order-2 lg:order-1">
            <About />
          </div>

          <div className="order-1 flex justify-center lg:order-2 lg:justify-end">
            <div className="w-full max-w-xs sm:max-w-sm md:max-w-md">
              <AboutImage />
            </div>
          </div>
        </section>

        {/* Work Experience */}
        <Section title="Work Experience">
          <div className="space-y-6 sm:space-y-8">
            {allCompanyInfo.map((companyInfo) => (
              <div key={companyInfo.companyName} className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm sm:p-6">
                <Company company={companyInfo} />
              </div>
            ))}
          </div>
        </Section>

        {/* Skills */}
        <Section title="Skills">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm sm:p-6">
            <Skills />
          </div>
        </Section>

        {/* Contact */}
        <Section
          title="Contact"
          leftContent={
            <div className="flex justify-center lg:justify-start">
              <div className="w-full max-w-[220px] sm:max-w-[260px]">
                <ContactsImage />
              </div>
            </div>
          }
        >
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm sm:p-6">
            <Contacts />
          </div>
        </Section>
      </main>
    </div>
  );
}

export default App;
