export interface LeadFormData {
  name: string;
  email: string;
  phone: string;
  interest: string;
  budget: string;
  message: string;
}

export enum FormStatus {
  IDLE = 'IDLE',
  GENERATING = 'GENERATING',
  SUBMITTING = 'SUBMITTING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR',
}

export interface WaveConfig {
  wavelength: number;
  amplitude: number;
  speed: number;
  color: string;
  yOffset: number;
}