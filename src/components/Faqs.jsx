import { Container } from '@/components/Container'

const faqs = [
  [
    {
      question: 'How can I be a sender or courier on your platform?',
      answer:
        'You have to sign-up and pass our know your customer (KYC) verification.',
    },
    {
      question: 'How many countries do you operate in?',
      answer:
        'We only support uni-directional delivery i.e. diaspora to home country. We currently support delivery from United Kingdom to Nigeria.',
    },
    {
      question: 'How do I drop my item(s) with the traveller/courier?',
      answer:
        'You can drop it in person at your designated location or our designated locations.',
    },
  ],
  [
    {
      question: 'Do you have designated delivery locations?',
      answer:
        'Yes, we do. We have a growing list of shops in the UK. If there are no shops around you, you will have to hand over the item to the traveller/courier in person.',
    },
    {
      question: 'How do I package it?',
      answer:
        'The package must be properly labelled with receiver’s details. Try as much as possible to avoid items that get damaged upon impact.',
    },
    {
      question: 'Can the traveller/courier check my items?',
      answer:
        'Yes, the traveller/courier is obligated to physically access the items to confirm its content.',
    },
  ],
  [
    {
      question: 'What items do you support?',
      answer:
        'Cloths, foot wears, books, and small gadgets like phones, tabs, PC etc. We do not support biodegradable items, foods, liquids, drugs and medications, weapons etc. See our terms and conditions for a full list of prohibited items.',
    },
    {
      question: 'How expensive are you?',
      answer:
        'Comparatively, we are the cheapest on the block. You won’t find any cheaper delivery services than us.',
    },
    {
      question: 'What if something happens to my item(s)?',
      answer:
        'We will be responsible for it. We cap the amount we can pay in damages to a maximum of $250. Please see our terms and conditions for more information.',
    },
  ],
  [
    {
      question: 'Can I be a sender and courier at the same time?',
      answer:
      'Absolute yes. You can be either or both at the same time.',
    },
    {
      question: 'As a sender, how will I deliver the item(s) to the recipient?',
      answer:
      'We will collect the item(s) from you at the Muritala Mohammed International airport and deliver to the doorstep of the receiver.',
    },
    {
      question: 'What incentive do I get as a courier for you?',
      answer: 
      'You will be paid 60% of the delivery fee.',
    },
  ],
]

export function Faqs() {
  return (
    <section
      id="faqs"
      aria-labelledby="faqs-title"
      className="border-t border-gray-200 py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faqs-title"
            className="text-3xl font-medium tracking-tight text-gray-900"
          >
            Frequently asked questions
          </h2>
          <p className="mt-2 text-lg text-gray-600">
          Find commonly asked questions and their answers below. {' '}
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:max-w-none lg:grid-cols-3"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="space-y-10">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="text-lg font-semibold leading-6 text-gray-900">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-gray-700">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
