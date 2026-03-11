export interface ShakeProps {
  active?: boolean;
  target?: string | HTMLElement;
  duration?: number;
  direction?: 'row' | 'column';
  amplitude?: number;
  frequency?: number;
}