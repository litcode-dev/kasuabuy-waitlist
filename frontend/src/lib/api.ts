const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';

export interface WaitlistData {
  full_name: string;
  phone_number: string;
  language: string;
}

export interface ApiResponse<T = any> {
  success: boolean;
  message: string;
  data?: T;
  errors?: Record<string, string[]>;
}

export interface WaitlistEntry {
  id: number;
  full_name: string;
  phone_number: string;
  language: string;
  created_at: string;
}

export class ApiError extends Error {
  constructor(
    message: string,
    public status: number,
    public errors?: Record<string, string[]>
  ) {
    super(message);
    this.name = 'ApiError';
  }
}

export async function submitWaitlist(data: WaitlistData): Promise<WaitlistEntry> {
  try {
    const response = await fetch(`${API_BASE_URL}/api/waitlist`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const result: ApiResponse<WaitlistEntry> = await response.json();

    if (!response.ok) {
      throw new ApiError(
        result.message || 'Failed to submit waitlist entry',
        response.status,
        result.errors
      );
    }

    if (!result.success || !result.data) {
      throw new ApiError(
        result.message || 'Invalid response from server',
        response.status
      );
    }

    return result.data;
  } catch (error) {
    if (error instanceof ApiError) {
      throw error;
    }

    // Network or other errors
    throw new ApiError(
      'Network error. Please check your connection and try again.',
      0
    );
  }
}