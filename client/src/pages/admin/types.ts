export interface ChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    fill: boolean;
    borderColor: string;
    tension: number;
  }[];
}

export interface Stats {
  totalPatients: number;
  totalAppointments: number;
  pendingAppointments: number;
  completedAppointments: number;
}