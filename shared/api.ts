/**
 * Shared code between client and server
 * Useful to share types between client and server
 * and/or small pure JS functions that can be used on both client and server
 */

/**
 * Example response type for /api/demo
 */
export interface DemoResponse {
  message: string;
}

/**
 * Email API types
 */
export interface EmailRequest {
  type: "contact" | "signin" | "signup";
  data: {
    name?: string;
    email: string;
    subject?: string;
    message?: string;
    password?: string;
  };
}

export interface EmailResponse {
  success: boolean;
  message: string;
}
