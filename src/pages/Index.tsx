import { useState } from 'react';
import Navigation from '@/components/Navigation';
import HomeSection from '@/components/HomeSection';
import DonateSection from '@/components/DonateSection';
import PrivilegesSection from '@/components/PrivilegesSection';
import RulesSection from '@/components/RulesSection';
import FAQSection from '@/components/FAQSection';
import ContactsSection from '@/components/ContactsSection';
import { servers, privilegesByServer } from '@/data/privilegesData';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedServer, setSelectedServer] = useState('anarchy');

  const privileges = privilegesByServer[selectedServer] || privilegesByServer.survival;

  return (
    <div className="min-h-screen">
      <Navigation activeSection={activeSection} onSectionChange={setActiveSection} />

      <div className="pt-24 pb-16">
        {activeSection === 'home' && <HomeSection onSectionChange={setActiveSection} />}
        
        {activeSection === 'donate' && (
          <DonateSection 
            servers={servers}
            selectedServer={selectedServer}
            onServerChange={setSelectedServer}
            privileges={privileges}
          />
        )}
        
        {activeSection === 'privileges' && <PrivilegesSection />}
        
        {activeSection === 'rules' && <RulesSection />}
        
        {activeSection === 'faq' && <FAQSection />}
        
        {activeSection === 'contacts' && <ContactsSection />}
      </div>

      <footer className="bg-[#1A1A1A] border-t-4 border-black py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400 font-medium">© 2024 Mellicemo-Craft. Все права защищены.</p>
          <p className="text-gray-500 text-sm mt-2">Сервер не является официальным проектом Mojang Studios</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;