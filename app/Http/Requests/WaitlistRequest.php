<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Contracts\Validation\Validator;

class WaitlistRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'full_name' => 'required|string|min:2|max:100',
            'phone_number' => [
                'required',
                'string',
                'regex:/^(\+234[789]\d{9}|234[789]\d{9}|0[789]\d{9})$/',
                function ($attribute, $value, $fail) {
                    $normalized = $this->normalizePhoneNumber($value);
                    if (!$normalized) {
                        $fail('Please enter a valid Nigerian phone number.');
                        return;
                    }
                    
                    // Check uniqueness with normalized number
                    $exists = \App\Models\WaitlistEntry::where('phone_number', $normalized)->exists();
                    if ($exists) {
                        $fail('This phone number is already registered.');
                    }
                }
            ],
            'language' => 'required|in:en,ha'
        ];
    }

    /**
     * Normalize phone number to international format (+234)
     */
    public function normalizePhoneNumber($phone): ?string
    {
        // Remove all non-digit characters except +
        $phone = preg_replace('/[^\d+]/', '', $phone);
        
        // Handle different formats
        if (preg_match('/^\+234([789]\d{9})$/', $phone, $matches)) {
            // Already in +234 format (+234 + 10 digits)
            return '+234' . $matches[1];
        } elseif (preg_match('/^234([789]\d{9})$/', $phone, $matches)) {
            // 234 format without + (234 + 10 digits)
            return '+234' . $matches[1];
        } elseif (preg_match('/^0([789]\d{9})$/', $phone, $matches)) {
            // Local format starting with 0 (0 + 10 digits = 11 total)
            return '+234' . $matches[1];
        }
        
        return null;
    }

    /**
     * Prepare the data for validation.
     */
    protected function prepareForValidation()
    {
        if ($this->has('phone_number')) {
            $normalized = $this->normalizePhoneNumber($this->phone_number);
            if ($normalized) {
                $this->merge([
                    'phone_number' => $normalized
                ]);
            }
        }
    }

    /**
     * Get custom error messages for validation rules.
     */
    public function messages(): array
    {
        return [
            'full_name.required' => 'Full name is required.',
            'full_name.min' => 'Full name must be at least 2 characters.',
            'full_name.max' => 'Full name cannot exceed 100 characters.',
            'phone_number.required' => 'Phone number is required.',
            'phone_number.regex' => 'Please enter a valid Nigerian phone number (e.g., +2348123456789, 08123456789, or 2348123456789).',
            'language.required' => 'Language selection is required.',
            'language.in' => 'Please select a valid language (English or Hausa).'
        ];
    }

    /**
     * Handle a failed validation attempt.
     */
    protected function failedValidation(Validator $validator)
    {
        throw new HttpResponseException(
            response()->json([
                'success' => false,
                'message' => 'Validation failed',
                'errors' => $validator->errors()->toArray()
            ], 422)
        );
    }
}
