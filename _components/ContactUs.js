'use client'
import React from 'react'
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
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
import { Mail, PencilLine, User } from 'lucide-react'
import { Textarea } from '@/components/ui/textarea'

const ContactUs = () => {
    const formSchema = z.object({
        username: z.string().min(2, { message: "Username must be at least 2 characters." }).max(50, { message: "Username cannot exceed 50 characters." }),
        email: z.string().email({ message: "Invalid email address." }),
        message: z.string().min(10, { message: "Message must be at least 10 characters." }).max(500, { message: "Message cannot exceed 500 characters." }),
    });

    // 1. Define your form.
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
            email: "",
            message: ""
        },
    });

    // 2. Define a submit handler.
    function onSubmit(values) {
        // Do something with the form values.
        console.log(values);
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className='font-bold'>Email : </FormLabel>
                            <FormControl>
                                <div className='relative'>
                                    <Input className='placeholder-shown:bg-[#e2e2e2] pr-9' placeholder="john@gmail.com" {...field}></Input>
                                    <Mail className='absolute top-0 right-0 py-1 px-2 h-full w-8' />
                                </div>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className='font-bold'>Name Full : </FormLabel>
                            <FormControl>
                                <div className='relative'>
                                    <Input className='placeholder-shown:bg-[#e2e2e2] pr-9' placeholder="john vince" {...field}></Input>
                                    <User className='absolute top-0 right-0 py-1 px-2 h-full w-8' />
                                </div>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className='font-bold'>Message : </FormLabel>
                            <FormControl>
                                <div className='relative'>
                                    <Textarea className='placeholder-shown:bg-[#e2e2e2] pr-9' placeholder="Write your message" {...field}></Textarea>
                                    <PencilLine className='absolute top-0 right-0 py-2 px-2 w-8 h-8' />
                                </div>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit" className='inline-block w-full rounded-lg'>Submit Now &#8594;</Button>
            </form>
        </Form>
    )
}

export default ContactUs
