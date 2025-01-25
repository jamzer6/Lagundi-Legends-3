export const getLastSixMonths = () => {
  const months = [];
  const currentDate = new Date();
  
  for (let i = 5; i >= 0; i--) {
    const date = new Date();
    date.setMonth(currentDate.getMonth() - i);
    months.push(date.toLocaleString('default', { month: 'long' }));
  }
  
  return months;
};

export const calculateMonthlyAppointments = (appointments: any[], months: string[]) => {
  const monthlyData = new Array(6).fill(0);
  const currentDate = new Date();
  
  appointments.forEach(apt => {
    const appointmentDate = new Date(apt.date);
    const monthDiff = currentDate.getMonth() - appointmentDate.getMonth() +
      (12 * (currentDate.getFullYear() - appointmentDate.getFullYear()));
    
    if (monthDiff >= 0 && monthDiff < 6) {
      monthlyData[5 - monthDiff]++;
    }
  });
  
  return monthlyData;
};