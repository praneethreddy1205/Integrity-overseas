
import React from 'react';

const allEvents = [
  { title: 'Global Education Fair 2024', date: 'Sept 15', type: 'Physical Event', location: 'Mumbai HQ', time: '10:00 AM - 5:00 PM', country: 'Global' },
  { title: 'Study in USA Webinar', date: 'Sept 18', type: 'Virtual Session', location: 'Zoom Cloud', time: '6:30 PM', country: 'USA' },
  { title: 'Scholarships Masterclass', date: 'Sept 22', type: 'Online Workshop', location: 'YouTube Live', time: '4:00 PM', country: 'Global' },
  { title: 'UK University Admissions Day', date: 'Oct 05', type: 'Physical Event', location: 'London House, Delhi', time: '11:00 AM', country: 'UK' },
  { title: 'Canada Visa Info Session', date: 'Oct 08', type: 'Virtual Session', location: 'MS Teams', time: '5:30 PM', country: 'Canada' },
  { title: 'UK Student Visa Workshop', date: 'Oct 12', type: 'Virtual Session', location: 'Webinar', time: '5:00 PM', country: 'UK' },
  { title: 'Australia Admission Fair', date: 'Oct 15', type: 'Physical Event', location: 'Sydney Hall, Pune', time: '10:00 AM', country: 'Australia' },
  { title: 'Germany APS Assistance Day', date: 'Oct 18', type: 'Special Workshop', location: 'Berlin Center, Bangalore', time: '11:00 AM', country: 'Germany' },
  { title: 'Russell Group Universities Meet', date: 'Oct 20', type: 'Exclusive Meet', location: 'Bangalore HQ', time: '10:00 AM', country: 'UK' },
];

interface UpcomingEventsProps {
  view?: string;
}

const UpcomingEvents: React.FC<UpcomingEventsProps> = ({ view = 'global' }) => {
  const events = view === 'global'
    ? allEvents.filter(e => e.country === 'Global' || e.country === 'UK' || e.country === 'USA').slice(0, 3)
    : allEvents.filter(e => e.country.toLowerCase() === view.toLowerCase());

  if (events.length === 0 && view !== 'global') return null;

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl text-center md:text-left">
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl mb-4">
              {view === 'global' ? 'Upcoming Global Fairs' : <span className="uppercase">Upcoming {view} Events</span>}
            </h2>
            <p className="text-slate-500 text-lg">
              {view === 'global'
                ? 'Meet university delegates from across the world and clear your doubts directly.'
                : <span>Meet delegates from top <span className="uppercase">{view}</span> universities and get on-the-spot assessments.</span>}
            </p>
          </div>
          <button className="bg-white border border-slate-200 px-6 py-3 rounded-xl font-bold hover:bg-slate-50 transition-all shadow-sm">
            View Calendar
          </button>
        </div>

        <div className="space-y-4">
          {events.map((event, i) => (
            <div key={i} className="group bg-white p-6 md:p-8 rounded-3xl border border-slate-100 flex flex-col md:flex-row items-center justify-between hover:shadow-xl transition-all gap-8 animate-fadeIn">
              <div className="flex flex-col md:flex-row items-center gap-8 w-full md:w-auto">
                <div className="flex-shrink-0 w-20 h-20 bg-primary rounded-2xl flex flex-col items-center justify-center text-white text-center shadow-lg shadow-primary/10">
                  <span className="text-[10px] uppercase font-black opacity-70">{event.date.split(' ')[0]}</span>
                  <span className="text-2xl font-black">{event.date.split(' ')[1]}</span>
                </div>
                <div className="text-center md:text-left">
                  <span className={`text-[10px] uppercase font-black tracking-widest ${event.country === 'UK' ? 'text-red-600 bg-red-50' : 'text-primary bg-primary/5'} px-3 py-1 rounded-full mb-3 inline-block`}>
                    {event.type}
                  </span>
                  <h3 className="text-xl md:text-2xl font-bold text-slate-900">{event.title}</h3>
                  <p className="text-slate-400 text-sm mt-1 flex items-center justify-center md:justify-start gap-2">
                    <i className="fa-solid fa-location-dot"></i> {event.location} • <i className="fa-solid fa-clock ml-2"></i> {event.time}
                  </p>
                </div>
              </div>
              <button className="w-full md:w-auto bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold hover:bg-primary transition-all flex items-center justify-center gap-2">
                Register Free <i className="fa-solid fa-calendar-plus"></i>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;
