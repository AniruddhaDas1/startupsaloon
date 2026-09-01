import React, { useState, useEffect } from 'react';
import { SALON_SERVICES, STYLISTS, SALON_INFO } from '../data/salonData';
import { ServiceItem } from '../types';
import { X, Check, Calendar, Clock, User, Phone, Sparkles, CheckCircle2, ArrowRight, Scissors } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: ServiceItem | null;
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose, initialService }) => {
  const [selectedServiceIds, setSelectedServiceIds] = useState<string[]>([]);
  const [selectedStylistId, setSelectedStylistId] = useState<string>('any');
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string>('');
  const [clientName, setClientName] = useState<string>('');
  const [clientPhone, setClientPhone] = useState<string>('');
  const [clientNotes, setClientNotes] = useState<string>('');
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [step, setStep] = useState<number>(1);

  useEffect(() => {
    if (initialService) {
      setSelectedServiceIds([initialService.id]);
    } else if (selectedServiceIds.length === 0 && SALON_SERVICES.length > 0) {
      setSelectedServiceIds([SALON_SERVICES[0].id]);
    }
  }, [initialService, isOpen]);

  // Generate next 7 days for booking
  const dates = Array.from({ length: 7 }, (_, i) => {
    const d = new Date();
    d.setDate(d.getDate() + i);
    return {
      iso: d.toISOString().split('T')[0],
      dayName: i === 0 ? 'Today' : i === 1 ? 'Tomorrow' : d.toLocaleDateString('en-US', { weekday: 'short' }),
      dateFormatted: d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
    };
  });

  useEffect(() => {
    if (dates.length > 0 && !selectedDate) {
      setSelectedDate(dates[0].iso);
    }
    if (!selectedTimeSlot) {
      setSelectedTimeSlot('04:30 PM');
    }
  }, []);

  if (!isOpen) return null;

  const toggleService = (id: string) => {
    if (selectedServiceIds.includes(id)) {
      if (selectedServiceIds.length > 1) {
        setSelectedServiceIds(selectedServiceIds.filter(sId => sId !== id));
      }
    } else {
      setSelectedServiceIds([...selectedServiceIds, id]);
    }
  };

  const selectedServices = SALON_SERVICES.filter(s => selectedServiceIds.includes(s.id));
  const totalPrice = selectedServices.reduce((sum, s) => sum + s.price, 0);
  const totalDuration = selectedServices.reduce((sum, s) => {
    const mins = parseInt(s.duration) || 30;
    return sum + mins;
  }, 0);

  const selectedStylist = STYLISTS.find(st => st.id === selectedStylistId);

  const timeSlots = [
    { label: 'Morning', slots: ['10:30 AM', '11:15 AM', '12:00 PM', '12:45 PM'] },
    { label: 'Afternoon', slots: ['01:30 PM', '02:30 PM', '03:30 PM', '04:30 PM'] },
    { label: 'Evening', slots: ['05:30 PM', '06:30 PM', '07:30 PM', '08:30 PM'] },
  ];

  const handleCompleteBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientName || !clientPhone) {
      alert('Please fill in your Name and Phone number');
      return;
    }
    setIsSuccess(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-4 animate-in fade-in duration-200">
      
      <div className="relative w-full max-w-2xl bg-[#171310] border border-[#cba158]/40 shadow-2xl overflow-hidden my-6">
        
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-[#201a15] to-[#171310] px-6 py-5 border-b border-[#382d24] flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-[#cba158]/20 border border-[#cba158]/40 flex items-center justify-center text-[#cba158]">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-serif text-lg sm:text-xl font-bold text-[#f7f2ea] tracking-tight">
                Reserve Your Appointment
              </h3>
              <p className="text-[11px] text-[#cba158] font-sans tracking-wide uppercase">
                Start Up Unisex Salon • Rajarhat Shibtola
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="text-[#a8998a] hover:text-[#f7f2ea] p-1.5 rounded-full hover:bg-[#251e18] transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        {!isSuccess ? (
          <div className="p-6 max-h-[80vh] overflow-y-auto">
            
            {/* Step Indicator */}
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#29211a] text-xs">
              <span className={`font-semibold ${step >= 1 ? 'text-[#cba158]' : 'text-[#7a6b5e]'}`}>
                1. Select Services
              </span>
              <span className="text-[#4d3d30]">→</span>
              <span className={`font-semibold ${step >= 2 ? 'text-[#cba158]' : 'text-[#7a6b5e]'}`}>
                2. Stylist & Slot
              </span>
              <span className="text-[#4d3d30]">→</span>
              <span className={`font-semibold ${step >= 3 ? 'text-[#cba158]' : 'text-[#7a6b5e]'}`}>
                3. Your Info
              </span>
            </div>

            {/* STEP 1: Select Services */}
            {step === 1 && (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-serif text-[#f7f2ea]">Choose Services (Select one or more):</h4>
                  <span className="text-xs text-[#cba158]">{selectedServices.length} Selected</span>
                </div>

                <div className="space-y-2.5 max-h-72 overflow-y-auto pr-1">
                  {SALON_SERVICES.map(service => {
                    const isSelected = selectedServiceIds.includes(service.id);
                    return (
                      <div
                        key={service.id}
                        onClick={() => toggleService(service.id)}
                        className={`p-3.5 border cursor-pointer transition flex items-center justify-between gap-3 ${
                          isSelected
                            ? 'bg-[#251d17] border-[#cba158] text-[#f7f2ea]'
                            : 'bg-[#1a1613] border-[#31271f] text-[#b8a99a] hover:border-[#524134]'
                        }`}
                      >
                        <div className="flex items-start gap-3">
                          <div className={`mt-0.5 w-4 h-4 rounded flex items-center justify-center border ${
                            isSelected ? 'bg-[#cba158] border-[#cba158] text-[#14100c]' : 'border-[#4a3a2d]'
                          }`}>
                            {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                          </div>
                          <div>
                            <div className="text-xs sm:text-sm font-medium text-[#f4eee6]">{service.name}</div>
                            <div className="text-[11px] text-[#9c8d7e] flex items-center gap-2 mt-0.5">
                              <span>{service.duration}</span>
                              <span>•</span>
                              <span className="capitalize">{service.gender}</span>
                            </div>
                          </div>
                        </div>

                        <div className="text-right flex-shrink-0">
                          <div className="text-sm font-serif font-bold text-[#cba158]">₹{service.price}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Live Summary Bar */}
                <div className="p-4 bg-[#201a15] border border-[#3b2f24] flex items-center justify-between mt-4">
                  <div>
                    <span className="text-xs text-[#a39485] block">Total Estimate</span>
                    <span className="text-lg font-serif font-bold text-[#cba158]">₹{totalPrice}</span>
                    <span className="text-[11px] text-[#9e8f81] ml-2">({totalDuration} mins est.)</span>
                  </div>
                  <button
                    onClick={() => setStep(2)}
                    className="bg-[#cba158] hover:bg-[#dfb76c] text-[#14100c] text-xs font-bold uppercase tracking-wider px-5 py-2.5 flex items-center gap-1.5 transition"
                  >
                    <span>Next: Select Slot</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 2: Stylist & Date/Time */}
            {step === 2 && (
              <div className="space-y-5">
                {/* Stylist Selector */}
                <div>
                  <label className="block text-xs font-serif text-[#e5dacb] mb-2 uppercase tracking-wider">
                    Select Preferred Stylist
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                    <button
                      type="button"
                      onClick={() => setSelectedStylistId('any')}
                      className={`p-3 text-left border transition ${
                        selectedStylistId === 'any'
                          ? 'bg-[#251e18] border-[#cba158] text-[#f7f2ea]'
                          : 'bg-[#191512] border-[#31271f] text-[#a8998a] hover:border-[#4d3d30]'
                      }`}
                    >
                      <div className="text-xs font-semibold">Any Available</div>
                      <div className="text-[10px] text-[#cba158] mt-0.5">Quickest service</div>
                    </button>
                    {STYLISTS.map(st => (
                      <button
                        type="button"
                        key={st.id}
                        onClick={() => setSelectedStylistId(st.id)}
                        className={`p-2.5 text-left border transition ${
                          selectedStylistId === st.id
                            ? 'bg-[#251e18] border-[#cba158] text-[#f7f2ea]'
                            : 'bg-[#191512] border-[#31271f] text-[#a8998a] hover:border-[#4d3d30]'
                        }`}
                      >
                        <div className="text-xs font-semibold truncate">{st.name.split(' ')[0]}</div>
                        <div className="text-[10px] text-[#9e8f81] truncate">{st.experience}</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Date Chips */}
                <div>
                  <label className="block text-xs font-serif text-[#e5dacb] mb-2 uppercase tracking-wider">
                    Select Date
                  </label>
                  <div className="grid grid-cols-4 sm:grid-cols-7 gap-2">
                    {dates.map(d => (
                      <button
                        type="button"
                        key={d.iso}
                        onClick={() => setSelectedDate(d.iso)}
                        className={`p-2.5 text-center border transition ${
                          selectedDate === d.iso
                            ? 'bg-[#cba158] text-[#14100c] border-[#cba158] font-bold shadow'
                            : 'bg-[#1a1613] text-[#cfc1b2] border-[#362b22] hover:border-[#cba158]/50'
                        }`}
                      >
                        <div className="text-[10px] uppercase">{d.dayName}</div>
                        <div className="text-xs font-semibold mt-0.5">{d.dateFormatted}</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Time Slots */}
                <div>
                  <label className="block text-xs font-serif text-[#e5dacb] mb-2 uppercase tracking-wider">
                    Select Time Slot
                  </label>
                  <div className="space-y-2">
                    {timeSlots.map(group => (
                      <div key={group.label} className="bg-[#1a1613] p-2.5 border border-[#31271f]">
                        <span className="text-[10px] text-[#9c8d7e] uppercase font-semibold block mb-1.5">
                          {group.label}
                        </span>
                        <div className="grid grid-cols-4 gap-2">
                          {group.slots.map(slot => (
                            <button
                              type="button"
                              key={slot}
                              onClick={() => setSelectedTimeSlot(slot)}
                              className={`py-1.5 px-2 text-xs transition border ${
                                selectedTimeSlot === slot
                                  ? 'bg-[#cba158] text-[#14100c] border-[#cba158] font-bold'
                                  : 'bg-[#221c17] text-[#c9bcad] border-[#3a2e24] hover:border-[#cba158]/60'
                              }`}
                            >
                              {slot}
                            </button>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-[#29211a]">
                  <button
                    onClick={() => setStep(1)}
                    className="text-xs text-[#a8998a] hover:text-[#f7f2ea] underline uppercase"
                  >
                    ← Back to Services
                  </button>
                  <button
                    onClick={() => setStep(3)}
                    className="bg-[#cba158] hover:bg-[#dfb76c] text-[#14100c] text-xs font-bold uppercase tracking-wider px-5 py-2.5 flex items-center gap-1.5 transition"
                  >
                    <span>Next: Your Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 3: Client Contact Details */}
            {step === 3 && (
              <form onSubmit={handleCompleteBooking} className="space-y-4">
                <div>
                  <label className="block text-xs font-serif text-[#e5dacb] mb-1.5 uppercase tracking-wider">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-[#8a7a6c] absolute left-3 top-3" />
                    <input
                      type="text"
                      required
                      value={clientName}
                      onChange={e => setClientName(e.target.value)}
                      placeholder="e.g. Rahul Sen / Sneha Mukherjee"
                      className="w-full bg-[#1b1714] border border-[#382d24] text-[#f7f2ea] text-sm pl-9 pr-4 py-2.5 focus:border-[#cba158] focus:outline-none placeholder-[#6b5d51]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-serif text-[#e5dacb] mb-1.5 uppercase tracking-wider">
                    WhatsApp / Phone Number *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-[#8a7a6c] absolute left-3 top-3" />
                    <input
                      type="tel"
                      required
                      value={clientPhone}
                      onChange={e => setClientPhone(e.target.value)}
                      placeholder="e.g. 9830012345"
                      className="w-full bg-[#1b1714] border border-[#382d24] text-[#f7f2ea] text-sm pl-9 pr-4 py-2.5 focus:border-[#cba158] focus:outline-none placeholder-[#6b5d51]"
                    />
                  </div>
                  <span className="text-[10px] text-[#9c8d7e] mt-1 block">
                    You will receive instant appointment confirmation details on WhatsApp.
                  </span>
                </div>

                <div>
                  <label className="block text-xs font-serif text-[#e5dacb] mb-1.5 uppercase tracking-wider">
                    Special Requests / Hair Concerns (Optional)
                  </label>
                  <textarea
                    rows={2}
                    value={clientNotes}
                    onChange={e => setClientNotes(e.target.value)}
                    placeholder="e.g. Sensitive scalp, bridal consultation, prefer quiet service..."
                    className="w-full bg-[#1b1714] border border-[#382d24] text-[#f7f2ea] text-sm p-3 focus:border-[#cba158] focus:outline-none placeholder-[#6b5d51]"
                  />
                </div>

                {/* Final Order Review Box */}
                <div className="p-4 bg-[#211a15] border border-[#3b2f24] space-y-2 text-xs">
                  <div className="flex justify-between text-[#c4b5a5]">
                    <span>Appointment Slot:</span>
                    <span className="text-[#f7f2ea] font-medium">{selectedDate} at {selectedTimeSlot}</span>
                  </div>
                  <div className="flex justify-between text-[#c4b5a5]">
                    <span>Services:</span>
                    <span className="text-[#f7f2ea] font-medium text-right">{selectedServices.map(s => s.name).join(', ')}</span>
                  </div>
                  <div className="flex justify-between text-[#c4b5a5]">
                    <span>Estimated Total:</span>
                    <span className="text-[#cba158] font-serif font-bold text-sm">₹{totalPrice} (Pay at Salon)</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-[#29211a]">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="text-xs text-[#a8998a] hover:text-[#f7f2ea] underline uppercase"
                  >
                    ← Back to Slot
                  </button>
                  <button
                    type="submit"
                    className="bg-[#cba158] hover:bg-[#dfb76c] text-[#14100c] text-xs font-bold uppercase tracking-wider px-6 py-3 shadow-lg flex items-center gap-2 transition"
                  >
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Confirm Booking</span>
                  </button>
                </div>
              </form>
            )}

          </div>
        ) : (
          /* SUCCESS CONFIRMATION PASS */
          <div className="p-6 sm:p-8 text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-[#cba158]/20 border border-[#cba158] mx-auto flex items-center justify-center text-[#cba158] animate-bounce">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div>
              <h4 className="font-serif text-2xl text-[#f7f2ea] font-normal mb-1">
                Appointment Reserved!
              </h4>
              <p className="text-xs sm:text-sm text-[#b8a99a]">
                Thank you <strong className="text-[#f7f2ea]">{clientName}</strong>. Your slot has been provisionally scheduled at Start Up Unisex Salon.
              </p>
            </div>

            {/* Digital Pass */}
            <div className="bg-[#201a15] border border-[#cba158]/50 p-5 text-left text-xs space-y-3 relative">
              <div className="flex justify-between border-b border-[#3b2f24] pb-2 font-serif text-[#cba158] text-sm">
                <span>START UP SALON PASS</span>
                <span>#{Math.floor(100000 + Math.random() * 900000)}</span>
              </div>
              <div className="grid grid-cols-2 gap-3 text-[#c9bcad]">
                <div>
                  <span className="text-[10px] text-[#8c7e71] block">DATE & TIME</span>
                  <span className="text-sm font-semibold text-[#f7f2ea]">{selectedDate} @ {selectedTimeSlot}</span>
                </div>
                <div>
                  <span className="text-[10px] text-[#8c7e71] block">LOCATION</span>
                  <span className="text-xs text-[#f7f2ea]">Rajarhat Shibtola</span>
                </div>
              </div>
              <div className="border-t border-[#3b2f24] pt-2">
                <span className="text-[10px] text-[#8c7e71] block">SELECTED SERVICES</span>
                <span className="text-xs text-[#f7f2ea] font-medium">{selectedServices.map(s => s.name).join(' + ')}</span>
              </div>
              <div className="flex justify-between pt-1 text-[#cba158] font-bold">
                <span>Total Amount:</span>
                <span>₹{totalPrice}</span>
              </div>
            </div>

            {/* Actions for Confirmed Booking */}
            <div className="space-y-3">
              <a
                href={`tel:${SALON_INFO.phone}`}
                className="w-full py-3.5 bg-[#cba158] hover:bg-[#dfb76c] text-[#14100c] font-bold text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg transition"
              >
                <Phone className="w-4 h-4" />
                <span>Call Salon to Fast-Track ({SALON_INFO.phone})</span>
              </a>

              <a
                href={SALON_INFO.gmapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 bg-[#241e1a] hover:bg-[#332b24] text-[#f4eee6] border border-[#3d3126] font-medium text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition"
              >
                <span>View Salon Location on Google Maps</span>
              </a>

              <button
                onClick={onClose}
                className="text-xs text-[#a8998a] hover:text-[#cba158] underline block mx-auto pt-2 cursor-pointer"
              >
                Close & Return to Website
              </button>
            </div>

          </div>
        )}

      </div>
    </div>
  );
};
