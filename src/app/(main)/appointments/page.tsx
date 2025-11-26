import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { PlusCircle } from "lucide-react";
import { AppointmentForm } from "@/components/appointments/appointment-form";
import { appointments } from "@/lib/data";

export default function AppointmentsPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <h1 className="font-headline text-3xl font-bold tracking-tight">
          Appointments
        </h1>
        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <PlusCircle className="mr-2 h-4 w-4" />
              New Appointment
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle className="font-headline">Add Appointment</DialogTitle>
              <DialogDescription>
                Schedule a new appointment. Click save when you're done.
              </DialogDescription>
            </DialogHeader>
            <AppointmentForm />
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <div className="md:col-span-2">
          <Card>
            <CardContent className="p-0">
              <Calendar
                mode="single"
                className="w-full"
                classNames={{
                  months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0 p-4",
                  month: "space-y-4 w-full",
                  caption_label: "font-headline text-lg",
                }}
              />
            </CardContent>
          </Card>
        </div>
        <div className="md:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle className="font-headline text-xl">
                Today's Schedule
              </CardTitle>
              <CardDescription>{new Date().toDateString()}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {appointments.map((appt) => (
                  <div key={appt.id} className="flex items-start">
                    <div className="w-20 text-sm text-muted-foreground">
                      {appt.time}
                    </div>
                    <div className="flex-1 border-l-2 border-primary pl-4">
                      <p className="font-semibold">{appt.title}</p>
                      <p className="text-sm text-muted-foreground">
                        {appt.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
