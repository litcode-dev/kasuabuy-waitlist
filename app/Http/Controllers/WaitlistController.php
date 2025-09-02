<?php

namespace App\Http\Controllers;

use App\Http\Requests\WaitlistRequest;
use App\Jobs\SendWaitlistWelcomeEmail;
use App\Models\WaitlistEntry;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class WaitlistController extends Controller
{
    /**
     * Store a new waitlist entry.
     */
    public function store(WaitlistRequest $request): JsonResponse
    {
        try {
            // Create new waitlist entry
            $waitlistEntry = WaitlistEntry::create([
                'full_name' => $request->validated()['full_name'],
                'email' => $request->validated()['email'] ?? null,
                'phone_number' => $request->validated()['phone_number'],
                'language' => $request->validated()['language'],
            ]);

            // Dispatch email job if email is provided
            if ($waitlistEntry->email) {
                SendWaitlistWelcomeEmail::dispatch($waitlistEntry);
            }

            return response()->json([
                'success' => true,
                'message' => 'Successfully added to waitlist',
                'data' => [
                    'id' => $waitlistEntry->id,
                    'full_name' => $waitlistEntry->full_name,
                    'email' => $waitlistEntry->email,
                    'phone_number' => $waitlistEntry->phone_number,
                    'language' => $waitlistEntry->language,
                    'created_at' => $waitlistEntry->created_at->toISOString(),
                ]
            ], 201);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Failed to add to waitlist. Please try again.',
                'errors' => ['general' => ['An unexpected error occurred.']]
            ], 500);
        }
    }
}
