import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const FAQSection = () => {
  const faqItems = [
    {
      question: 'Как активировать привилегию?',
      answer: 'После оплаты привилегия активируется автоматически в течение 5 минут. Если этого не произошло - обратитесь в поддержку.'
    },
    {
      question: 'Можно ли вернуть деньги?',
      answer: 'Возврат средств возможен в течение 14 дней при наличии технических проблем с нашей стороны.'
    },
    {
      question: 'Сколько действует привилегия?',
      answer: 'Все привилегии выдаются навсегда. Вы покупаете один раз и пользуетесь постоянно.'
    },
    {
      question: 'Можно ли передать привилегию другому игроку?',
      answer: 'Нет, привилегии привязываются к вашему аккаунту и не могут быть переданы.'
    }
  ];

  return (
    <section className="container mx-auto px-4 py-16 animate-fade-in">
      <h2 className="text-5xl font-extrabold text-center text-white mb-12 minecraft-shadow">
        Часто задаваемые вопросы
      </h2>
      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="space-y-4">
          {faqItems.map((item, idx) => (
            <AccordionItem 
              key={idx} 
              value={`item-${idx}`}
              className="bg-[#2C2C2C] border-4 border-black px-6"
            >
              <AccordionTrigger className="text-white font-bold text-lg hover:text-yellow-400">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-300 text-base">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
