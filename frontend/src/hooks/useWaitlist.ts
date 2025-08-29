import { useState } from 'react';
import { submitWaitlist, ApiError, type WaitlistEntry } from '@/lib/api';
import { validateWaitlistForm, type WaitlistFormData } from '@/lib/validation';

export function useWaitlist() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submittedData, setSubmittedData] = useState<WaitlistEntry | null>(null);

  const submitForm = async (formData: WaitlistFormData): Promise<boolean> => {
    setIsSubmitting(true);
    setErrors({});

    try {
      // Validate form data
      const validation = validateWaitlistForm(formData);
      if (!validation.success) {
        setErrors(validation.errors || {});
        setIsSubmitting(false);
        return false;
      }

      // Submit to API
      const result = await submitWaitlist(validation.data!);
      setSubmittedData(result);
      setIsSuccess(true);
      return true;
    } catch (error) {
      if (error instanceof ApiError) {
        if (error.errors) {
          // Handle validation errors from backend
          const backendErrors: Record<string, string> = {};
          Object.entries(error.errors).forEach(([field, messages]) => {
            backendErrors[field] = messages[0]; // Take first error message
          });
          setErrors(backendErrors);
        } else {
          // Handle general API errors
          setErrors({ general: error.message });
        }
      } else {
        // Handle network or other errors
        setErrors({ general: 'An unexpected error occurred. Please try again.' });
      }
      return false;
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setIsSuccess(false);
    setErrors({});
    setSubmittedData(null);
  };

  return {
    isSubmitting,
    isSuccess,
    errors,
    submittedData,
    submitForm,
    resetForm,
  };
}
