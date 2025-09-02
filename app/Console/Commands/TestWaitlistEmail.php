<?php

namespace App\Console\Commands;

use App\Jobs\SendWaitlistWelcomeEmail;
use App\Models\WaitlistEntry;
use Illuminate\Console\Command;

class TestWaitlistEmail extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:test-waitlist-email';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Test the waitlist welcome email functionality';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $this->info('Creating test waitlist entry...');
        
        // Create a test waitlist entry with unique phone number
        $uniquePhone = '+234801234' . rand(1000, 9999);
        $waitlistEntry = WaitlistEntry::create([
            'full_name' => 'Test User ' . rand(100, 999),
            'email' => 'test' . rand(100, 999) . '@example.com',
            'phone_number' => $uniquePhone,
            'language' => 'en',
        ]);
        
        $this->info('Test waitlist entry created with ID: ' . $waitlistEntry->id);
        
        // Dispatch the email job
        $this->info('Dispatching welcome email job...');
        SendWaitlistWelcomeEmail::dispatch($waitlistEntry);
        
        $this->info('Email job dispatched successfully!');
        $this->info('Since MAIL_MAILER is set to "smtp", the email will be sent via Gmail SMTP.');
        
        return 0;
    }
}
