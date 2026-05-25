import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Send, CheckCircle2, Cpu, ShieldAlert, Sparkles, Server } from 'lucide-react';
import { ConsultationForm } from '../types';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export default function ConsultationModal({ isOpen, onClose, initialService = 'Artificial Intelligence & LLMs' }: ConsultationModalProps) {
  const [formData, setFormData] = useState<ConsultationForm>({
    name: '',
    email: '',
    company: '',
    service: initialService,
    budget: '$100,000 - $250,000',
    description: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submissionCode, setSubmissionCode] = useState('');
  const [submitError, setSubmitError] = useState<string | null>(null);

  const services = [
    'Custom Software Development',
    'Artificial Intelligence & LLMs',
    'Cloud Native Systems',
    'Enterprise UI/UX Design',
    'Web3 & Node Infrastructure',
    'Smart Logistics & IoT'
  ];

  const budgets = [
    '< $50,000 USD',
    '$50,000 - $100,000 USD',
    '$100,000 - $250,000 USD',
    '$250,000 - $500,000 USD',
    '$500,000+ USD'
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const fullMessage = `Budget Constraints: ${formData.budget}\n\nTechnical Specifications:\n${formData.description || 'No description provided.'}`;
      const response = await fetch('/api/send-enquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company,
          phoneCode: '',
          phoneNumber: '',
          service: formData.service || 'Brief Consultation Request',
          message: fullMessage,
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitSuccess(true);
        const uuid = 'SO-' + Math.floor(100000 + Math.random() * 900000);
        setSubmissionCode(uuid);
      } else {
        setSubmitError(data.error || 'Server rejected the briefing packet. Please try again.');
      }
    } catch (err) {
      console.error('Inbound brief delivery failed:', err);
      setSubmitError('Failed to establish contact with the mail server. Please check your connection.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      company: '',
      service: initialService,
      budget: '$100,000 - $250,000',
      description: ''
    });
    setSubmitSuccess(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: 'spring', damping: 25, stiffness: 350 }}
            className="relative w-full max-w-2xl bg-[#080808] border border-white/15 rounded-2xl overflow-hidden shadow-2xl z-10"
          >
            {/* Top light bar */}
            <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/40 to-transparent blur-[0.5px]" />

            {/* Modal Header */}
            <div className="p-6 border-b border-white/5 flex items-center justify-between">
              <div>
                <span className="text-[10px] font-mono tracking-[0.2em] text-white/40 uppercase block mb-1">
                  Engine Room Interaction
                </span>
                <h2 className="text-xl font-semibold text-white tracking-tight">
                  Brief Digital Engineering Group
                </h2>
              </div>
              <button
                onClick={onClose}
                className="p-1 rounded-lg text-white/50 hover:text-white hover:bg-white/5 transition-all duration-200"
                id="close-consultation-btn"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 max-h-[75vh] overflow-y-auto">
              {!submitSuccess ? (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {submitError && (
                    <motion.div 
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-3.5 bg-red-500/10 border border-red-500/30 rounded-xl text-red-400 text-xs font-semibold flex items-start gap-2.5 leading-relaxed"
                    >
                      <ShieldAlert className="w-5 h-5 shrink-0 mt-0.5 text-red-400" />
                      <span>{submitError}</span>
                    </motion.div>
                  )}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-medium text-white/60 mb-2 tracking-wider uppercase font-mono">
                        Primary Consul / Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Alexander Vance"
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder-white/20 text-[14px] focus:outline-none focus:border-white/30 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-white/60 mb-2 tracking-wider uppercase font-mono">
                        Electronic Mail / Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. alexander@client.io"
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder-white/20 text-[14px] focus:outline-none focus:border-white/30 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-medium text-white/60 mb-2 tracking-wider uppercase font-mono">
                        Company Name
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="e.g. Vance Research Inc."
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder-white/20 text-[14px] focus:outline-none focus:border-white/30 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-white/60 mb-2 tracking-wider uppercase font-mono">
                        Target Venture / Budget
                      </label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full bg-black border border-white/10 rounded-lg px-4 py-2.5 text-white font-sans text-[14px] focus:outline-none focus:border-white/30 transition-colors cursor-pointer"
                      >
                        {budgets.map((b) => (
                          <option key={b} value={b} className="bg-black text-white">
                            {b}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-white/60 mb-2 tracking-wider uppercase font-mono">
                      Selected Solution Focus
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {services.map((item) => (
                        <button
                          key={item}
                          type="button"
                          onClick={() => setFormData({ ...formData, service: item })}
                          className={`px-3 py-2 text-[12px] font-medium rounded-lg text-left transition-all duration-200 border ${
                            formData.service === item
                              ? 'bg-white text-black border-white'
                              : 'bg-white/[0.02] text-white/60 border-white/5 hover:border-white/15 hover:text-white'
                          }`}
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-white/60 mb-2 tracking-wider uppercase font-mono">
                      Project Objective & Architectural Goals
                    </label>
                    <textarea
                      rows={4}
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      placeholder="Outline target specs, scale requirements, design focus, or system constraints..."
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/20 text-[14px] focus:outline-none focus:border-white/30 transition-colors resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full relative scale-100 hover:scale-[1.01] transition-all duration-300 active:scale-95 group focus:outline-none disabled:opacity-50"
                    >
                      {/* Outer Border with top glow streak */}
                      <div className="rounded-xl border-[0.6px] border-white/50 bg-white/5 overflow-hidden p-[1px]">
                        {/* Top line reflection */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[90%] h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent blur-[0.5px] pointer-events-none" />
                        
                        {/* High density button fill */}
                        <div className="rounded-xl bg-white text-black font-semibold text-[14px] py-3 px-6 flex items-center justify-center gap-2 group-hover:bg-neutral-100 transition-colors">
                          {isSubmitting ? (
                            <>
                              <div className="w-4 h-4 rounded-full border-2 border-black border-t-transparent animate-spin" />
                              <span>Hashing Specifications...</span>
                            </>
                          ) : (
                            <>
                              <Send className="w-4 h-4" />
                              <span>Transmit Briefing Request</span>
                            </>
                          )}
                        </div>
                      </div>
                    </button>
                  </div>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-8 px-4 text-center space-y-6"
                >
                  <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mx-auto text-white">
                    <CheckCircle2 className="w-8 h-8 text-neutral-100" />
                  </div>
                  
                  <div className="space-y-2">
                    <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-white/40">
                      Transmission Established
                    </span>
                    <h3 className="text-2xl font-semibold text-white tracking-tight">
                      Specifications Engaged
                    </h3>
                    <p className="text-white/60 text-[14px] max-w-md mx-auto">
                      Thank you. Your request brief has been secured and routed to our principal software engineering team. We typically verify parameters within 12 hours.
                    </p>
                  </div>

                  <div className="bg-white/[0.02] border border-white/5 rounded-xl p-5 max-w-sm mx-auto space-y-3 font-mono text-[12px] text-left">
                    <div className="flex justify-between">
                      <span className="text-white/40">SECURE ID:</span>
                      <span className="text-white font-semibold">{submissionCode}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/40">FOCUS SOLUTION:</span>
                      <span className="text-white">{formData.service}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/40">STATUS LEVEL:</span>
                      <span className="text-green-400 flex items-center gap-1.5 font-semibold">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-ping inline-block" />
                        INGESTED / QUEUED
                      </span>
                    </div>
                  </div>

                  <div className="flex justify-center gap-3 pt-4">
                    <button
                      type="button"
                      onClick={resetForm}
                      className="px-4 py-2 border border-white/10 rounded-lg text-white/60 hover:text-white hover:bg-white/5 transition-all text-sm font-medium"
                    >
                      Back to Specifications
                    </button>
                    <button
                      type="button"
                      onClick={onClose}
                      className="px-5 py-2 bg-white text-black hover:bg-neutral-100 rounded-lg text-sm font-medium transition-all"
                    >
                      Acknowledge & Close
                    </button>
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
