import Navigation from "@/components/navigation";

export default function BookingCancellation() {
    return (
        <>
            <Navigation>
                <div className={"cont-md justified"}>
                    <h1>BOOKING & CANCELLATION</h1>

                    <p>Studio time has no minimum booking duration apart from 1 Hour.</p>

                    <p>A 50% down payment is required to secure the booking, this initial payment is subtracted from the
                        final bill.</p>

                    <p>Bookings are secured upon down-payment which is GST incl. Full refunds upon cancellation are
                        issued if Sandbox Studio receives at least 48 Hrs notice. We will refund 50% of the down-payment
                        for cancellations of less than 48 Hrs notice. For cancellations with less than 24 hours notice
                        we will only refund 25% of the down-payment, and we have a zero % refund policy for no
                        shows.</p>

                    <p>Our booking system will automatically notify the booker 24 hours prior via email and then again 2
                        hours prior via text message.</p>

                    <p>Contact Us if you have any questions.</p>

                </div>
            </Navigation>
        </>
    )
}