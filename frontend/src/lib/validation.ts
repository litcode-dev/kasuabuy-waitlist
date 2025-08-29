import { z } from 'zod';

// Function to validate and normalize Nigerian phone numbers with specific error messages
function validateNigerianPhone(phone: string): { isValid: boolean; normalized?: string; error?: string } {
  // Check if phone is empty
  if (!phone || phone.trim() === '') {
    return { isValid: false, error: 'Phone number is required' };
  }

  // Remove all non-digit characters except +
  const cleaned = phone.replace(/[^\d+]/g, '');

  // Check for invalid characters (if cleaned version is different from original after removing spaces/dashes)
  const allowedChars = phone.replace(/[\d+\s\-()]/g, '');
  if (allowedChars.length > 0) {
    return { isValid: false, error: 'Phone number contains invalid characters. Please use only numbers, +, spaces, or dashes.' };
  }

  // Check different formats and provide specific error messages
  if (/^\+234[789]\d{9}$/.test(cleaned)) {
    // Already in +234 format (+234 + 10 digits = 14 total)
    return { isValid: true, normalized: cleaned };
  } else if (/^234[789]\d{9}$/.test(cleaned)) {
    // 234 format without + (234 + 10 digits = 13 total)
    return { isValid: true, normalized: '+' + cleaned };
  } else if (/^0[789]\d{9}$/.test(cleaned)) {
    // Local format starting with 0 (0 + 10 digits = 11 total)
    return { isValid: true, normalized: '+234' + cleaned.substring(1) };
  }

  // Check for common length issues
  if (/^\+234/.test(cleaned)) {
    if (cleaned.length < 14) {
      return { isValid: false, error: 'Phone number is too short. Nigerian numbers should have 10 digits after +234 (e.g., +2348123456789)' };
    } else if (cleaned.length > 14) {
      return { isValid: false, error: 'Phone number is too long. Nigerian numbers should have 10 digits after +234 (e.g., +2348123456789)' };
    }
  } else if (/^234/.test(cleaned)) {
    if (cleaned.length < 13) {
      return { isValid: false, error: 'Phone number is too short. Nigerian numbers should have 10 digits after 234 (e.g., 2348123456789)' };
    } else if (cleaned.length > 13) {
      return { isValid: false, error: 'Phone number is too long. Nigerian numbers should have 10 digits after 234 (e.g., 2348123456789)' };
    }
  } else if (/^0/.test(cleaned)) {
    if (cleaned.length < 11) {
      return { isValid: false, error: 'Phone number is too short. Nigerian numbers should be 11 digits starting with 0 (e.g., 08123456789)' };
    } else if (cleaned.length > 11) {
      return { isValid: false, error: 'Phone number is too long. Nigerian numbers should be 11 digits starting with 0 (e.g., 08123456789)' };
    }
  }

  // Check if it starts with valid Nigerian network codes
  if (/^\+234/.test(cleaned) && !/^\+234[789]/.test(cleaned)) {
    return { isValid: false, error: 'Invalid network code. Nigerian numbers should start with +2347, +2348, or +2349' };
  } else if (/^234/.test(cleaned) && !/^234[789]/.test(cleaned)) {
    return { isValid: false, error: 'Invalid network code. Nigerian numbers should start with 2347, 2348, or 2349' };
  } else if (/^0/.test(cleaned) && !/^0[789]/.test(cleaned)) {
    return { isValid: false, error: 'Invalid network code. Nigerian numbers should start with 070, 080, 081, 090, 091, etc.' };
  }

  // Generic invalid format message
  return { isValid: false, error: 'Invalid phone number format. Please use a valid Nigerian number (e.g., 08123456789, +2348123456789, or 2348123456789)' };
}

// Legacy function for backward compatibility
// function normalizeNigerianPhone(phone: string): string | null {
//   const result = validateNigerianPhone(phone);
//   return result.isValid ? result.normalized! : null;
// }

export const waitlistSchema = z.object({
  full_name: z
    .string()
    .min(2, 'Full name must be at least 2 characters')
    .max(100, 'Full name cannot exceed 100 characters')
    .trim(),
  email: z
    .string()
    .email('Please enter a valid email address')
    .max(255, 'Email address cannot exceed 255 characters')
    .optional()
    .or(z.literal('')),
  phone_number: z
    .string()
    .refine(
      (phone) => {
        const result = validateNigerianPhone(phone);
        return result.isValid;
      },
      {
        message: 'Please enter a valid Nigerian phone number (e.g., +2348123456789, 08123456789, or 2348123456789)',
      }
    )
    .transform((phone) => {
      const result = validateNigerianPhone(phone);
      return result.isValid ? result.normalized! : phone;
    }),
  language: z.enum(['en', 'ha'], {
    message: 'Language selection is required',
  }),
})

export type WaitlistFormData = z.infer<typeof waitlistSchema>;

export function validateWaitlistForm(data: unknown): {
  success: boolean;
  data?: WaitlistFormData;
  errors?: Record<string, string>;
} {
  try {
    const validatedData = waitlistSchema.parse(data);
    return {
      success: true,
      data: validatedData,
    };
  } catch (error) {
    if (error instanceof z.ZodError) {
      const errors: Record<string, string> = {};
      error.issues.forEach((err) => {
        if (err.path.length > 0) {
          errors[String(err.path[0])] = err.message;
        }
      });
      return {
        success: false,
        errors,
      };
    }
    return {
      success: false,
      errors: { general: 'Validation failed' },
    };
  }
}
