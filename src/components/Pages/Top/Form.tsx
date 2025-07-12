"use client"
import React from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { sendMail } from '@/lib/util'
 
const formSchema = z.object({
  companyName: z.string().min(1, {
    message: "Company name is required.",
  }),
  companyEmail: z.string().email().min(1, {
    message: "Email is required.",
  }),
  projectIdea: z.string().min(1, {
    message: "Project idea is required.",
  }),
  pricingRange: z.string().min(1, {
    message: "Pricing range is required.",
  }),
  projectDetail: z.string().optional()
})

const ContactForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      companyName: "",
      companyEmail: "",
      projectIdea: "",
      pricingRange: "",
      projectDetail: "",
    },
  })
  
  function onSubmit(values: z.infer<typeof formSchema>) {
    sendMail(values)
  }


  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="companyName"
          render={({ field }) => (
            <FormItem>
              <FormLabel className='inputLabel'>YOUR COMPANY NAME</FormLabel>
              <FormControl>
                <Input placeholder="Apple..." className="input" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="companyEmail"
          render={({ field }) => (
            <FormItem>
              <FormLabel className='inputLabel'>PROJECT IDEA</FormLabel>
              <FormControl>
                <Input placeholder="Ios 16 New UI......" className="input" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="projectIdea"
          render={({ field }) => (
            <FormItem>
              <FormLabel className='inputLabel'>PROJECT IDEA</FormLabel>
              <FormControl>
                <Input placeholder="Ios 16 New UI......" className="input" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="pricingRange"
          render={({ field }) => (
            <FormItem>
              <FormLabel className='inputLabel'>PRICING RANGE</FormLabel>
              <FormControl>
                <Input placeholder="800-1200$..." className="input" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="projectDetail"
          render={({ field }) => (
            <FormItem>
              <FormLabel className='inputLabel'>TELL ME MORE</FormLabel>
              <FormControl>
                <Input placeholder="Where are you located now..." className="input" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className='ml-auto block text-[16px] uppercase font-semibold min-h-[40px] min-w-[200px]'>SEND</Button>
      </form> 
    </Form>
  )

}

export default ContactForm