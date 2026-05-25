import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Check, ArrowLeft, ChevronDown, CheckCircle2, ChevronRight, AlertCircle, Phone, Mail, MapPin } from 'lucide-react';

interface RequestQuotePageProps {
  onBack: () => void;
  initialService?: string;
}

interface CountryPreset {
  code: string;
  dialCode: string;
  flag: string;
  name: string;
}

const countryPresets: CountryPreset[] = [
  { code: 'IN', dialCode: '+91', flag: '🇮🇳', name: 'India' },
  { code: 'US', dialCode: '+1', flag: '🇺🇸', name: 'United States' },
  { code: 'DE', dialCode: '+49', flag: '🇩🇪', name: 'Germany' },
  { code: 'OM', dialCode: '+968', flag: '🇴🇲', name: 'Oman' },
  { code: 'GB', dialCode: '+44', flag: '🇬🇧', name: 'United Kingdom' },
  { code: 'CA', dialCode: '+1', flag: '🇨🇦', name: 'Canada' },
  { code: 'AU', dialCode: '+61', flag: '🇦🇺', name: 'Australia' },
];

export default function RequestQuotePage({ onBack, initialService = '' }: RequestQuotePageProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phoneCode: '+91',
    phoneNumber: '',
    service: initialService,
    message: ''
  });

  const [selectedCountry, setSelectedCountry] = useState<CountryPreset>(countryPresets[0]);
  const [countryDropdownOpen, setCountryDropdownOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const servicesList = [
    'Custom Software Development',
    'Artificial Intelligence & LLMs',
    'Cloud Native Systems',
    'Enterprise UI/UX Design',
    'Web3 & Node Infrastructure',
    'Smart Logistics & IoT'
  ];

  const handleCountrySelect = (preset: CountryPreset) => {
    setSelectedCountry(preset);
    setFormData(prev => ({ ...prev, phoneCode: preset.dialCode }));
    setCountryDropdownOpen(false);
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }
    if (!formData.service) newErrors.service = 'Please select a service';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
    }, 1500);
  };

  const checkmarks = [
    '100% customer satisfaction',
    'Provide 14 days risk-free trial',
    'Opportunity to replace the developer',
    'Helps you take your business sky-high',
    'You get the power to onboard vetted engineers',
    'Walks the extra mile to deliver a flawless project',
    'Follow result-driven and limpid app development process'
  ];

  return (
    <div className="w-full relative bg-black text-white min-h-screen pt-[120px] pb-16 overflow-hidden">
      {/* Visual background atmospheric enhancements */}
      <div className="absolute top-[5%] left-[10%] w-[500px] h-[300px] bg-emerald-500/5 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute top-[40%] right-[5%] w-[400px] h-[400px] bg-emerald-500/3 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-5 md:px-[60px] lg:px-[120px] relative z-10">
        
        {/* Navigation Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 tracking-[0.2em] mb-12 uppercase select-none">
          <button onClick={onBack} className="hover:underline flex items-center gap-1.5 cursor-pointer">
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>SPACEON HOME</span>
          </button>
          <ChevronRight className="w-3.5 h-3.5 text-white/30" />
          <span className="text-white/60">REQUEST A QUOTE</span>
        </div>

        {/* Two-Column Grid matching reference */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-stretch">
          
          {/* Left Column information: Text & Checkmarks */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-[32px] sm:text-[44px] lg:text-[52px] font-extrabold tracking-tight text-white leading-[1.15]">
                Thinking to set up <span className="text-[#00c283]">Offshore Development Center</span>
              </h1>
              <p className="text-white/70 text-[14.5px] md:text-[16px] leading-relaxed font-sans max-w-xl">
                We are happy you have taken the first step. Let's get started and discuss how we can drive digital outcomes for your business.
              </p>
            </div>

            {/* Checkmark List */}
            <div className="space-y-3.5 pt-4">
              {checkmarks.map((label, index) => (
                <div key={index} className="flex items-start gap-3.5 group">
                  <div className="w-5 h-5 rounded-full bg-[#00c283]/10 border border-[#00c283]/30 flex items-center justify-center shrink-0 mt-1">
                    <Check className="w-3 h-3 text-[#00c283]" />
                  </div>
                  <span className="text-white/90 text-[14px] leading-relaxed font-medium transition-colors duration-200 group-hover:text-white">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column information: Pure White Glass Card Form */}
          <div className="lg:col-span-6">
            <div className="bg-white rounded-[24px] p-6 sm:p-10 text-neutral-900 shadow-2xl relative overflow-visible">
              
              <div className="mb-8 select-none">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 leading-tight">
                  Got a project in mind?
                </h2>
                <p className="text-neutral-500 text-[13.5px] font-medium mt-1">
                  We guarantee to get back to you within a business day.
                </p>
              </div>

              {submitSuccess ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 px-4 text-center space-y-6"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mx-auto text-[#00c283]">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-neutral-900 tracking-tight">
                      Quote Request Received!
                    </h3>
                    <p className="text-neutral-600 text-[14px] leading-relaxed max-w-md mx-auto">
                      Thank you for submitting your project parameters. A senior solutions architect from SpaceOn has been notified and is initializing the estimation pipeline. You will receive an update shortly.
                    </p>
                  </div>

                  <div className="pt-4">
                    <button
                      onClick={() => {
                        setSubmitSuccess(false);
                        setFormData({
                          name: '',
                          email: '',
                          company: '',
                          phoneCode: '+91',
                          phoneNumber: '',
                          service: '',
                          message: ''
                        });
                      }}
                      className="px-6 py-2.5 bg-neutral-900 hover:bg-neutral-800 text-white font-bold text-xs tracking-wider uppercase transition-all rounded-full cursor-pointer"
                    >
                      Submit Another Application
                    </button>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* Your Name */}
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-neutral-700 block uppercase tracking-wide">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Enter your name *"
                      value={formData.name}
                      onChange={e => {
                        setFormData({ ...formData, name: e.target.value });
                        if (errors.name) setErrors(prev => ({ ...prev, name: '' }));
                      }}
                      className={`w-full bg-transparent border-b ${
                        errors.name ? 'border-red-500 focus:border-red-500' : 'border-neutral-200 focus:border-[#00c283]'
                      } transition-colors py-2 text-[14.5px] font-medium text-neutral-900 focus:outline-none placeholder-neutral-400`}
                    />
                    {errors.name && (
                      <p className="text-xs text-red-500 flex items-center gap-1 mt-1 font-medium">
                        <AlertCircle className="w-3 h-3" /> {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Your Email */}
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-neutral-700 block uppercase tracking-wide">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="Enter your email address *"
                      value={formData.email}
                      onChange={e => {
                        setFormData({ ...formData, email: e.target.value });
                        if (errors.email) setErrors(prev => ({ ...prev, email: '' }));
                      }}
                      className={`w-full bg-transparent border-b ${
                        errors.email ? 'border-red-500 focus:border-red-500' : 'border-neutral-200 focus:border-[#00c283]'
                      } transition-colors py-2 text-[14.5px] font-medium text-neutral-900 focus:outline-none placeholder-neutral-400`}
                    />
                    {errors.email && (
                      <p className="text-xs text-red-500 flex items-center gap-1 mt-1 font-medium">
                        <AlertCircle className="w-3 h-3" /> {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Company Name */}
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-neutral-700 block uppercase tracking-wide">
                      Company Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your company name"
                      value={formData.company}
                      onChange={e => setFormData({ ...formData, company: e.target.value })}
                      className="w-full bg-transparent border-b border-neutral-200 focus:border-[#00c283] transition-colors py-2 text-[14.5px] font-medium text-neutral-900 focus:outline-none placeholder-neutral-400"
                    />
                  </div>

                  {/* Phone Code / Number */}
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-neutral-700 block uppercase tracking-wide">
                      Your Phone
                    </label>
                    <div className="relative flex items-center gap-3 border-b border-neutral-200 focus-within:border-[#00c283] transition-colors py-1">
                      
                      {/* Flag Indicator with custom select */}
                      <div className="relative shrink-0">
                        <button
                          type="button"
                          onClick={() => setCountryDropdownOpen(!countryDropdownOpen)}
                          className="flex items-center gap-1.5 py-1 px-2 rounded hover:bg-neutral-100 transition-colors text-[14px] text-neutral-800 font-bold focus:outline-none cursor-pointer"
                        >
                          <span>{selectedCountry.flag}</span>
                          <span className="text-neutral-500 text-[13.5px] font-medium">{selectedCountry.dialCode}</span>
                          <ChevronDown className="w-3 h-3 text-neutral-400" />
                        </button>

                        {countryDropdownOpen && (
                          <div className="absolute left-0 top-full mt-1.5 w-60 max-h-56 overflow-y-auto bg-white border border-neutral-200 rounded-lg shadow-xl py-1.5 z-40">
                            {countryPresets.map((preset) => (
                              <button
                                key={preset.code}
                                type="button"
                                onClick={() => handleCountrySelect(preset)}
                                className="w-full text-left px-3 py-2 text-[13px] text-neutral-700 hover:bg-neutral-50 flex items-center justify-between font-medium cursor-pointer"
                              >
                                <span className="flex items-center gap-2">
                                  <span>{preset.flag}</span>
                                  <span>{preset.name}</span>
                                </span>
                                <span className="text-neutral-400 text-xs font-bold">{preset.dialCode}</span>
                              </button>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Phone input field */}
                      <input
                        type="tel"
                        placeholder="Your phone number"
                        value={formData.phoneNumber}
                        onChange={e => setFormData({ ...formData, phoneNumber: e.target.value })}
                        className="w-full bg-transparent py-1 text-[14.5px] font-semibold text-neutral-900 focus:outline-none placeholder-neutral-450"
                      />
                    </div>
                  </div>

                  {/* Services Selection Box */}
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-neutral-700 block uppercase tracking-wide">
                      Services *
                    </label>
                    <div className="relative border-b border-neutral-200 focus-within:border-[#00c283] transition-colors py-1">
                      <select
                        required
                        value={formData.service}
                        onChange={e => {
                          setFormData({ ...formData, service: e.target.value });
                          if (errors.service) setErrors(prev => ({ ...prev, service: '' }));
                        }}
                        className="w-full bg-transparent py-1 text-[14.5px] font-medium text-neutral-900 focus:outline-none placeholder-neutral-300 appearance-none cursor-pointer pr-8"
                      >
                        <option value="" disabled className="bg-white text-neutral-400">
                          Select your service *
                        </option>
                        {servicesList.map(ser => (
                          <option key={ser} value={ser} className="bg-white text-neutral-900 py-2">
                            {ser}
                          </option>
                        ))}
                      </select>
                      <div className="absolute right-1 top-1/2 -translate-y-1/2 pointer-events-none flex items-center gap-1 text-neutral-400">
                        {errors.service && <AlertCircle className="w-4 h-4 text-red-505" />}
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </div>
                    {errors.service && (
                      <p className="text-xs text-red-505 flex items-center gap-1 mt-1 font-semibold">
                        {errors.service}
                      </p>
                    )}
                  </div>

                  {/* Textarea How can we help? */}
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-neutral-700 block uppercase tracking-wide">
                      How can we help? *
                    </label>
                    <textarea
                      required
                      rows={3}
                      placeholder="Message *"
                      value={formData.message}
                      onChange={e => {
                        setFormData({ ...formData, message: e.target.value });
                        if (errors.message) setErrors(prev => ({ ...prev, message: '' }));
                      }}
                      className={`w-full bg-transparent border-b ${
                        errors.message ? 'border-red-500 focus:border-red-500' : 'border-neutral-200 focus:border-[#00c283]'
                      } transition-colors py-2 text-[14.5px] font-semibold text-neutral-900 focus:outline-none placeholder-neutral-400 resize-none`}
                    />
                    {errors.message && (
                      <p className="text-xs text-red-500 flex items-center gap-1 mt-1 font-medium">
                        <AlertCircle className="w-3 h-3" /> {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit interaction */}
                  <div className="pt-4 flex flex-col items-end gap-5">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-10 py-3.5 bg-[#00c283] hover:bg-[#00a871] text-white hover:text-white rounded-full font-bold text-sm uppercase transition-all shadow-[0_4px_20px_rgba(0,194,131,0.25)] hover:scale-[1.02] active:scale-98 cursor-pointer disabled:opacity-50"
                    >
                      {isSubmitting ? 'Submitting...' : 'Submit'}
                    </button>
                    
                    {/* Mail instruction */}
                    <div className="w-full text-center border-t border-neutral-100 pt-5 text-xs text-neutral-500">
                      Facing trouble in submitting form? then simply mail us on{' '}
                      <a href="mailto:info@spaceon.in" className="text-[#00c283] hover:underline font-bold">
                        info@spaceon.in
                      </a>
                    </div>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>

        {/* Audit footer credentials section block exactly matching screenshot */}
        <div className="mt-28 border-t border-white/10 pt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 select-none">
          
          {/* Project Enquiries */}
          <div className="space-y-3.5">
            <h4 className="text-[12px] font-mono tracking-widest text-[#00c283] uppercase font-bold">
              Project Enquiries
            </h4>
            <div className="space-y-1">
              <span className="text-[15px] font-bold text-white block">
                enquiry@spaceon.in
              </span>
              <a href="mailto:enquiry@spaceon.in" className="text-white/60 hover:text-white text-[13.5px] transition-colors">
                enquiry@spaceon.in
              </a>
            </div>
          </div>

          {/* Career */}
          <div className="space-y-3.5">
            <h4 className="text-[12px] font-mono tracking-widest text-[#00c283] uppercase font-bold">
              Career
            </h4>
            <div className="space-y-1">
              <span className="text-[15px] font-bold text-white block">
                +91 70691 82990
              </span>
              <a href="mailto:career@spaceon.in" className="text-white/60 hover:text-white text-[13.5px] transition-colors">
                career@spaceon.in
              </a>
            </div>
          </div>

          {/* New Business */}
          <div className="space-y-3.5">
            <h4 className="text-[12px] font-mono tracking-widest text-[#00c283] uppercase font-bold">
              New Business
            </h4>
            <div className="space-y-1">
              <span className="text-[15px] font-bold text-white block">
                contact@spaceon.in
              </span>
              <span className="text-white/50 text-xs">
                Direct Client Desk Line
              </span>
            </div>
          </div>

          {/* General Enquiries */}
          <div className="space-y-3.5">
            <h4 className="text-[12px] font-mono tracking-widest text-[#00c283] uppercase font-bold">
              General Enquiries
            </h4>
            <div className="space-y-1">
              <a href="mailto:info@spaceon.in" className="text-[15px] font-bold text-white hover:text-emerald-400 block transition-colors">
                info@spaceon.in
              </a>
              <span className="text-white/50 text-xs">
                SLA-bound updates within 24h
              </span>
            </div>
          </div>

        </div>

        {/* Global Directory list block showing offices coordinate grids */}
        <div className="mt-14 border-t border-white/5 pt-12 pb-8 text-left">
          <label className="text-[10px] font-mono tracking-wider text-white/35 block uppercase font-bold mb-5">
            Our Office
          </label>
          
          <div className="max-w-[380px]">
            {/* India Office (Kesharpura) */}
            <div className="p-5.5 bg-white/[0.01] border border-white/5 rounded-2xl hover:bg-white/[0.03] hover:border-white/10 transition-all duration-300">
              <div className="flex items-center gap-2.5 mb-3.5">
                <span className="text-xl">🇮🇳</span>
                <span className="text-xs font-mono font-bold tracking-widest text-[#00c283] uppercase">India</span>
              </div>
              <p className="text-[13px] text-white/70 font-medium leading-relaxed">
                Patel's House, 868,<br />
                near Aksa Mosque, Kesharpura,<br />
                Gujarat 383230
              </p>
              <div className="mt-4 pt-4 border-t border-white/5">
                <span className="text-[11px] font-mono text-white/45 block">
                  Office: +91 70691 82990
                </span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
