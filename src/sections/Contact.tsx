import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion } from 'motion/react';
import { CheckCircle2, XCircle } from 'lucide-react';
import useWeb3Forms from '@web3forms/react'; // Import the hook

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

// 1. Define the validation schema (same as before)
const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  phone: z.string().optional(),
  service: z.string().min(1, { message: 'Please select a service.' }),
  timeline: z.string().optional(),
  details: z.string().min(10, { message: 'Please provide some details.' }),
});

type FormValues = z.infer<typeof formSchema>;

export const Contact = () => {
  // 2. Setup React Hook Form
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      service: '',
      timeline: '',
      details: '',
    },
  });

  // 3. Setup Web3Forms Hook
  const [result, setResult] = useState<{ success: boolean; message: string } | null>(null);

  const { submit: onSubmit } = useWeb3Forms({
    access_key: import.meta.env.VITE_WEB3FORMS_KEY || import.meta.env.VITE_WEB3FORMS_KEY2, // Use env variable
    settings: {
      from_name: "Ubaidullah's Portfolio",
      subject: 'New Contact Message from Portfolio',
    },
    onSuccess: (msg, data) => {
      setResult({ success: true, message: msg });
      reset(); // Clear the form on success
      setTimeout(() => setResult(null), 5000); // Hide message after 5 seconds
    },
    onError: (msg, data) => {
      setResult({ success: false, message: msg });
    },
  });

  return (
    <section id="contact" className="py-24 bg-background relative border-t border-white/5">
      <div className="container mx-auto px-4 md:px-8 max-w-4xl">
        
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Contact me</h2>
          <p className="text-muted-foreground text-sm md:text-base">
            Cultivating Connections: Reach Out And Connect With Me
          </p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#111111] p-6 md:p-10 rounded-2xl border border-white/5 shadow-2xl"
        >
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            
            {/* Web3Forms Honeypot Spam Protection (Hidden) */}
            <input type="checkbox" id="botcheck" className="hidden" style={{ display: 'none' }} {...register('botcheck')} />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Name */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-white/80">Name</label>
                <Input placeholder="Your name" className="bg-[#1A1A1A] border-white/10 text-white focus-visible:ring-brand-orange" {...register('name')} />
                {errors.name && <p className="text-sm text-red-500">{errors.name.message}</p>}
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-white/80">Email</label>
                <Input placeholder="your@email.com" type="email" className="bg-[#1A1A1A] border-white/10 text-white focus-visible:ring-brand-orange" {...register('email')} />
                {errors.email && <p className="text-sm text-red-500">{errors.email.message}</p>}
              </div>

              {/* Phone Number */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-white/80">Phone Number</label>
                <Input placeholder="+92 300 1234567" className="bg-[#1A1A1A] border-white/10 text-white focus-visible:ring-brand-orange" {...register('phone')} />
                {errors.phone && <p className="text-sm text-red-500">{errors.phone.message}</p>}
              </div>

              {/* Service of Interest */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-white/80">Service Of Interest</label>
                <Controller
                  control={control}
                  name="service"
                  render={({ field }) => (
                    <Select 
  onValueChange={field.onChange} 
  value={field.value ?? ""} 
>
                      <SelectTrigger className="bg-[#1A1A1A] border-white/10 text-white focus:ring-brand-orange">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent className="bg-[#1A1A1A] border-white/10 text-white">
                        <SelectItem value="frontend">Frontend Development</SelectItem>
                        <SelectItem value="uiux">UI/UX Design</SelectItem>
                        <SelectItem value="backend">Backend (PHP/FastAPI)</SelectItem>
                        <SelectItem value="fullstack">Full-Stack Solution</SelectItem>
                      </SelectContent>
                    </Select>
                  )}
                />
                {errors.service && <p className="text-sm text-red-500">{errors.service.message}</p>}
              </div>

              {/* Timeline */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-white/80">Timeline</label>
                <Input placeholder="e.g., 1-2 weeks" className="bg-[#1A1A1A] border-white/10 text-white focus-visible:ring-brand-orange" {...register('timeline')} />
                {errors.timeline && <p className="text-sm text-red-500">{errors.timeline.message}</p>}
              </div>

              {/* Project Details */}
              <div className="space-y-2 md:row-span-2">
                <label className="text-sm font-medium text-white/80">Project Details...</label>
                <Textarea placeholder="Tell me about your project..." className="bg-[#1A1A1A] border-white/10 text-white focus-visible:ring-brand-orange min-h-[120px] resize-none" {...register('details')} />
                {errors.details && <p className="text-sm text-red-500">{errors.details.message}</p>}
              </div>

            </div>

            {/* Submission Status & Button */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-4">
              
              {/* Success/Error Message */}
              {result && (
                <motion.div 
                  initial={{ opacity: 0, x: -20 }} 
                  animate={{ opacity: 1, x: 0 }} 
                  className={`flex items-center gap-2 font-medium ${result.success ? 'text-green-400' : 'text-red-400'}`}
                >
                  {result.success ? <CheckCircle2 size={20} /> : <XCircle size={20} />}
                  {result.message}
                </motion.div>
              )}
              
              <Button 
                type="submit" 
                className="w-full md:w-auto bg-brand-orange hover:bg-brand-orange/90 text-black font-semibold px-10 py-2 ml-auto"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send'}
              </Button>
            </div>

          </form>
        </motion.div>
      </div>
    </section>
  );
};