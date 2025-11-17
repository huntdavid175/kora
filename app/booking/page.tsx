import type { Metadata } from "next";
import BookingPageClient from "@/components/BookingPageClient";

export const metadata: Metadata = {
  title: "Kora Spa | Booking",
  description: "Select spa services and schedule your appointment at Kora Spa.",
};

export default function BookingPage() {
  return <BookingPageClient />;
}
