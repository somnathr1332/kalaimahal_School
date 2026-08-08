import React from 'react';
import SEO from '../components/ui/SEO';
import { useForm } from 'react-hook-form';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from 'lucide-react';
import PageBanner from '../components/layout/PageBanner';
import SectionHeading from '../components/ui/SectionHeading';
import schoolInfo from '../data/schoolInfo.json';

export default function Contact() {
  const { register, handleSubmit, reset, formState: { errors, isSubmitSuccessful } } = useForm();

  const onSubmit = (data) => {
    const text = `New Contact Form Submission:%0A%0AName: ${data.name}%0AEmail: ${data.email}%0APhone: ${data.phone}%0ASubject: ${data.subject}%0AMessage:%0A${data.message}`;
    const whatsappUrl = `https://wa.me/919360293815?text=${text}`;
    window.open(whatsappUrl, '_blank');
    reset(); // reset form after sending
  };

  return (
    <>
      <SEO 
        title="Contact Us"
        description="Get in touch with Kalaimahal School office, admissions helpdesk, or principal. Location, phones, and email address."
        path="/contact"
      />

      <PageBanner
        title="Contact Us"
        subtitle="Get in touch with us for enquiries, campus visits, or admissions help"
        breadcrumbs={[{ label: 'Contact Us' }]}
      />

      <section className="section-padding bg-background dark:bg-dark-bg">
        <div className="section-container">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Details Column */}
            <div className="space-y-6">
              <div className="glass p-6 rounded-2xl flex gap-4 items-start">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-heading dark:text-dark-heading font-heading text-sm mb-1">Our Location</h3>
                  <p className="text-xs text-text dark:text-dark-text leading-relaxed">
                    {schoolInfo.address.street},<br />
                    {schoolInfo.address.area},<br />
                    {schoolInfo.address.city} - {schoolInfo.address.pincode},<br />
                    {schoolInfo.address.state}, India
                  </p>
                </div>
              </div>

              <div className="glass p-6 rounded-2xl flex gap-4 items-start">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-heading dark:text-dark-heading font-heading text-sm mb-1">Call Us</h3>
                  {schoolInfo.contact.phone.map(phone => (
                    <a key={phone} href={`tel:${phone.replace('-', '')}`} className="block text-xs text-text dark:text-dark-text hover:text-primary transition mt-0.5">
                      {phone}
                    </a>
                  ))}
                </div>
              </div>

              <div className="glass p-6 rounded-2xl flex gap-4 items-start">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                  <Mail size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-heading dark:text-dark-heading font-heading text-sm mb-1">Email Addresses</h3>
                  <a href={`mailto:${schoolInfo.contact.email}`} className="block text-xs text-text dark:text-dark-text hover:text-primary transition break-all">
                    Principal: {schoolInfo.contact.email}
                  </a>
                  <a href={`mailto:${schoolInfo.contact.adminEmail}`} className="block text-xs text-text dark:text-dark-text hover:text-primary transition break-all mt-1">
                    Administration: {schoolInfo.contact.adminEmail}
                  </a>
                </div>
              </div>

              <div className="glass p-6 rounded-2xl flex gap-4 items-start">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                  <Clock size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-heading dark:text-dark-heading font-heading text-sm mb-1">Office Hours</h3>
                  <p className="text-xs text-text dark:text-dark-text leading-relaxed">
                    {schoolInfo.timings.workingDays}<br />
                    {schoolInfo.timings.officeHours}
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form Column */}
            <div className="lg:col-span-2">
              <div className="bg-white dark:bg-dark-card border border-gray-200 dark:border-dark-border rounded-2xl p-6 md:p-8 shadow-sm">
                <h3 className="text-xl font-bold font-heading text-heading dark:text-dark-heading mb-4">Send Us a Message</h3>

                {isSubmitSuccessful ? (
                  <div className="p-8 text-center bg-primary/5 rounded-xl border border-primary/20">
                    <CheckCircle2 size={48} className="mx-auto text-primary mb-3" />
                    <h4 className="text-lg font-semibold text-heading dark:text-dark-heading mb-2">Message Sent!</h4>
                    <p className="text-sm text-text dark:text-dark-text max-w-sm mx-auto mb-4">
                      Thank you for contacting us. Our representative will get back to you shortly.
                    </p>
                    <button onClick={() => reset()} className="btn-primary py-2 text-xs">
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-xs font-semibold text-text dark:text-dark-text mb-1">Full Name *</label>
                        <input
                          type="text"
                          id="name"
                          className="w-full px-3.5 py-2.5 rounded-lg border border-gray-200 dark:border-dark-border bg-transparent text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                          {...register('name', { required: 'Name is required' })}
                        />
                        {errors.name && <p className="text-[11px] text-red-500 mt-1">{errors.name.message}</p>}
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-xs font-semibold text-text dark:text-dark-text mb-1">Email Address *</label>
                        <input
                          type="email"
                          id="email"
                          className="w-full px-3.5 py-2.5 rounded-lg border border-gray-200 dark:border-dark-border bg-transparent text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                          {...register('email', {
                            required: 'Email is required',
                            pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' }
                          })}
                        />
                        {errors.email && <p className="text-[11px] text-red-500 mt-1">{errors.email.message}</p>}
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="phone" className="block text-xs font-semibold text-text dark:text-dark-text mb-1">Phone Number *</label>
                        <input
                          type="tel"
                          id="phone"
                          className="w-full px-3.5 py-2.5 rounded-lg border border-gray-200 dark:border-dark-border bg-transparent text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                          {...register('phone', { required: 'Phone is required' })}
                        />
                        {errors.phone && <p className="text-[11px] text-red-500 mt-1">{errors.phone.message}</p>}
                      </div>
                      <div>
                        <label htmlFor="subject" className="block text-xs font-semibold text-text dark:text-dark-text mb-1">Subject *</label>
                        <input
                          type="text"
                          id="subject"
                          className="w-full px-3.5 py-2.5 rounded-lg border border-gray-200 dark:border-dark-border bg-transparent text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                          {...register('subject', { required: 'Subject is required' })}
                        />
                        {errors.subject && <p className="text-[11px] text-red-500 mt-1">{errors.subject.message}</p>}
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-xs font-semibold text-text dark:text-dark-text mb-1">Message *</label>
                      <textarea
                        id="message"
                        rows="5"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-gray-200 dark:border-dark-border bg-transparent text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                        {...register('message', { required: 'Message is required' })}
                      />
                      {errors.message && <p className="text-[11px] text-red-500 mt-1">{errors.message.message}</p>}
                    </div>

                    <button type="submit" className="btn-primary w-full py-3 flex items-center justify-center gap-2">
                      <Send size={16} /> Send Message
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-96 w-full border-t border-gray-200 dark:border-dark-border">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15655.80521634568!2d79.64366632483863!3d11.10280549495764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a55225c56c2d1b7%3A0xe510c42289650b28!2sMayiladuthurai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1722368940000!5m2!1sen!2sin"
          className="w-full h-full border-none"
          allowFullScreen=""
          loading="lazy"
          title="Kalaimahal School Map Location"
        />
      </section>
    </>
  );
}
