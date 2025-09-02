<?php

namespace App\Jobs;

use App\Mail\WaitlistWelcomeMail;
use App\Models\WaitlistEntry;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Queue\Queueable;
use Illuminate\Support\Facades\Mail;

class SendWaitlistWelcomeEmail implements ShouldQueue
{
    use Queueable;

    /**
     * Create a new job instance.
     */
    public function __construct(
        public WaitlistEntry $waitlistEntry
    ) {
        //
    }

    /**
     * Execute the job.
     */
    public function handle(): void
    {
        // Send the welcome email to the waitlist entry
        Mail::to($this->waitlistEntry->email)
            ->send(new WaitlistWelcomeMail($this->waitlistEntry));
    }
}
