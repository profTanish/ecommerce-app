import { z } from "zod";
 import { zodResolver } from "@hookform/resolvers/zod";
 import { useForm } from "react-hook-form";
 import { orderValidation } from "../../lib/validation";
 
 import { Button } from "@/components/ui/button";
 import {
   Form,
   FormControl,
   FormField,
   FormItem,
   FormLabel,
   FormMessage,
 } from "@/components/ui/form";
 import { Input } from "@/components/ui/input";
 
 const AccountGeneral = () => {
   const form = useForm<z.infer<typeof orderValidation>>({
     resolver: zodResolver(orderValidation),
     defaultValues: {
       fullName: "",
       email: "",
       address: {
         phone: "",
         city: "",
         street: "",
       },
     },
   });
 
   function onSubmit(values: z.infer<typeof orderValidation>) {
     // Do something with the form values.
     // ✅ This will be type-safe and validated.
     console.log(values);
   }
 
   return (
     <Form {...form}>
       <div className="p-2.5 space-y-5">
         <h2 className="heading-tertiary">General Settings</h2>
 
         <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
           <div className="grid grid-cols-2 gap-4">
             <FormField
               control={form.control}
               name="fullName"
               render={({ field }) => (
                 <FormItem>
                   <FormLabel>Full Name</FormLabel>
                   <FormControl>
                     <Input
                       placeholder="Andrija Djordjevic"
                       {...field}
                       className="border-darkGray"
                     />
                   </FormControl>
                   <FormMessage />
                 </FormItem>
               )}
             />
 
             <FormField
               control={form.control}
               name="email"
               render={({ field }) => (
                 <FormItem>
                   <FormLabel>Email</FormLabel>
                   <FormControl>
                     <Input
                       placeholder="andrijaweb@office.com"
                       {...field}
                       className="border-darkGray"
                     />
                   </FormControl>
                   <FormMessage />
                 </FormItem>
               )}
             />
 
             <FormField
               control={form.control}
               name="address.phone"
               render={({ field }) => (
                 <FormItem>
                   <FormLabel>Phone</FormLabel>
                   <FormControl>
                     <Input
                       placeholder="0616667301"
                       {...field}
                       className="border-darkGray"
                     />
                   </FormControl>
                   <FormMessage />
                 </FormItem>
               )}
             />
 
             <FormField
               control={form.control}
               name="address.city"
               render={({ field }) => (
                 <FormItem>
                   <FormLabel>City</FormLabel>
                   <FormControl>
                     <Input
                       placeholder="Belgrade"
                       {...field}
                       className="border-darkGray"
                     />
                   </FormControl>
                   <FormMessage />
                 </FormItem>
               )}
             />
 
             <FormField
               control={form.control}
               name="address.street"
               render={({ field }) => (
                 <FormItem>
                   <FormLabel>Street</FormLabel>
                   <FormControl>
                     <Input
                       placeholder="Rudarska 6a"
                       {...field}
                       className="border-darkGray"
                     />
                   </FormControl>
                   <FormMessage />
                 </FormItem>
               )}
             />
           </div>
 
           <Button type="submit" className="">
             Update profile
           </Button>
         </form>
       </div>
     </Form>
   );
 };
 
 export default AccountGeneral;